<!-- src/routes/dashboard/pedidos/+page.svelte -->
<script>
  import { onMount } from 'svelte';
  import { ShoppingBag, Filter, Eye, CheckCircle, X, Clock, Truck, Package } from 'lucide-svelte';
  
  let pedidos = [];
  let loading = true;
  let estadoFiltro = '';
  let pedidoSeleccionado = null;
  let mostrarDetalle = false;
  
  const estados = [
    { valor: 'pendiente', label: 'Pendiente', color: 'bg-yellow-100 text-yellow-800', icon: Clock },
    { valor: 'confirmado', label: 'Confirmado', color: 'bg-blue-100 text-blue-800', icon: CheckCircle },
    { valor: 'preparando', label: 'Preparando', color: 'bg-purple-100 text-purple-800', icon: Package },
    { valor: 'enviado', label: 'Enviado', color: 'bg-indigo-100 text-indigo-800', icon: Truck },
    { valor: 'entregado', label: 'Entregado', color: 'bg-green-100 text-green-800', icon: CheckCircle },
    { valor: 'cancelado', label: 'Cancelado', color: 'bg-red-100 text-red-800', icon: X }
  ];
  
  onMount(async () => {
    await cargarPedidos();
  });
  
  async function cargarPedidos() {
    loading = true;
    try {
      const url = estadoFiltro 
        ? `/api/pedidos?estado=${estadoFiltro}&limit=50`
        : '/api/pedidos?limit=50';
      
      const response = await fetch(url);
      const result = await response.json();
      
      if (result.success) {
        pedidos = result.data;
      }
    } catch (error) {
      console.error('Error cargando pedidos:', error);
    } finally {
      loading = false;
    }
  }
  
  async function verDetalle(pedido) {
    try {
      // Cargar detalle completo del pedido con items
      const response = await fetch(`/api/pedidos/${pedido.id}`);
      const result = await response.json();
      
      if (result.success) {
        pedidoSeleccionado = result.data;
        mostrarDetalle = true;
      }
    } catch (error) {
      console.error('Error cargando detalle:', error);
      // Por ahora mostrar con los datos disponibles
      pedidoSeleccionado = pedido;
      mostrarDetalle = true;
    }
  }
  
  function cerrarDetalle() {
    mostrarDetalle = false;
    pedidoSeleccionado = null;
  }
  
  async function cambiarEstado(pedido, nuevoEstado) {
    try {
      const response = await fetch('/api/pedidos', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: pedido.id,
          estado: nuevoEstado
        })
      });
      
      const result = await response.json();
      
      if (result.success) {
        await cargarPedidos();
        if (pedidoSeleccionado?.id === pedido.id) {
          pedidoSeleccionado = { ...pedidoSeleccionado, estado: nuevoEstado };
        }
      }
    } catch (error) {
      console.error('Error actualizando estado:', error);
      alert('Error al actualizar el estado');
    }
  }
  
  function getEstadoInfo(estado) {
    return estados.find(e => e.valor === estado) || estados[0];
  }
  
  function formatearFecha(fecha) {
    return new Date(fecha).toLocaleString('es-MX', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
  
  $: pedidosFiltrados = estadoFiltro 
    ? pedidos.filter(p => p.estado === estadoFiltro)
    : pedidos;
</script>

<div class="space-y-6">
  <!-- Header -->
  <div class="flex justify-between items-center">
    <div>
      <h1 class="text-2xl font-bold text-gray-800">Gestión de Pedidos</h1>
      <p class="text-gray-600">Revisa y gestiona los pedidos recibidos</p>
    </div>
    <button on:click={cargarPedidos} class="btn-outline">
      Actualizar
    </button>
  </div>
  
  <!-- Estadísticas rápidas -->
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
    {#each estados as estado}
      {@const count = pedidos.filter(p => p.estado === estado.valor).length}
      <div class="bg-white rounded-lg shadow-sm p-4">
        <div class="flex items-center justify-between mb-2">
          <svelte:component this={estado.icon} class="w-5 h-5 text-gray-400" />
          <span class="text-2xl font-bold text-gray-800">{count}</span>
        </div>
        <p class="text-sm text-gray-600">{estado.label}</p>
      </div>
    {/each}
  </div>
  
  <!-- Filtros -->
  <div class="bg-white rounded-xl shadow-sm p-4">
    <div class="flex items-center gap-3">
      <Filter class="w-5 h-5 text-gray-400" />
      <select 
        bind:value={estadoFiltro} 
        on:change={cargarPedidos}
        class="input flex-1"
      >
        <option value="">Todos los estados</option>
        {#each estados as estado}
          <option value={estado.valor}>{estado.label}</option>
        {/each}
      </select>
    </div>
  </div>
  
  <!-- Lista de pedidos -->
  <div class="bg-white rounded-xl shadow-sm overflow-hidden">
    {#if loading}
      <div class="text-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
        <p class="mt-4 text-gray-600">Cargando pedidos...</p>
      </div>
    {:else if pedidosFiltrados.length === 0}
      <div class="text-center py-12">
        <ShoppingBag class="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 class="text-lg font-semibold text-gray-700 mb-2">No hay pedidos</h3>
        <p class="text-gray-500">
          {estadoFiltro ? `No hay pedidos con estado "${getEstadoInfo(estadoFiltro).label}"` : 'Aún no se han recibido pedidos'}
        </p>
      </div>
    {:else}
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Pedido</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cliente</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Fecha</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Items</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Estado</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Acciones</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            {#each pedidosFiltrados as pedido}
              {@const estadoInfo = getEstadoInfo(pedido.estado)}
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="font-medium text-gray-900">{pedido.numero_pedido}</div>
                </td>
                <td class="px-6 py-4">
                  <div class="text-sm font-medium text-gray-900">{pedido.cliente_nombre}</div>
                  <div class="text-xs text-gray-500">{pedido.cliente_whatsapp}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {formatearFecha(pedido.created_at)}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-bold text-gray-900">${pedido.total.toFixed(2)}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {pedido.cantidad_items || 0} items
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class={`px-2 py-1 text-xs rounded-full ${estadoInfo.color}`}>
                    {estadoInfo.label}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm">
                  <button
                    on:click={() => verDetalle(pedido)}
                    class="text-blue-600 hover:text-blue-900 flex items-center gap-1"
                  >
                    <Eye class="w-4 h-4" />
                    Ver
                  </button>
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    {/if}
  </div>
</div>

<!-- Modal de detalle -->
{#if mostrarDetalle && pedidoSeleccionado}
  <div class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
    <div class="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
      <!-- Header -->
      <div class="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
        <div>
          <h2 class="text-2xl font-bold text-gray-800">Pedido {pedidoSeleccionado.numero_pedido}</h2>
          <p class="text-sm text-gray-500">{formatearFecha(pedidoSeleccionado.created_at)}</p>
        </div>
        <button on:click={cerrarDetalle} class="p-2 hover:bg-gray-100 rounded-lg">
          <X class="w-6 h-6" />
        </button>
      </div>
      
      <!-- Contenido -->
      <div class="p-6 space-y-6">
        <!-- Cliente -->
        <div>
          <h3 class="font-semibold text-gray-800 mb-3">Información del Cliente</h3>
          <div class="bg-gray-50 rounded-lg p-4 space-y-2">
            <p><span class="font-medium">Nombre:</span> {pedidoSeleccionado.cliente_nombre}</p>
            <p><span class="font-medium">WhatsApp:</span> {pedidoSeleccionado.cliente_whatsapp}</p>
            {#if pedidoSeleccionado.cliente_email}
              <p><span class="font-medium">Email:</span> {pedidoSeleccionado.cliente_email}</p>
            {/if}
            {#if pedidoSeleccionado.cliente_direccion}
              <p><span class="font-medium">Dirección:</span> {pedidoSeleccionado.cliente_direccion}</p>
            {/if}
          </div>
        </div>
        
        <!-- Estado -->
        <div>
          <h3 class="font-semibold text-gray-800 mb-3">Estado del Pedido</h3>
          <div class="flex flex-wrap gap-2">
            {#each estados as estado}
              <button
                on:click={() => cambiarEstado(pedidoSeleccionado, estado.valor)}
                class={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pedidoSeleccionado.estado === estado.valor
                    ? estado.color
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {estado.label}
              </button>
            {/each}
          </div>
        </div>
        
        <!-- Totales -->
        <div>
          <h3 class="font-semibold text-gray-800 mb-3">Resumen del Pedido</h3>
          <div class="bg-gray-50 rounded-lg p-4 space-y-2">
            <div class="flex justify-between">
              <span>Subtotal:</span>
              <span class="font-medium">${pedidoSeleccionado.subtotal?.toFixed(2) || '0.00'}</span>
            </div>
            <div class="flex justify-between">
              <span>Impuestos:</span>
              <span class="font-medium">${pedidoSeleccionado.impuesto?.toFixed(2) || '0.00'}</span>
            </div>
            <div class="flex justify-between text-lg font-bold border-t border-gray-200 pt-2">
              <span>Total:</span>
              <span class="text-primary-700">${pedidoSeleccionado.total.toFixed(2)}</span>
            </div>
          </div>
        </div>
        
        {#if pedidoSeleccionado.notas}
          <div>
            <h3 class="font-semibold text-gray-800 mb-3">Notas</h3>
            <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p class="text-sm text-gray-700">{pedidoSeleccionado.notas}</p>
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>
{/if}