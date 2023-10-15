<script lang="ts">
  import { i18n } from "@stores";
  import * as styles from "./ListServices.styles";
  import number1 from '@images/01.svg';
  import number2 from '@images/02.svg';
  import number3 from '@images/03.svg';
  import number4 from '@images/04.svg';
  import number5 from '@images/05.svg';
  import number6 from '@images/06.svg';
  import number7 from '@images/07.svg';
  import number8 from '@images/08.svg';
  import cover from '@images/cover-services.png';

$: listServices = [
    { 
      title: $i18n.t("oferservices:subtitle1"), 
      description: $i18n.t(""), 
      image: number1
    },
    { 
      title: $i18n.t("oferservices:subtitle2"), 
      description: $i18n.t(""), 
      image: number2
    },
    { 
      title: $i18n.t("oferservices:subtitle3"), 
      description: $i18n.t(""), 
      image: number3
    },
    { 
      title: $i18n.t("oferservices:subtitle4"), 
      description: $i18n.t(""), 
      image: number4
    },
    { 
      title: $i18n.t("oferservices:subtitle5"), 
      description: $i18n.t(""), 
      image: number5
    },
    { 
      title: $i18n.t("oferservices:subtitle6"), 
      description: $i18n.t(""), 
      image: number6
    },
    { 
      title: $i18n.t("oferservices:subtitle7"), 
      description: $i18n.t(""), 
      image: number7
    },
    { 
      title: $i18n.t("oferservices:subtitle8"), 
      description: $i18n.t(""), 
      image: number8
    }
];

</script>

<div class={styles.listservices}>
  <div class={styles.container}>
    <div class={styles.boxSection}>
      <h1 class={styles.title}>{$i18n.t("oferservices:title")}</h1>
      <h2 class={styles.descriptionOne}>{$i18n.t("oferservices:descriptionOne")}</h2>
      <img src={cover} alt="cover-services" class={styles.image}>
    </div>
    <div class={styles.boxLists}>
      {#each listServices  as item }
        <div class={styles.box}>
          <img src={item.image} alt="icon">
          <h1 class={styles.subtitle}>
            {item.title}
          </h1>
        </div>
      {/each}
    </div>
  </div>
</div>


