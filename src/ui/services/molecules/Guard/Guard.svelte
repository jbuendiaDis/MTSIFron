<script lang="ts">
  import type { Props } from "./Guard.proptypes";

  import * as styles from "./Guard.styles";

  
  export let title: Props["title"];
  export let subtitle: Props["subtitle"];
  export let cover: Props["cover"];
  export let number: Props["number"];
  
</script>

  <div class={styles.containerStyles}>
    <div class={styles.imageStyles(cover)}/>
    <div class={styles.imageStyles2(number)}/>
    <div class={styles.overlay}/>
    <div class={styles.leftContainerStyles}>
      <h1 class={styles.title}>
      {title}      
      </h1>
      {#if subtitle}
      <h1 class={styles.title}>
        {subtitle}      
      </h1>
      {/if}
      <div class={styles.dividerStyles}></div>
          <slot/>
      </div>
  </div>