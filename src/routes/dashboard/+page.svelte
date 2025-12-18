<!-- src/routes/dashboard/+page.svelte -->
<script>
  import { 
    TrendingUp, 
    Package, 
    ShoppingBag, 
    Users, 
    DollarSign, 
    Clock, 
    AlertCircle,
    MessageCircle,
    Settings,
    Store   
  } from 'lucide-svelte';
  import { goto } from '$app/navigation';
  
  // Recibir data del +page.server.js
  export let data;
  
  // Extraer estadísticas
  $: estadisticas = data.estadisticas || {
    productosTotal: 0,
    pedidosHoy: 0,
    pedidosPendientes: 0,
    ingresosMes: 0,
    productosBajoStock: 0,
    crecimientoVentas: 0
  };
  
  $: pedidosRecientes = data.pedidosRecientes || [];
  $: productosPopulares = data.productosPopulares || [];
  
  function getEstadoColor(estado) {
    switch(estado) {
      case 'entregado': return 'bg-green-100 text-green-800';
      case 'pendiente': return 'bg-yellow-100 text-yellow-800';
      case 'confirmado': return 'bg-blue-100 text-blue-800';
      case 'preparando': return 'bg-purple-100 text-purple-800';
      case 'enviado': return 'bg-indigo-100 text-indigo-800';
      case 'cancelado': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }
  
  function formatearFecha(fecha) {
    return new Date(fecha).toLocaleString('es-MX', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
</script>

<div class="space-y-6">
  <!-- Encabezado -->
  <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
    <div>
      <h1 class="text-2xl md:text-3xl font-bold text-gray-800">Bienvenido al Panel de Control</h1>
      <p class="text-gray-600 mt-2">Resumen general de tu tienda y actividades recientes</p>
    </div>
    <div class="flex items-center space-x-3">
      <span class="text-sm text-gray-500">
        Última actualización: {new Date().toLocaleTimeString('es-MX', {hour: '2-digit', minute:'2-digit'})}
      </span>
    </div>
  </div>

  <!-- Grid de estadísticas -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    <!-- Productos -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm text-gray-500 font-medium">Productos Totales</p>
          <p class="text-3xl font-bold text-gray-800 mt-2">{estadisticas.productosTotal}</p>
        </div>
        <div class="p-3 bg-blue-50 rounded-xl">
          <Package class="w-7 h-7 text-blue-600" />
        </div>
      </div>
      <div class="mt-4 pt-4 border-t border-gray-100">
        <a href="/dashboard/productos" class="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
          Gestionar productos
          <TrendingUp class="w-4 h-4 ml-2" />
        </a>
      </div>
    </div>
    
    <!-- Pedidos Hoy -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm text-gray-500 font-medium">Pedidos Hoy</p>
          <p class="text-3xl font-bold text-gray-800 mt-2">{estadisticas.pedidosHoy}</p>
        </div>
        <div class="p-3 bg-green-50 rounded-xl">
          <ShoppingBag class="w-7 h-7 text-green-600" />
        </div>
      </div>
      <div class="mt-4 pt-4 border-t border-gray-100">
        <div class="flex items-center text-sm text-gray-600">
          <Clock class="w-4 h-4 mr-2" />
          <span>{estadisticas.pedidosPendientes} pendientes</span>
        </div>
      </div>
    </div>
    
    <!-- Ingresos Mensuales -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm text-gray-500 font-medium">Ingresos del Mes</p>
          <p class="text-3xl font-bold text-gray-800 mt-2">
            ${estadisticas.ingresosMes.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
          {#if estadisticas.crecimientoVentas > 0}
            <p class="text-sm text-green-600 mt-1 flex items-center">
              <TrendingUp class="w-4 h-4 mr-1" />
              +{estadisticas.crecimientoVentas}% vs mes anterior
            </p>
          {/if}
        </div>
        <div class="p-3 bg-purple-50 rounded-xl">
          <DollarSign class="w-7 h-7 text-purple-600" />
        </div>
      </div>
    </div>
    
    <!-- Alertas -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm text-gray-500 font-medium">Alertas</p>
          <p class="text-3xl font-bold text-amber-600 mt-2">{estadisticas.productosBajoStock}</p>
        </div>
        <div class="p-3 bg-amber-50 rounded-xl">
          <AlertCircle class="w-7 h-7 text-amber-600" />
        </div>
      </div>
      <div class="mt-4 pt-4 border-t border-gray-100">
        <p class="text-sm text-gray-600">Productos con bajo stock</p>
      </div>
    </div>
  </div>

  <!-- Contenido en 2 columnas -->
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <!-- Pedidos Recientes -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div class="flex justify-between items-center mb-6">
        <div>
          <h3 class="text-lg font-semibold text-gray-800">Pedidos Recientes</h3>
          <p class="text-sm text-gray-500">Últimos pedidos recibidos</p>
        </div>
        <a href="/dashboard/pedidos" class="text-primary-600 hover:text-primary-800 text-sm font-medium">
          Ver todos →
        </a>
      </div>
      
      <div class="space-y-4">
        {#if pedidosRecientes.length === 0}
          <div class="text-center py-8">
            <ShoppingBag class="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p class="text-gray-500 text-sm">No hay pedidos recientes</p>
          </div>
        {:else}
          {#each pedidosRecientes as pedido}
            <div class="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div>
                <div class="flex items-center space-x-3">
                  <div class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <ShoppingBag class="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <p class="font-medium text-gray-800">{pedido.numero_pedido}</p>
                    <p class="text-sm text-gray-600">{pedido.cliente_nombre}</p>
                  </div>
                </div>
              </div>
              <div class="text-right">
                <p class="font-bold text-gray-800">${pedido.total.toFixed(2)}</p>
                <span class={`inline-block px-2 py-1 text-xs rounded-full font-medium ${getEstadoColor(pedido.estado)}`}>
                  {pedido.estado}
                </span>
                <p class="text-xs text-gray-500 mt-1">{formatearFecha(pedido.created_at)}</p>
              </div>
            </div>
          {/each}
        {/if}
      </div>
    </div>
    
    <!-- Productos Destacados -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div class="flex justify-between items-center mb-6">
        <div>
          <h3 class="text-lg font-semibold text-gray-800">Productos Destacados</h3>
          <p class="text-sm text-gray-500">Productos marcados como destacados</p>
        </div>
        <a href="/dashboard/productos" class="text-primary-600 hover:text-primary-800 text-sm font-medium">
          Gestionar →
        </a>
      </div>
      
      <div class="space-y-4">
        {#if productosPopulares.length === 0}
          <div class="text-center py-8">
            <Package class="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p class="text-gray-500 text-sm">No hay productos destacados</p>
            <button on:click={() => goto('/dashboard/productos')} class="mt-3 btn-primary text-sm">
              Agregar productos
            </button>
          </div>
        {:else}
          {#each productosPopulares as producto}
            <div class="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div class="flex items-center space-x-3">
                <div class="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                  {#if producto.imagen_url}
                    <img 
                      src={producto.imagen_url} 
                      alt={producto.nombre}
                      class="w-full h-full object-cover"
                    />
                  {:else}
                    <div class="w-full h-full flex items-center justify-center">
                      <Package class="w-6 h-6 text-gray-400" />
                    </div>
                  {/if}
                </div>
                <div>
                  <p class="font-medium text-gray-800">{producto.nombre}</p>
                  <p class="text-sm text-gray-600">${producto.precio.toFixed(2)}</p>
                </div>
              </div>
              <div class="text-right">
                <span class={`text-sm font-medium ${
                  producto.stock === 0 ? 'text-red-600' :
                  producto.stock < 10 ? 'text-amber-600' : 'text-green-600'
                }`}>
                  Stock: {producto.stock}
                </span>
              </div>
            </div>
          {/each}
        {/if}
      </div>
    </div>
  </div>

  <!-- Acciones Rápidas -->
  <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
    <h3 class="text-lg font-semibold text-gray-800 mb-4">Acciones Rápidas</h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <a href="/dashboard/productos" class="group p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-all duration-200">
        <div class="flex items-center space-x-3">
          <div class="p-2 bg-primary-100 rounded-lg group-hover:bg-primary-200 transition-colors">
            <Package class="w-5 h-5 text-primary-600" />
          </div>
          <div>
            <p class="font-medium text-gray-800">Nuevo Producto</p>
            <p class="text-sm text-gray-600">Agregar al catálogo</p>
          </div>
        </div>
      </a>
      
      <a href="/dashboard/pedidos" class="group p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-all duration-200">
        <div class="flex items-center space-x-3">
          <div class="p-2 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
            <ShoppingBag class="w-5 h-5 text-green-600" />
          </div>
          <div>
            <p class="font-medium text-gray-800">Ver Pedidos</p>
            <p class="text-sm text-gray-600">Gestionar pedidos</p>
          </div>
        </div>
      </a>
      
      <a href="/dashboard/configuracion" class="group p-4 border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-all duration-200">
        <div class="flex items-center space-x-3">
          <div class="p-2 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
            <Settings class="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <p class="font-medium text-gray-800">Configuración</p>
            <p class="text-sm text-gray-600">Ajustes de tienda</p>
          </div>
        </div>
      </a>
      
      <a href="/" target="_blank" class="group p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all duration-200">
        <div class="flex items-center space-x-3">
          <div class="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
            <Store class="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <p class="font-medium text-gray-800">Ver Tienda</p>
            <p class="text-sm text-gray-600">Catálogo público</p>
          </div>
        </div>
      </a>
    </div>
  </div>
</div>