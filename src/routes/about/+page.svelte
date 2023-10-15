<script lang="ts">
  import { i18n } from "@stores";

	import { SEO } from "@sharing/atoms";
  import { About, Are, Mision } from "@about/organisms";

</script>

<SEO title={$i18n.t("about:seo-title")} />

<About />
<Are />
<Mision />