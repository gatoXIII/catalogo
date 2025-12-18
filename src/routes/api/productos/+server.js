// src/routes/api/productos/+server.js
import { json } from '@sveltejs/kit';
import { supabaseAdmin } from '$lib/supabaseServer';
import { generateSlug } from '$lib/supabaseClient';

// ========================================
// GET - Listar productos con filtros
// ========================================
export async function GET({ url }) {
  try {
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '20');
    const categoriaId = url.searchParams.get('categoria');
    const marcaId = url.searchParams.get('marca');
    const busqueda = url.searchParams.get('q');
    const destacados = url.searchParams.get('destacados');
    
    // Construir query
    let query = supabaseAdmin
      .from('vista_productos_completos')
      .select('*', { count: 'exact' })
      .eq('activo', true)
      .order('created_at', { ascending: false });
    
    // Aplicar filtros
    if (categoriaId) {
      query = query.eq('categoria_id', categoriaId);
    }
    
    if (marcaId) {
      query = query.eq('marca_id', marcaId);
    }
    
    if (busqueda) {
      query = query.or(`nombre.ilike.%${busqueda}%,descripcion_larga.ilike.%${busqueda}%`);
    }
    
    if (destacados === 'true') {
      query = query.eq('destacado', true);
    }
    
    // Paginación
    const from = (page - 1) * limit;
    const to = from + limit - 1;
    query = query.range(from, to);
    
    const { data, error, count } = await query;
    
    if (error) throw error;
    
    return json({
      success: true,
      data,
      pagination: {
        page,
        limit,
        total: count,
        totalPages: Math.ceil(count / limit)
      }
    });
  } catch (error) {
    console.error('Error GET productos:', error);
    return json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// ========================================
// POST - Crear nuevo producto
// ========================================
export async function POST({ request }) {
  try {
    const body = await request.json();
    
    // Validaciones básicas
    if (!body.nombre || !body.precio) {
      return json(
        { success: false, error: 'Nombre y precio son requeridos' },
        { status: 400 }
      );
    }
    
    // Generar slug único
    let slug = body.slug || generateSlug(body.nombre);
    
    // Verificar si el slug ya existe
    const { data: existingSlug } = await supabaseAdmin
      .from('productos')
      .select('slug')
      .eq('slug', slug)
      .single();
    
    if (existingSlug) {
      slug = `${slug}-${Date.now()}`;
    }
    
    // Preparar datos del producto
    const productoData = {
      nombre: body.nombre,
      descripcion_corta: body.descripcion_corta || null,
      descripcion_larga: body.descripcion_larga || null,
      precio: parseFloat(body.precio),
      precio_oferta: body.precio_oferta ? parseFloat(body.precio_oferta) : null,
      stock: parseInt(body.stock) || 0,
      stock_minimo: parseInt(body.stock_minimo) || 5,
      categoria_id: body.categoria_id || null,
      marca_id: body.marca_id || null,
      imagen_url: body.imagen_url || null,
      imagenes_adicionales: body.imagenes_adicionales || [],
      slug,
      sku: body.sku || null,
      activo: body.activo !== undefined ? body.activo : true,
      destacado: body.destacado || false
    };
    
    // Insertar en BD
    const { data, error } = await supabaseAdmin
      .from('productos')
      .insert(productoData)
      .select()
      .single();
    
    if (error) throw error;
    
    return json({
      success: true,
      data,
      message: 'Producto creado exitosamente'
    }, { status: 201 });
    
  } catch (error) {
    console.error('Error POST producto:', error);
    return json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// ========================================
// PUT - Actualizar producto
// ========================================
export async function PUT({ request }) {
  try {
    const body = await request.json();
    
    if (!body.id) {
      return json(
        { success: false, error: 'ID del producto requerido' },
        { status: 400 }
      );
    }
    
    // Preparar datos para actualización (solo campos presentes)
    const updateData = {};
    
    const camposPermitidos = [
      'nombre', 'descripcion_corta', 'descripcion_larga',
      'precio', 'precio_oferta', 'stock', 'stock_minimo',
      'categoria_id', 'marca_id', 'imagen_url', 'imagenes_adicionales',
      'slug', 'sku', 'activo', 'destacado'
    ];
    
    camposPermitidos.forEach(campo => {
      if (body[campo] !== undefined) {
        updateData[campo] = body[campo];
      }
    });
    
    // Actualizar
    const { data, error } = await supabaseAdmin
      .from('productos')
      .update(updateData)
      .eq('id', body.id)
      .select()
      .single();
    
    if (error) throw error;
    
    return json({
      success: true,
      data,
      message: 'Producto actualizado exitosamente'
    });
    
  } catch (error) {
    console.error('Error PUT producto:', error);
    return json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// ========================================
// DELETE - Eliminar producto (soft delete)
// ========================================
export async function DELETE({ url }) {
  try {
    const id = url.searchParams.get('id');
    
    if (!id) {
      return json(
        { success: false, error: 'ID del producto requerido' },
        { status: 400 }
      );
    }
    
    // Soft delete: marcar como inactivo
    const { data, error } = await supabaseAdmin
      .from('productos')
      .update({ activo: false })
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    
    return json({
      success: true,
      data,
      message: 'Producto eliminado exitosamente'
    });
    
  } catch (error) {
    console.error('Error DELETE producto:', error);
    return json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}