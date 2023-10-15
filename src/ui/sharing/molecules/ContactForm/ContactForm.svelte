<script lang="ts">
  import { formStore, Input } from "@tuentyfaiv/svelte-form";
  import { i18n } from "@stores";
  import { fields } from "@schemas/contact";
  import { input } from "@stylesinputs";
  
  import * as styles from "./ContactForm.styles";

  const context = formStore({
    fields: fields,
    styles: { input },
    t: $i18n.t,
  });
  const { submit } = $context;

  $: onSubmit = submit(
    async (values) => {
     console.log("data");
    },
    {
      success: {
        title: $i18n.t("home:contact.success-title"),
        message: $i18n.t("home:contact.success-message"),
      },
    }
  );

</script>

<section class={styles.contact}>
    <h2 class={styles.title}>{$i18n.t("home:contact.title")}</h2>
    <form on:submit|preventDefault={onSubmit} class={styles.form}>
      <div class={styles.box}>
        <Input name="name" placeholder={$i18n.t("forms:name")} label={$i18n.t("forms:name")}  />
        <Input name="phone" type="tel" label={$i18n.t("forms:phone")} placeholder={$i18n.t("forms:phone")} />
      </div>
      <div class={styles.message}>
          <Input name="email" type="email" label={$i18n.t("forms:email")} placeholder={$i18n.t("forms:email")} />
          <Input
          name="message"
          type="textarea"
          label={$i18n.t("forms:message")}
          placeholder={$i18n.t("forms:message")}
          rows={5}
          />
      </div>
      <!-- svelte-ignore a11y-missing-attribute -->
      <a type="submit" class={styles.button}>{$i18n.t("home:contact.button")}</a>
    </form>
</section>
