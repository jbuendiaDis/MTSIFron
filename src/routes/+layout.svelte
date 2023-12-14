<script lang="ts">
	import { layout } from "@styles";

	import { Footer, Header } from "@sharing/organisms";
	import { onMount } from 'svelte';

	let currentPath = '';

	onMount(() => {
	// Accede a la ruta actual utilizando $$location
	currentPath = location.pathname;
	console.log(currentPath);
	});
</script>

<Header />

<main class={layout.main}>
	<slot />
</main>
{#if currentPath !== '/login' && currentPath !== '/dashboard'}
<Footer />
{/if}