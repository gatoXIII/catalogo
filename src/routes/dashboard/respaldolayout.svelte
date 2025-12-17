<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import { auth } from '$lib/stores/authStore';
  
  import DashboardSidebar from '$lib/components/dashboard/DashboardSidebar.svelte';
  import DashboardHeader from '$lib/components/dashboard/DashboardHeader.svelte';
  export let data; // la función load del layout está pasando data
  //export let params = {}; // Declarar params para evitar la advertencia
  let loading = true;
  let sidebarCollapsed = false;
  let mobileMenuOpen = false;
  let redirecting = false;
  
  onMount(() => {
    // Pequeño delay para inicialización
    setTimeout(() => {
      loading = false;
    }, 100);

    
    // Cerrar menú móvil al redimensionar ventana
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        mobileMenuOpen = false;
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });
  // Redirigir si ya está autenticado (aunque esté en la URL /dashboard/login)
    $: if (!$auth.isAuthenticated && !loading && $page.url.pathname !== '/dashboard/login' && !redirecting) {
        console.log('Redirigiendo a Login...');
        redirecting = true; // 🔑 EVITA EJECUCIONES REPETIDAS
        goto('/dashboard/login');
    }
  
  // Redirigir si no está autenticado (excepto login)
  $: if (!$auth.isAuthenticated && !loading && $page.url.pathname !== '/dashboard/login' && !redirecting) {
    redirecting = true; // ⬅️ Establecer a true
    goto('/dashboard/login');
  }
  //Lógica de Login Exitoso (Evitar ver la pantalla de Login si ya está dentro)
   // $: if ($auth.isAuthenticated && $page.url.pathname === '/dashboard/login' && !redirecting) {
   //     console.log('Usuario ya autenticado, redirigiendo a Dashboard...');
   //     redirecting = true; // 🔑 EVITA EJECUCIONES REPETIDAS
   //     goto('/dashboard');
   // }
   $: if ($auth.isAuthenticated && $page.url.pathname === '/dashboard/login' && !redirecting) {
        console.log('Usuario ya autenticado, redirigiendo a Dashboard...');
        redirecting = true; // 🔑 EVITA EJECUCIONES REPETIDAS
        goto('/dashboard');
    }
</script>

{#if loading}
  <!-- Pantalla de carga simple -->
  <div class="min-h-screen bg-gray-50 flex items-center justify-center">
    <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
  </div>
{:else if $page.url.pathname === '/dashboard/login'}
  <!-- Para la página de login, mostrar solo el contenido -->
  <slot />
{:else if !$auth.isAuthenticated}
  <!-- Redirigiendo al login -->
  <div class="min-h-screen bg-gray-50 flex items-center justify-center">
    <div class="text-center">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
      <p class="mt-4 text-gray-600">Redirigiendo al login...</p>
    </div>
  </div>
{:else}
  <!-- Dashboard completo -->
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