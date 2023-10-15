<script lang="ts">
    import { i18n } from "@stores";
  import type { Props } from "./About.proptypes";
  import cover from "@images/cover-about-home.svg";
  import * as styles from "./About.styles";

</script>

<div class={styles.about}>
  <div class={styles.aboutCover(cover)} />
  <div class={styles.container}>
    <h1 class={styles.subtitle}>{$i18n.t("about:subtitle")}</h1>
    <section class={styles.box}>
      <h1 class={styles.description}>{@html $i18n.t("about:description")}</h1>
      <h1 class={styles.description}>{@html $i18n.t("about:descriptionTwo")}</h1>
    </section>
  </div>
</div>
