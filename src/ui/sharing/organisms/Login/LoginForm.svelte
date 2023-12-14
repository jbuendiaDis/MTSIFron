<script>
import { formStore, Input } from "@tuentyfaiv/svelte-form";
  import { i18n } from "@stores";
  import { login as  fields } from "@schemas/contact";
  import { input } from "@stylesinputs";

  import * as styles from "./loginForm.styles";
  
  let email = '';
  let password = '';
  let clientCode = '';
  let error = '';

  import OpenEye from "@images/open-eye.svg";
	import ClosedEye from "@images/closed-eye.svg";
  import { Button } from "@sharing/atoms";
	import { goto } from "$app/navigation";

  const icons = {
    show: OpenEye,
    hide: ClosedEye

  };

  const context = formStore({
    fields: fields,
    styles: { input, icons },
    t: $i18n.t,
  });
  const { submit } = $context;

  $: onSubmit = submit(
    async (values) => {
     console.log("data", values);
     const { email, password, clientCode } = values;
    try {
      const response = await fetch('http://localhost:3000/api/login/client', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, codigoCliente: clientCode }),
      });
      
      const data = await response.json();
      const { payload } = data;
      if (response.ok) {
        localStorage.setItem('token', payload.token);
        localStorage.setItem('user', payload.user);
        goto('/dashboard')
      } else {
        // Maneja errores de inicio de sesión
        console.error('Error al iniciar sesión');
      }
    } catch (error) {
      console.error('Error de red', error);
    }
    },
    {
      success: {
        title: $i18n.t("Inicio Correcto"),
        message: $i18n.t("Gracias por iniciar el cotizador de servicios"),
      },
    }
  );

</script>

<div style="width: 40%; z-index: 10;">
  <h2 class={styles.title}>{'INICIAR EN EL COTIZADOR'}</h2>
  <form on:submit|preventDefault={onSubmit} class={styles.form}>
    <div class={styles.box}>
      <Input name="clientCode" type="text" placeholder={'Codigo cliente'} label={'Codigo cliente'} />
      <Input name="email" type="email" label={'Email'} placeholder={'Email'} />
      <Input name="password" type="password" label={'Contraseña'} placeholder={'Contraseña'} />
    </div>
    <!-- svelte-ignore a11y-missing-attribute --> 
    <button type="submit" class={styles.button}>{"Iniciar Cotizador"}</button>
  </form>
</div>