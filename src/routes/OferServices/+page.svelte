<script lang="ts">
  import { i18n } from "@stores";

  import { page } from "@oferservices/styles";

	import { SEO } from "@sharing/atoms";
    import { ListServices } from "@oferservices/organisms";
</script>

<SEO title={$i18n.t("oferservices:seo-title")} />

<ListServices />