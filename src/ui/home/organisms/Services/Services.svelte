<script lang="ts">
  import * as styles from "./Services.styles";
  import { i18n } from "@stores"; 
  import Guard from "../../../services/molecules/Guard/Guard.svelte";

  import cover1 from '@images/services-cover-one.png';
  import cover2 from '@images/services-cover-two.png';
  import number1 from '@images/01.png';
  import number2 from '@images/02.png';

</script>

<Guard title={  $i18n.t("home:services.title2")} subtitle={null} cover={cover1} number={number1}>
  <div class={styles.textStyles}>
    <h2 class={styles.linkStyles}>
      {$i18n.t("home:services.subtitle")}      
    </h2>
  <ul class={styles.ulStyles}>
    <li class={styles.listItemStyles}>      
      {$i18n.t("home:services.section1.item1")}      
    </li>
    <li class={styles.listItemStyles}>      
      {$i18n.t("home:services.section1.item2")}      
    </li>
    <li class={styles.listItemStyles}>      
      {$i18n.t("home:services.section1.item3")}      
    </li>
    <li class={styles.listItemStyles}>      
      {$i18n.t("home:services.section1.item4")}      
    </li>
    <li class={styles.listItemStyles}>      
      {$i18n.t("home:services.section1.item5")}      
    </li>
    <li class={styles.listItemStyles}>      
      {$i18n.t("home:services.section1.item6")}      
    </li>
    <li class={styles.listItemStyles}>      
      {$i18n.t("home:services.section1.item7")}      
    </li>
    <li class={styles.listItemStyles}>      
      {$i18n.t("home:services.section1.item8")}      
    </li>
  </ul>
  <ul>
    <li class={styles.listItemStyles}>      
      {$i18n.t("home:services.section2.item1")}      
    </li>
    <li class={styles.listItemStyles}>      
      {$i18n.t("home:services.section2.item2")}      
    </li>
    <li class={styles.listItemStyles}>      
      {$i18n.t("home:services.section2.item3")}      
    </li>
    <li class={styles.listItemStyles}>      
      {$i18n.t("home:services.section2.item4")}      
    </li>
    <li class={styles.listItemStyles}>      
      {$i18n.t("home:services.section2.item5")}      
    </li>
    <li class={styles.listItemStyles}>      
      {$i18n.t("home:services.section2.item6")}      
    </li>
  </ul>
</div>
</Guard>
<Guard title={  $i18n.t("home:services.title")} subtitle={null} cover={cover2} number={number2}>
    <div class={styles.textStyles}>
      <h2 class={styles.linkStyles}>
        {$i18n.t("home:services.subtitle2")}      
      </h2>
      <ul class={styles.ulStyles2}>
        <li class={styles.listItemStyles}>      
          {$i18n.t("home:services.section3.item1")}      
        </li>
        <li class={styles.listItemStyles}>      
          {$i18n.t("home:services.section3.item2")}      
        </li>
        <li class={styles.listItemStyles}>      
          {$i18n.t("home:services.section3.item3")}      
        </li>
        <li class={styles.listItemStyles}>      
          {$i18n.t("home:services.section3.item4")}      
        </li>
        <li class={styles.listItemStyles}>      
          {$i18n.t("home:services.section3.item5")}      
        </li>
        <li class={styles.listItemStyles}>      
          {$i18n.t("home:services.section3.item6")}      
        </li>
        <li class={styles.listItemStyles}>      
          {$i18n.t("home:services.section3.item7")}      
        </li>
        <li class={styles.listItemStyles}>      
          {$i18n.t("home:services.section3.item8")}      
        </li>
        <li class={styles.listItemStyles}>      
          {$i18n.t("home:services.section3.item9")}      
        </li>
        <li class={styles.listItemStyles}>      
          {$i18n.t("home:services.section3.item10")}      
        </li>
      </ul>
      <h2 class={styles.linkStyles}>
        {$i18n.t("home:services.subtitle3")}      
      </h2>
      <ul class={styles.ulStyles2}>
        <li class={styles.listItemStyles}>      
          {$i18n.t("home:services.section4.item1")}      
        </li>
        <li class={styles.listItemStyles}>      
          {$i18n.t("home:services.section4.item2")}      
        </li>
        <li class={styles.listItemStyles}>      
          {$i18n.t("home:services.section4.item3")}      
        </li>
        <li class={styles.listItemStyles}>      
          {$i18n.t("home:services.section4.item4")}      
        </li>
        <li class={styles.listItemStyles}>      
          {$i18n.t("home:services.section4.item5")}      
        </li>
      </ul>
</Guard>