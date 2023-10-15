<script lang="ts">
  import { i18n } from "@stores";
  import cover from "@images/cover-clients.png";
  import * as styles from "./Clients.styles";
  import mercedes from '@icons/icons_mercedes.svg';
</script>

<div class={styles.clients}>
  <div class={styles.container}>
    <div class={styles.containerLeft}>
      <div class={styles.box}>
      <img src={mercedes} alt="icon-mercedes" class={styles.image}>
      <h1 class={styles.title}>Mercedes Benz - Daimler</h1>
    </div>
      <a  href="https://mtsi.com.mx/mtsdaimlerex/" class={styles.link}>Accesar</a>
    <div class={styles.dividerStyles}/>
    </div>
    <div class={styles.containerRight}>
    <div class={styles.box}>
      <img src={mercedes} alt="icon-mercedes" class={styles.image}>
      <h1 class={styles.title}>Mercedes Benz - Sprinter</h1>
    </div>
      <a href="https://mtsi.com.mx/mtsdaimler/" class={styles.link}>Accesar</a>
      <div class={styles.divider}/>
    </div>
    <div class={styles.containerLeft}>
    <div class={styles.box}>
      <img src={mercedes} alt="icon-mercedes" class={styles.image}>
      <h1 class={styles.title}>Mercedes Benz - Exportación</h1>
    </div>
    <a href="https://mtsi.com.mx/mts/Cliente.php" class={styles.link}>Accesar</a>
    <div class={styles.dividerStyles}/>
    </div>
  </div>
  <div class={styles.imageStyles(cover)}/>
  <div class={styles.overlay} />
</div>

