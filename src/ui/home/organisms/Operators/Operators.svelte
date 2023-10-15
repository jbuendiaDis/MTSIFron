<script lang="ts">
  import { i18n } from "@stores";

  import * as styles from "./Operators.styles";

  import cover from "@images/cover-operators.webp";
  import number3 from "@images/03.png";
</script>

<div class={styles.operators}>
  <div class={styles.imageStyles(cover)}/>
  <div class={styles.imageStyles2(number3)}/>
  <div class={styles.overlay} />
  <div class={styles.containerLeft}>
    <h1 class={styles.title}>
      {$i18n.t("home:operators.title")}      
    </h1>
    <div class={styles.dividerStyles} />
    <section>
      <h1 class={styles.description}>
        {$i18n.t("home:operators.description")}
      </h1>
    </section>
  </div>
  <div class={styles.containerRight}>
      <h1 class={styles.title}>
        {$i18n.t("home:operators.title")}      
      </h1>
      <div class={styles.divider} />
      <h1 class={styles.description}>
        {$i18n.t("home:operators.description")}
      </h1>
    </div>
</div>