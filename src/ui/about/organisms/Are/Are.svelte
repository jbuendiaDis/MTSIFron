<script lang="ts">
    import { i18n } from "@stores";
  import Guard from "../../../services/molecules/Guard/Guard.svelte";
import * as styles from "./Are.styles";
import cover from "@images/cover-are-about.png";
</script>

<Guard cover={cover} title={$i18n.t("about:are")} subtitle={null} number="" >
  <h1 class={styles.are} >
    {@html $i18n.t("about:are-text")}
  </h1>
</Guard>