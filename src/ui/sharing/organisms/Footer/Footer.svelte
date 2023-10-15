<script lang="ts">
  import type { Props } from "./Footer.proptypes";

  import rec1 from "@icons/Rectangle1.svg";
  import rec2 from "@icons/Rectangle2.svg";
  import logo from "@icons/logo.svg";
  import * as styles from "./Footer.styles";
    import { ContactForm } from "@sharing/molecules";

</script>

<div class={styles.containerStyles(rec1, rec2)}>
  <div class={styles.contentStyles}>
    <div class={styles.section}>
      <div class={styles.contentCard}>
        <div>
          <h2 class={styles.titleStyles}>Corporativo Diamante Santa Fe</h2>
          <p class={styles.textStyles}>Lomas de Santa Fe, Contadero, Cuajimalpa de Morelos, 01219 Ciudad de México, CDMX</p>
        </div>
        <div>
          <p class={styles.phoneStyles}>55 5604 4010</p>
          <p class={styles.phoneStyles}>asanchez@multitrasladosyservicios.net</p>
        </div>
      </div>
      <div class={styles.contentCard}>
        <div>
          <h2 class={styles.titleStyles}>Estado de México</h2>
          <p class={styles.textStyles}>Ponsiano Díaz S/N Santiago Tianguistengo C.P. 52600 Estado de México</p>
        </div>
        <div>
          <p class={styles.phoneStyles}>71 3133 8574</p>
          <p class={styles.phoneStyles}>asanchez@multitrasladosyservicios.net</p>
        </div>
      </div>
      <div class={styles.contentCard}>
        <div>
          <h2 class={styles.titleStyles}>Monterrey</h2>
          <p class={styles.textStyles}>Camboya Nº 101 Col. Nuevo Amanecer 1ª Sección, Apodaca C.P. 66636 Monterrey N.L.</p>
        </div>
        <div>
          <p class={styles.phoneStyles}>81 2230 8979</p>
          <p class={styles.phoneStyles}>81 2230 9169</p>
          <p class={styles.phoneStyles}>asanchez@multitrasladosyservicios.net</p>
        </div>
      </div>
    </div>
    <div class={styles.box}>
      <ContactForm />
    </div>

  </div>
  <div class={styles.bottomSectionStyle}>
    <img src={logo} alt="Logo" class={styles.logoStyle} />
    <div class={styles.dividerStyle}></div>
  </div>
  <div class={styles.legacyContent}>
    © Todos los derchos reservados Multi Traslados y Servicios | Aviso de privacidad | Protección de datos
  </div>
</div>