<!-- src/routes/dashboard/+layout.svelte -->
<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import { auth } from '$lib/stores/authStore';
  
  import DashboardSidebar from '$lib/components/dashboard/DashboardSidebar.svelte';
  import DashboardHeader from '$lib/components/dashboard/DashboardHeader.svelte';
  
  export let data;
  let loading = true;
  let sidebarCollapsed = false;
  let mobileMenuOpen = false;
  
  onMount(() => {
    // Inicializar auth UNA VEZ
    auth.init();
    
    // Pequeño delay para que el store se actualice
    setTimeout(() => {
      loading = false;
      
      const currentPath = $page.url.pathname;
      const isAuthenticated = $auth.isAuthenticated;
      const isLoginPage = currentPath === '/dashboard/login';
      
      // Lógica simple de redirección
      if (isAuthenticated && isLoginPage) {
        goto('/dashboard', { replaceState: true });
      } else if (!isAuthenticated && !isLoginPage) {
        goto('/dashboard/login', { replaceState: true });
      }
    }, 50);
    
    // Cerrar menú móvil al redimensionar
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        mobileMenuOpen = false;
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });
</script>

{#if loading}
  <!-- Pantalla de carga simple -->
  <div class="min-h-screen bg-gray-50 flex items-center justify-center">
    <div class="flex flex-col items-center gap-4">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      <p class="text-gray-600 text-sm">Cargando panel de administración...</p>
    </div>
  </div>
{:else if $page.url.pathname === '/dashboard/login' && !$auth.isAuthenticated}
  <!-- Solo mostrar login si NO está autenticado -->
  <slot />
{:else if !$auth.isAuthenticated}
  <!-- Redirigiendo al login -->
  <div class="min-h-screen bg-gray-50 flex items-center justify-center">
    <div class="text-center">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
      <p class="mt-4 text-gray-600">Verificando acceso...</p>
    </div>
  </div>
{:else}
  <!-- Dashboard completo (solo si está autenticado) -->
  <div class="min-h-screen bg-gray-50 flex overflow-hidden">
    <!-- Sidebar - Posición fija -->
    <DashboardSidebar 
      bind:collapsed={sidebarCollapsed} 
      bind:mobileOpen={mobileMenuOpen}
    />
    
    <!-- Contenido principal - Con margen izquierdo según estado del sidebar -->
    <div class="flex-1 flex flex-col transition-all duration-300 ease-in-out {sidebarCollapsed ? 'md:ml-20' : 'md:ml-64'}">
      <!-- Header - Sticky -->
      <DashboardHeader 
        bind:sidebarCollapsed 
        bind:mobileOpen={mobileMenuOpen}
      />
      
      <!-- Contenido de la página - Reducido padding para aprovechar espacio -->
      <main class="flex-1 overflow-y-auto bg-gray-50">
        <div class="max-w-full mx-auto p-4 md:p-6">
          <slot />
        </div>
      </main>
      
      <!-- Footer del dashboard -->
      <footer class="bg-white border-t border-gray-200 px-4 md:px-6 py-3">
        <div class="flex flex-col md:flex-row justify-between items-center gap-2 text-xs md:text-sm text-gray-600">
          <span class="font-medium">{$auth.user?.name || 'Administrador'}</span>
          <span class="text-gray-500">© {new Date().getFullYear()} CatálogoExpress</span>
        </div>
      </footer>
    </div>
  </div>
{/if}

<style>
  /* Asegurar que no haya scroll horizontal */
  :global(body) {
    overflow-x: hidden;
  }
  
  /* Optimización de transiciones */
  .transition-all {
    transition-property: margin, width, transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
</style>