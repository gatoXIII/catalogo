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
  let shouldRedirect = false;
  
  onMount(() => {
    // Inicializar auth UNA VEZ
    auth.init();
    
    // Pequeño delay para que el store se actualice
    setTimeout(() => {
      loading = false;
      
      // SOLO redirigir si es necesario
      const currentPath = $page.url.pathname;
      const isAuthenticated = $auth.isAuthenticated;
      const isLoginPage = currentPath === '/dashboard/login';
      
      console.log('Layout mounted:', { currentPath, isAuthenticated, isLoginPage });
      
      // Lógica simple de redirección
      if (isAuthenticated && isLoginPage) {
        // Si ya está autenticado y está en login → ir a dashboard
        console.log('Redirigiendo a dashboard desde login');
        goto('/dashboard', { replaceState: true });
      } else if (!isAuthenticated && !isLoginPage) {
        // Si no está autenticado y NO está en login → ir a login
        console.log('Redirigiendo a login desde dashboard');
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
    <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
  </div>
{:else if $page.url.pathname === '/dashboard/login' && !$auth.isAuthenticated}
  <!-- Solo mostrar login si NO está autenticado -->
  <slot />
{:else if !$auth.isAuthenticated}
  <!-- Redirigiendo al login (esto no debería verse mucho tiempo) -->
  <div class="min-h-screen bg-gray-50 flex items-center justify-center">
    <div class="text-center">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
      <p class="mt-4 text-gray-600">Redirigiendo...</p>
    </div>
  </div>
{:else}
  <!-- Dashboard completo (solo si está autenticado) -->
  <div class="min-h-screen bg-gray-50 flex">
    <!-- Sidebar -->
    <DashboardSidebar 
      bind:collapsed={sidebarCollapsed} 
      bind:mobileOpen={mobileMenuOpen}
    />
    
    <!-- Contenido principal -->
    <div class="flex-1 flex flex-col {sidebarCollapsed && !mobileMenuOpen ? 'md:ml-20' : 'md:ml-64'} transition-all duration-300">
      <!-- Header -->
      <DashboardHeader 
        bind:sidebarCollapsed 
        bind:mobileOpen={mobileMenuOpen}
      />
      
      <!-- Contenido de la página -->
      <main class="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
        <div class="max-w-7xl mx-auto">
          <slot />
        </div>
      </main>
      
      <!-- Footer del dashboard -->
      <footer class="bg-white border-t border-gray-200 px-6 py-4">
        <div class="flex justify-between items-center text-sm text-gray-600">
          <span>{$auth.user?.name || 'Administrador'} • {$auth.user?.role || 'Admin'}</span>
          <span>© {new Date().getFullYear()} CatálogoExpress • Panel de Control</span>
        </div>
      </footer>
    </div>
  </div>
{/if}