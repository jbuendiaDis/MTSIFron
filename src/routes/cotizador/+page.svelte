<script>
// @ts-nocheck

    import { onMount } from 'svelte';
    import { goto } from "$app/navigation";
    import { Cotizacion, HistorialCotizaciones } from "@sharing/organisms"
</script>

  
<style>
  .content {
    display: grid;
    background: linear-gradient(148deg, rgba(0,25,130,0.7371323529411764) 100%, rgba(255, 255, 255, 0.521) 100%);
    height: 20%;
    width: 100%;
    margin-top: -10em;
    z-index: -5;
    border-bottom: 1px solid white;
    min-height: 15vh;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    min-height: 60vh;
  }
</style>

<div class="content" />
<div class="container">
    <Cotizacion />
</div>