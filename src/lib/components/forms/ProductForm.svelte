<!-- src/lib/components/forms/ProductForm.svelte -->
<script>
  import { createEventDispatcher } from 'svelte';
  import { Save, X, Upload, Trash2, Loader2 } from 'lucide-svelte';
  
  const dispatch = createEventDispatcher();
  
  // Props
  export let producto = null;
  export let categorias = [];
  export let marcas = [];
  export let modoEdicion = false;
  
  // Estado del formulario
  let loading = false;
  let error = '';
  
  // Datos del producto
  let formData = {
    id: producto?.id || null,
    nombre: producto?.nombre || '',
    descripcion_corta: producto?.descripcion_corta || '',
    descripcion_larga: producto?.descripcion_larga || '',
    precio: producto?.precio || '',
    precio_oferta: producto?.precio_oferta || '',
    stock: producto?.stock || 0,
    stock_minimo: producto?.stock_minimo || 5,
    categoria_id: producto?.categoria_id || '',
    marca_id: producto?.marca_id || '',
    imagen_url: producto?.imagen_url || '',
    sku: producto?.sku || '',
    activo: producto?.activo !== undefined ? producto.activo : true,
    destacado: producto?.destacado || false
  };
  
  // Validación
  $: formularioValido = formData.nombre.trim() !== '' && 
                        formData.precio !== '' && 
                        parseFloat(formData.precio) > 0;
  
  // Función para enviar formulario
  async function handleSubmit() {
    if (!formularioValido || loading) return;
    
    loading = true;
    error = '';
    
    try {
      const url = '/api/productos';
      const method = modoEdicion ? 'PUT' : 'POST';
      
      const body = {
        ...formData,
        precio: parseFloat(formData.precio),
        precio_oferta: formData.precio_oferta ? parseFloat(formData.precio_oferta) : null,
        stock: parseInt(formData.stock) || 0,
        stock_minimo: parseInt(formData.stock_minimo) || 5,
        categoria_id: formData.categoria_id || null,
        marca_id: formData.marca_id || null
      };
      
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      
      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.error || 'Error al guardar el producto');
      }
      
      // Emitir evento de éxito
      dispatch('success', result.data);
      
    } catch (err) {
      error = err.message;
      console.error('Error guardando producto:', err);
    } finally {
      loading = false;
    }
  }
  
  // Función para cancelar
  function handleCancel() {
    dispatch('cancel');
  }
  
  // Función para subir imagen (placeholder por ahora)
  function handleImageUpload() {
    alert('La subida de imágenes a Cloudinary se implementará en la siguiente fase');
  }
</script>

<form on:submit|preventDefault={handleSubmit} class="space-y-6">
  <!-- Información básica -->
  <div class="bg-white rounded-xl shadow-sm p-6">
    <h3 class="text-lg font-semibold text-gray-800 mb-4">Información Básica</h3>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- Nombre -->
      <div class="md:col-span-2">
        <label class="label">
          Nombre del producto <span class="text-red-500">*</span>
        </label>
        <input
          type="text"
          bind:value={formData.nombre}
          placeholder="Ej: Laptop Gamer Pro"
          class="input"
          required
          disabled={loading}
        />
      </div>
      
      <!-- SKU -->
      <div>
        <label class="label">SKU (Código)</label>
        <input
          type="text"
          bind:value={formData.sku}
          placeholder="Ej: LAP-001"
          class="input"
          disabled={loading}
        />
      </div>
      
      <!-- Categoría -->
      <div>
        <label class="label">Categoría</label>
        <select bind:value={formData.categoria_id} class="input" disabled={loading}>
          <option value="">Sin categoría</option>
          {#each categorias as categoria}
            <option value={categoria.id}>{categoria.nombre}</option>
          {/each}
        </select>
      </div>
      
      <!-- Marca -->
      <div>
        <label class="label">Marca</label>
        <select bind:value={formData.marca_id} class="input" disabled={loading}>
          <option value="">Sin marca</option>
          {#each marcas as marca}
            <option value={marca.id}>{marca.nombre}</option>
          {/each}
        </select>
      </div>
      
      <!-- Descripción corta -->
      <div class="md:col-span-2">
        <label class="label">Descripción corta</label>
        <input
          type="text"
          bind:value={formData.descripcion_corta}
          placeholder="Descripción breve para listados"
          class="input"
          disabled={loading}
          maxlength="150"
        />
        <p class="text-xs text-gray-500 mt-1">
          {formData.descripcion_corta.length}/150 caracteres
        </p>
      </div>
      
      <!-- Descripción larga -->
      <div class="md:col-span-2">
        <label class="label">Descripción detallada</label>
        <textarea
          bind:value={formData.descripcion_larga}
          placeholder="Descripción completa del producto"
          rows="4"
          class="input resize-none"
          disabled={loading}
        ></textarea>
      </div>
    </div>
  </div>
  
  <!-- Precios e inventario -->
  <div class="bg-white rounded-xl shadow-sm p-6">
    <h3 class="text-lg font-semibold text-gray-800 mb-4">Precios e Inventario</h3>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <!-- Precio -->
      <div>
        <label class="label">
          Precio <span class="text-red-500">*</span>
        </label>
        <div class="relative">
          <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
          <input
            type="number"
            bind:value={formData.precio}
            placeholder="0.00"
            step="0.01"
            min="0"
            class="input pl-8"
            required
            disabled={loading}
          />
        </div>
      </div>
      
      <!-- Precio oferta -->
      <div>
        <label class="label">Precio de oferta</label>
        <div class="relative">
          <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
          <input
            type="number"
            bind:value={formData.precio_oferta}
            placeholder="0.00"
            step="0.01"
            min="0"
            class="input pl-8"
            disabled={loading}
          />
        </div>
      </div>
      
      <!-- Stock -->
      <div>
        <label class="label">Stock actual</label>
        <input
          type="number"
          bind:value={formData.stock}
          placeholder="0"
          min="0"
          class="input"
          disabled={loading}
        />
      </div>
      
      <!-- Stock mínimo -->
      <div>
        <label class="label">Stock mínimo</label>
        <input
          type="number"
          bind:value={formData.stock_minimo}
          placeholder="5"
          min="0"
          class="input"
          disabled={loading}
        />
        <p class="text-xs text-gray-500 mt-1">Alerta de bajo stock</p>
      </div>
    </div>
  </div>
  
  <!-- Imagen -->
  <div class="bg-white rounded-xl shadow-sm p-6">
    <h3 class="text-lg font-semibold text-gray-800 mb-4">Imagen del Producto</h3>
    
    <div class="space-y-4">
      <!-- URL de imagen -->
      <div>
        <label class="label">URL de la imagen</label>
        <input
          type="url"
          bind:value={formData.imagen_url}
          placeholder="https://ejemplo.com/imagen.jpg"
          class="input"
          disabled={loading}
        />
      </div>
      
      <!-- Preview de imagen -->
      {#if formData.imagen_url}
        <div class="relative w-48 h-48 bg-gray-100 rounded-lg overflow-hidden">
          <img 
            src={formData.imagen_url} 
            alt="Preview"
            class="w-full h-full object-cover"
            on:error={() => formData.imagen_url = ''}
          />
          <button
            type="button"
            on:click={() => formData.imagen_url = ''}
            class="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
            title="Eliminar imagen"
          >
            <X class="w-4 h-4" />
          </button>
        </div>
      {:else}
        <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <Upload class="w-12 h-12 text-gray-400 mx-auto mb-3" />
          <p class="text-sm text-gray-600 mb-2">Sube una imagen o pega una URL</p>
          <button
            type="button"
            on:click={handleImageUpload}
            class="btn-outline text-sm"
            disabled={loading}
          >
            Subir imagen
          </button>
        </div>
      {/if}
    </div>
  </div>
  
  <!-- Opciones adicionales -->
  <div class="bg-white rounded-xl shadow-sm p-6">
    <h3 class="text-lg font-semibold text-gray-800 mb-4">Opciones</h3>
    
    <div class="space-y-3">
      <!-- Producto activo -->
      <label class="flex items-center space-x-3 cursor-pointer">
        <input
          type="checkbox"
          bind:checked={formData.activo}
          class="w-5 h-5 text-primary-600 rounded focus:ring-primary-500"
          disabled={loading}
        />
        <div>
          <span class="font-medium text-gray-700">Producto activo</span>
          <p class="text-sm text-gray-500">Visible en el catálogo público</p>
        </div>
      </label>
      
      <!-- Producto destacado -->
      <label class="flex items-center space-x-3 cursor-pointer">
        <input
          type="checkbox"
          bind:checked={formData.destacado}
          class="w-5 h-5 text-primary-600 rounded focus:ring-primary-500"
          disabled={loading}
        />
        <div>
          <span class="font-medium text-gray-700">Producto destacado</span>
          <p class="text-sm text-gray-500">Mostrar en secciones destacadas</p>
        </div>
      </label>
    </div>
  </div>
  
  <!-- Errores -->
  {#if error}
    <div class="bg-red-50 border border-red-200 rounded-lg p-4">
      <p class="text-sm text-red-700">{error}</p>
    </div>
  {/if}
  
  <!-- Botones de acción -->
  <div class="flex justify-end space-x-3 pt-6 border-t border-gray-200">
    <button
      type="button"
      on:click={handleCancel}
      class="btn-secondary"
      disabled={loading}
    >
      Cancelar
    </button>
    
    <button
      type="submit"
      class="btn-primary flex items-center gap-2"
      disabled={!formularioValido || loading}
    >
      {#if loading}
        <Loader2 class="w-5 h-5 animate-spin" />
        Guardando...
      {:else}
        <Save class="w-5 h-5" />
        {modoEdicion ? 'Actualizar' : 'Crear'} Producto
      {/if}
    </button>
  </div>
</form>