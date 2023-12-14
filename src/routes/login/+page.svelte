<script lang="ts">

    import { i18n } from "@stores";
  
    import { page } from "@contact/styles";
  
    import { SEO } from "@sharing/atoms";
    import {LoginForm  } from "@sharing/organisms";
    import * as styles from "./login.styles";

</script>
  
  <SEO title={$i18n.t("Cotizador")} />
  
  <div class={styles.listservices}>
    <div class={styles.container}>
        <LoginForm />
    </div>  
</div>