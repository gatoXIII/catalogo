<!-- src/routes/dashboard/productos/+page.svelte -->
<script>
  import { Package, Plus, Edit, Trash2, Search, X, CheckCircle2, AlertCircle } from 'lucide-svelte';
  import ProductForm from '$lib/components/forms/ProductForm.svelte';
  
  export let data;
  
  let productos = data.productos || [];
  let categorias = data.categorias || [];
  let marcas = data.marcas || [];
  
  // Estados
  let busqueda = '';
  let categoriaFiltro = '';
  let mostrarFormulario = false;
  let productoEditando = null;
  let modoEdicion = false;
  
  // Estados de feedback
  let mensaje = { tipo: '', texto: '', visible: false };
  
  // Filtrar productos
  $: productosFiltrados = productos.filter(p => {
    const coincideBusqueda = p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                            (p.sku || '').toLowerCase().includes(busqueda.toLowerCase());
    const coincideCategoria = !categoriaFiltro || p.categoria_id === categoriaFiltro;
    return coincideBusqueda && coincideCategoria;
  });
  
  // Función para abrir formulario de crear
  function abrirFormularioCrear() {
    productoEditando = null;
    modoEdicion = false;
    mostrarFormulario = true;
  }
  
  // Función para abrir formulario de editar
  function abrirFormularioEditar(producto) {
    productoEditando = producto;
    modoEdicion = true;
    mostrarFormulario = true;
  }
  
  // Función para cerrar formulario
  function cerrarFormulario() {
    mostrarFormulario = false;
    productoEditando = null;
    modoEdicion = false;
  }
  
  // Función cuando se guarda exitosamente
  async function handleSuccess(event) {
    const producto = event.detail;
    
    if (modoEdicion) {
      // Actualizar en la lista
      productos = productos.map(p => p.id === producto.id ? producto : p);
      mostrarMensaje('success', 'Producto actualizado correctamente');
    } else {
      // Recargar productos
      await recargarProductos();
      mostrarMensaje('success', 'Producto creado correctamente');
    }
    
    cerrarFormulario();
  }
  
  // Función para eliminar producto
  async function eliminarProducto(producto) {
    if (!confirm(`¿Estás seguro de eliminar "${producto.nombre}"?`)) return;
    
    try {
      const response = await fetch(`/api/productos?id=${producto.id}`, {
        method: 'DELETE'
      });
      
      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.error);
      }
      
      productos = productos.filter(p => p.id !== producto.id);
      mostrarMensaje('success', 'Producto eliminado correctamente');
      
    } catch (error) {
      console.error('Error eliminando producto:', error);
      mostrarMensaje('error', error.message);
    }
  }
  
  // Recargar productos
  async function recargarProductos() {
    try {
      const response = await fetch('/api/productos?limit=100');
      const result = await response.json();
      if (result.success) {
        productos = result.data;
      }
    } catch (error) {
      console.error('Error recargando productos:', error);
    }
  }
  
  // Mostrar mensaje temporal
  function mostrarMensaje(tipo, texto) {
    mensaje = { tipo, texto, visible: true };
    setTimeout(() => {
      mensaje.visible = false;
    }, 5000);
  }
  
  // Función para obtener clase de estado de stock
  function getStockClass(producto) {
    if (producto.stock === 0) return 'text-red-600';
    if (producto.stock <= producto.stock_minimo) return 'text-amber-600';
    return 'text-green-600';
  }
</script>

<div class="space-y-6">
  <!-- Mensaje de feedback -->
  {#if mensaje.visible}
    <div class="fixed top-20 right-4 z-50 animate-slide-in">
      <div class={`rounded-lg shadow-lg p-4 flex items-center gap-3 ${
        mensaje.tipo === 'success' ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
      }`}>
        {#if mensaje.tipo === 'success'}
          <CheckCircle2 class="w-5 h-5 text-green-600" />
        {:else}
          <AlertCircle class="w-5 h-5 text-red-600" />
        {/if}
        <span class={mensaje.tipo === 'success' ? 'text-green-700' : 'text-red-700'}>
          {mensaje.texto}
        </span>
        <button on:click={() => mensaje.visible = false} class="ml-2">
          <X class="w-4 h-4" />
        </button>
      </div>
    </div>
  {/if}
  
  <!-- Header -->
  <div class="flex justify-between items-center">
    <div>
      <h1 class="text-2xl font-bold text-gray-800">Gestión de Productos</h1>
      <p class="text-gray-600">Administra tu catálogo de productos</p>
    </div>
    {#if !mostrarFormulario}
      <button
        on:click={abrirFormularioCrear}
        class="btn-primary flex items-center gap-2"
      >
        <Plus class="w-5 h-5" />
        Nuevo Producto
      </button>
    {/if}
  </div>
  
  {#if mostrarFormulario}
    <!-- Formulario de producto -->
    <div class="bg-gray-50 rounded-xl p-6 border-2 border-primary-200">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-bold text-gray-800">
          {modoEdicion ? 'Editar' : 'Crear'} Producto
        </h2>
        <button on:click={cerrarFormulario} class="p-2 hover:bg-gray-200 rounded-lg">
          <X class="w-5 h-5" />
        </button>
      </div>
      
      <ProductForm
        producto={productoEditando}
        {categorias}
        {marcas}
        {modoEdicion}
        on:success={handleSuccess}
        on:cancel={cerrarFormulario}
      />
    </div>
  {:else}
    <!-- Lista de productos -->
    <div class="space-y-4">
      <!-- Barra de búsqueda y filtros -->
      <div class="bg-white rounded-xl shadow-sm p-4">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div class="flex-1">
            <div class="relative">
              <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                bind:value={busqueda}
                placeholder="Buscar por nombre o SKU..."
                class="input pl-10"
              />
            </div>
          </div>
          
          <div class="flex gap-2">
            <select bind:value={categoriaFiltro} class="input">
              <option value="">Todas las categorías</option>
              {#each categorias as categoria}
                <option value={categoria.id}>{categoria.nombre}</option>
              {/each}
            </select>
            
            <button on:click={recargarProductos} class="btn-outline">
              Recargar
            </button>
          </div>
        </div>
      </div>
      
      <!-- Estadísticas rápidas -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div class="bg-white rounded-lg shadow-sm p-4">
          <p class="text-sm text-gray-500">Total productos</p>
          <p class="text-2xl font-bold text-gray-800">{productos.length}</p>
        </div>
        <div class="bg-white rounded-lg shadow-sm p-4">
          <p class="text-sm text-gray-500">Activos</p>
          <p class="text-2xl font-bold text-green-600">
            {productos.filter(p => p.activo).length}
          </p>
        </div>
        <div class="bg-white rounded-lg shadow-sm p-4">
          <p class="text-sm text-gray-500">Stock bajo</p>
          <p class="text-2xl font-bold text-amber-600">
            {productos.filter(p => p.stock <= p.stock_minimo && p.stock > 0).length}
          </p>
        </div>
        <div class="bg-white rounded-lg shadow-sm p-4">
          <p class="text-sm text-gray-500">Agotados</p>
          <p class="text-2xl font-bold text-red-600">
            {productos.filter(p => p.stock === 0).length}
          </p>
        </div>
      </div>
      
      <!-- Tabla de productos -->
      <div class="bg-white rounded-xl shadow-sm overflow-hidden">
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Producto
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Categoría
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Precio
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Stock
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Estado
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              {#each productosFiltrados as producto}
                <tr class="hover:bg-gray-50">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-12 w-12">
                        {#if producto.imagen_url}
                          <img 
                            src={producto.imagen_url} 
                            alt={producto.nombre}
                            class="h-12 w-12 rounded-lg object-cover"
                          />
                        {:else}
                          <div class="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center">
                            <Package class="w-6 h-6 text-gray-400" />
                          </div>
                        {/if}
                      </div>
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">{producto.nombre}</div>
                        <div class="text-xs text-gray-500">
                          {#if producto.sku}SKU: {producto.sku}{/if}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    {#if producto.categoria_nombre}
                      <span class="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                        {producto.categoria_nombre}
                      </span>
                    {:else}
                      <span class="text-xs text-gray-400">Sin categoría</span>
                    {/if}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm font-medium text-gray-900">
                      ${producto.precio.toFixed(2)}
                    </div>
                    {#if producto.precio_oferta}
                      <div class="text-xs text-green-600">
                        Oferta: ${producto.precio_oferta.toFixed(2)}
                      </div>
                    {/if}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span class={`text-sm font-medium ${getStockClass(producto)}`}>
                      {producto.stock}
                    </span>
                    {#if producto.stock <= producto.stock_minimo && producto.stock > 0}
                      <div class="text-xs text-amber-600">Stock bajo</div>
                    {:else if producto.stock === 0}
                      <div class="text-xs text-red-600">Agotado</div>
                    {/if}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span class={`px-2 py-1 text-xs rounded-full ${
                      producto.activo 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {producto.activo ? 'Activo' : 'Inactivo'}
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm">
                    <div class="flex space-x-2">
                      <button
                        on:click={() => abrirFormularioEditar(producto)}
                        class="text-blue-600 hover:text-blue-900"
                        title="Editar"
                      >
                        <Edit class="w-5 h-5" />
                      </button>
                      <button
                        on:click={() => eliminarProducto(producto)}
                        class="text-red-600 hover:text-red-900"
                        title="Eliminar"
                      >
                        <Trash2 class="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              {/each}
              
              {#if productosFiltrados.length === 0}
                <tr>
                  <td colspan="6" class="px-6 py-12 text-center">
                    <Package class="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <p class="text-gray-500">No se encontraron productos</p>
                  </td>
                </tr>
              {/if}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  @keyframes slide-in {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  .animate-slide-in {
    animation: slide-in 0.3s ease-out;
  }
</style>