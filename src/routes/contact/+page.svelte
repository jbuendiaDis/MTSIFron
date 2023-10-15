<script lang="ts">
  import { i18n } from "@stores";

  import { page } from "@contact/styles";

	import { SEO } from "@sharing/atoms";
    import { Maps } from "@contact/organisms";
</script>

<SEO title={$i18n.t("contact:seo-title")} />

<Maps />
