<script lang="ts">
  import {i18n} from '@stores';
  import * as styles from "./Hero.styles";
  import coverage from "@images/coverage.mp4";
  import rec1 from "@icons/Rectangle1.svg";
  import rec2 from "@icons/Rectangle2.svg";
</script>

<div class={styles.hero}>
  <video autoplay loop muted class={styles.video} playsinline>
    <source src={coverage} type="video/mp4" />
  </video>
  <div class={styles.heroContent}>
    <h1 class={styles.leftTextStyles}>{$i18n.t("home:title")}</h1>
    <h1 class={styles.rightTextStyles}>{$i18n.t("home:title2")}</h1>
    <section class={styles.box}>
      <h1 class={styles.description}>
        {$i18n.t("home:description")}
      </h1>
    </section>
  </div>
  <div class={styles.overlayone(rec1)} />
  <div class={styles.overlaytwo(rec2)} />
  <div class={styles.overlay} />
</div>
