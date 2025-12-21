<!-- src/routes/+layout.svelte -->
 <!--revisar -->
<script>
  import '../app.css';
  import Header from '$lib/components/ui/Header.svelte';
  import Footer from '$lib/components/ui/Footer.svelte';
  import { page } from '$app/stores';
  
  // Recibir solo data del layout.server.js
  export let data;
  //export let params = {};
  $: configuracion = data?.configuracion;
  
  $: isDashboard = $page.url.pathname.startsWith('/dashboard');
  console.log(data.configuracion);
</script> 

{#if isDashboard}
  <!-- Para rutas del dashboard, usar su propio layout -->
  <slot />
{:else}
  <!-- Para rutas públicas (catálogo, carrito, página principal) -->
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <Header {configuracion} />
    
    <main class="flex-grow container mx-auto px-4 py-8">
      <slot />
    </main>
    
    <Footer {configuracion} />
  </div>
{/if}