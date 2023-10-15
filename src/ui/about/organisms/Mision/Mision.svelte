<script lang="ts">
  import { i18n } from "@stores";

  import * as styles from "./Mision.styles";

  import cover from "@images/cover-mision-about.png";
</script>

<div class={styles.operators}>
  <div class={styles.imageStyles(cover)}/>
  <div class={styles.overlay} />
  <div class={styles.containerLeft}>
    <h1 class={styles.title}>{$i18n.t("about:vision")}</h1>
    <div class={styles.dividerStyles} />
    <h1 class={styles.description}>{$i18n.t("about:detail-vision")}</h1>
  </div>
  <div class={styles.containerRight}>
    <h1 class={styles.title}>{$i18n.t("about:mision")}</h1>
    <div class={styles.divider} />
    <h1 class={styles.descriptioTwo}>{$i18n.t("about:detail-mision")}</h1>
  </div>
  <div class={styles.containerLeft}>
    <h1 class={styles.title}>{$i18n.t("about:valores")}</h1>
    <div class={styles.dividerStyles} />
    <h1 class={styles.description}>{$i18n.t("about:detail-valores")}</h1>
  </div>
</div>

