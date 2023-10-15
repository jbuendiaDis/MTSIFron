<script lang="ts">
	import { layout } from "@styles";

	import { Footer, Header } from "@sharing/organisms";

</script>

<Header />

<main class={layout.main}>
	<slot />
</main>

<Footer />