<script lang="ts">
  import { i18n } from "@stores";

  import { page } from "@clients/styles";

	import { SEO } from "@sharing/atoms";
  import { Clients } from "@clients/organisms";

</script>

<SEO title={$i18n.t("clients:seo-title")} />

<Clients />