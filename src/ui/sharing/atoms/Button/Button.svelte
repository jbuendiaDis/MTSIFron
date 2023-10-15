<script lang="ts">
  import { cx } from "@emotion/css";

  import type { Props } from "./Button.proptypes";

  import * as styles from "./Button.styles";

  export let type: Props["type"] = "button";
  export let text: Props["text"];
  export let config: Props["config"] = {
    style: "normal",
    size: "normal",
    text: "normal",
  };
  export let datas: Props["datas"] = {};

  $: datasets = Object.keys(datas).reduce(
    (acc, key) => ({
      ...acc,
      [`data-${key}`]: datas[key],
    }),
    {}
  );

  $: stylesOptions = {
    normal: styles.button,
    gradient: styles.button_gradient,
    outline: styles.button_outline,
  };

  $: sizesOptions = {
    normal: "",
    big: styles.big,
  };

  $: stylesToApply = cx(
    stylesOptions[config.style],
    sizesOptions[config.size],
    config.text === "normal" ? "" : styles.text_transform(config.text)
  );
</script>

{#if type === "label"}
  <p class={stylesToApply} {...datasets}>
    <span>
      {text}
    </span>
  </p>
{:else if type === "link"}
  <a
    href={`${datas.link}`}
    class={stylesToApply}
    download={`${datas.download}`}
    target="_blank"
    rel="noopener noreferrer"
    {...datasets}
    {...$$restProps}
  >
    <span>
      {text}
    </span>
  </a>
{:else}
  <button {type} on:click class={stylesToApply} {...datasets} {...$$restProps}>
    <span>
      {text}
    </span>
  </button>
{/if}
