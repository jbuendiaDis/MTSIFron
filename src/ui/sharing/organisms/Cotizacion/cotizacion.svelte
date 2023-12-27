<script lang="ts">
    import { onMount } from 'svelte';
    import { css } from '@emotion/css';
  
    // Definición de tipos
    interface Option {
      value: string;
      label: string;
    }
  
    let options1: Option[] = [];
    let options2: Option[] = [];
    let options3: Option[] = [];
    let options4: Option[] = [];
  
    let selectedValue1: string = '';
    let selectedValue2: string = '';
    let selectedValue3: string = '';
    let selectedValue4: string = '';

    let detalles = [
          { origen: 'Aguascalientes', destino: 'Monterrey', tipoUnidad: 'Caja 53', tipoTraslado: 'Rodando' },
          { origen: 'Silao', destino: 'Toluca', tipoUnidad: 'Caja 53"', tipoTraslado: 'Rodando' },
          { origen: 'Silao', destino: 'Toluca', tipoUnidad: 'Caja 53"', tipoTraslado: 'Rodando' },
          { origen: 'Silao', destino: 'Toluca', tipoUnidad: 'Caja 53"', tipoTraslado: 'Rodando' },
          { origen: 'Silao', destino: 'Toluca', tipoUnidad: 'Caja 53"', tipoTraslado: 'Rodando' },
        ]
  
    const fetchData = async (url: string, callback: (data: Option[]) => void) => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data: Option[] = await response.json();
          callback(data);
        } else {
          console.error('Error al obtener datos de la API');
        }
      } catch (error) {
        console.error('Error de red', error);
      }
    };
  
    onMount(() => {
      fetchData('URL_DE_LA_API_1', (data) => {
        options1 = data;
      });
      fetchData('URL_DE_LA_API_1', (data) => {
        options3 = data;
      });
      fetchData('URL_DE_LA_API_1', (data) => {
        options4 = data;
      });
    });
  
    const loadOptions2 = () => {
      if (selectedValue1) {
        fetchData(`URL_DE_LA_API_2/${selectedValue1}`, (data) => {
          options2 = data;
        });
      }
    };
  
  
    const formStyles = css`
      display: flex;
      flex-wrap: wrap;
      gap: 20px
    `;
  </script>
  
  <style>
/* Estilos para la tabla principal */
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  font-family: 'Roboto', sans-serif;
  border: 1px solid #e0e0e0;
  border-radius: 10px; /* Añadir bordes redondeados */
  overflow: hidden; /* Ocultar el contenido que se extiende más allá de los bordes redondeados */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease; /* Agregar transición al efecto de sombra */
}

/* Estilos para las celdas de encabezado */
th {
  background-color: #f5f5f5;
  color: #333;
  font-weight: bold;
  padding: 12px;
  text-align: left;
  border-bottom: 2px solid #e0e0e0;
}

/* Estilos para las celdas de datos */
td {
  padding: 12px;
  border-bottom: 1px solid #e0e0e0;
}

/* Estilos para las filas impares (puedes ajustar el color según tu preferencia) */
tr:nth-child(odd) {
  background-color: #f9f9f9;
}

/* Efecto de sombra al pasar el ratón sobre la tabla */
table:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

  .action-button {
    background-color: #c80000b0;
    color: white;
    border: none;
    padding: 10px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    cursor: pointer;
    border-radius: 4px;
  }
    .action-button {
    background-color: #c80000b0;
    color: white;
    border: none;
    padding: 5px 5px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    cursor: pointer;
    border-radius: 10px;
    height: 80%;
  }

  .action-button:hover {
    background:  #fa333386;
  }
  .select {
  position: relative;
  display: inline-block;
  margin-bottom: 15px;
  width: 100%;
  max-width: 20vw;
  }    .select select {
      font-family: 'Arial';
      display: inline-block;
      width: 100%;
      cursor: pointer;
      padding: 10px 19px;
      outline: 0;
      border: 1px solid #000000;
      border-radius: 10px;
      background: #e6e6e6;
      color: #7b7b7b;
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
  }
      .select select::-ms-expand {
          display: none;
      }
      .select select:hover,
      .select select:focus {
          color: #000000;
          background: #cccccc;
      }
      .select select:disabled {
          opacity: 0.3;
          pointer-events: none;
      }
  .select_arrow {
  position: absolute;
  top: 18px;
  right: 23px;
  pointer-events: none;
  border-style: solid;
  border-width: 8px 5px 0px 5px;
  border-color: #7b7b7b transparent transparent transparent;
  }
  .select select:hover ~ .select_arrow,
  .select select:focus ~ .select_arrow {
  border-top-color: #000000;
  }
  .select select:disabled ~ .select_arrow {
  border-top-color: #cccccc;
  }

  .cta {
 position: relative;
 margin: auto;
 padding: 12px 18px;
 transition: all 0.2s ease;
 border: none;
 background: none;
}

.cta:before {
 content: "";
 position: absolute;
 top: 0;
 left: 0;
 display: block;
 border-radius: 50px;
 background: #b1dae7;
 width: 45px;
 height: 45px;
 transition: all 0.3s ease;
}

.cta span {
 position: relative;
 font-family: "Ubuntu", sans-serif;
 font-size: 18px;
 font-weight: 700;
 letter-spacing: 0.05em;
 color: #234567;
}

.cta svg {
 position: relative;
 top: 0;
 margin-left: 10px;
 fill: none;
 stroke-linecap: round;
 stroke-linejoin: round;
 stroke: #234567;
 stroke-width: 2;
 transform: translateX(-5px);
 transition: all 0.3s ease;
}

.cta:hover:before {
 width: 100%;
 background: #b1dae7;
}

.cta:hover svg {
 transform: translateX(0);
}

.cta:active {
 transform: scale(0.95);
}
.delButton {
 width: 140px;
 height: 40px;
 cursor: pointer;
 display: flex;
 align-items: center;
 background: red;
 border: none;
 border-radius: 5px;
 box-shadow: 1px 1px 3px rgba(0,0,0,0.15);
 background: #e62222;
}

.delButton, button span {
 transition: 200ms;
}

.delButton .text {
 transform: translateX(35px);
 color: white;
 font-weight: bold;
}

.delButton .icon {
 position: absolute;
 border-left: 1px solid #c41b1b;
 transform: translateX(110px);
 height: 30px;
 width: 30px;
 display: flex;
 align-items: center;
 justify-content: center;
}

.delButton svg {
 width: 15px;
 fill: #eee;
}

.delButton:hover {
 background: #ff3636;
}

.delButton:hover .text {
 color: transparent;
}

.delButton:hover .icon {
 width: 150px;
 border-left: none;
 transform: translateX(0);
}

.delButton:focus {
 outline: none;
}

.delButton:active .icon svg {
 transform: scale(0.8);
}
.buttonAdd {
  --main-focus: #2d8cf0;
  --font-color: #323232;
  --bg-color-sub: #dedede;
  --bg-color: #eee;
  --main-color: #323232;
  position: relative;
  width: 180px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 2px solid var(--main-color);
  box-shadow: 4px 4px var(--main-color);
  background-color: var(--bg-color);
  border-radius: 10px;
  overflow: hidden;
}

.buttonAdd, .buttonAdd__icon, .buttonAdd__text {
  transition: all 0.3s;
}

.buttonAdd .buttonAdd__text {
  transform: translateX(22px);
  color: var(--font-color);
  font-weight: 600;
}

.buttonAdd .buttonAdd__icon {
  position: absolute;
  transform: translateX(129px);
    height: 100%;
    width: 50px;
  background-color: var(--bg-color-sub);
  display: flex;
  align-items: center;
  justify-content: center;
}

.buttonAdd .svg {
  width: 20px;
  fill: var(--main-color);
}

.buttonAdd:hover {
  background: var(--bg-color);
}

.buttonAdd:hover .buttonAdd__text {
  color: transparent;
}

.buttonAdd:hover .buttonAdd__icon {
  width: 173px;
  transform: translateX(0);
}

.buttonAdd:active {
  transform: translate(4px, 4px);
  box-shadow: 0px 0px var(--main-color);
}

.cssbuttons-io-button {
  display: flex;
  align-items: center;
  font-family: inherit;
  font-weight: 500;
  font-size: 17px;
  padding: 0.8em 1.5em 0.8em 1.2em;
  color: white;
  background: #ad5389;
  background: linear-gradient(0deg, rgb(119, 164, 247) 0%, rgb(4, 0, 248) 100%);
  border: none;
  box-shadow: 0 0.7em 1.5em -0.5em rgb(2, 1, 83);
  letter-spacing: 0.05em;
  border-radius: 20em;
}

.cssbuttons-io-button svg {
  margin-right: 8px;
}

.cssbuttons-io-button:hover {
  box-shadow: 0 0.5em 1.5em -0.5em rgb(0, 1, 66);
}

.cssbuttons-io-button:active {
  box-shadow: 0 0.3em 1em -0.5em rgb(160, 109, 255);
}
  </style>
  
  <div style="display: flex; justify-content: space-between; flex-direction: column; gap: 30px; min-width: 1024px; margin: 50px;">
    <h1 style="padding-bottom: 10px;">Solicitar cotizacion</h1>
    <form class={formStyles}>
      <div class="select">
        <select>
            <option>--Estado Origen--</option>
            {#each options1 as option (option)}
            <option value={option.value}>{option.label}</option>
          {/each}
        </select>
        <div class="select_arrow" />
    </div>
  <div class="select">
    <select>
        <option>--Ciudad Origen--</option>
        {#each options1 as option (option)}
        <option value={option.value}>{option.label}</option>
      {/each}
    </select>
    <div class="select_arrow" />
</div>
<div class="select">
  <select>
      <option>--Estado destino--</option>
      {#each options1 as option (option)}
      <option value={option.value}>{option.label}</option>
    {/each}
  </select>
  <div class="select_arrow" />
</div>
<div class="select">
  <select>
      <option>--Ciudad destino--</option>
      {#each options1 as option (option)}
      <option value={option.value}>{option.label}</option>
    {/each}
  </select>
  <div class="select_arrow" />
</div>
<div class="select">
  <select>
      <option>--Tipo Traslado--</option>
      {#each options1 as option (option)}
      <option value={option.value}>{option.label}</option>
    {/each}
  </select>
  <div class="select_arrow" />
</div>
<div class="select">
  <select>
      <option>--Tipo Unidad--</option>
      {#each options1 as option (option)}
      <option value={option.value}>{option.label}</option>
    {/each}
  </select>
  <div class="select_arrow" />
</div>
<button class="cssbuttons-io-button">
  <svg viewBox="0 0 640 512" fill="white" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"></path></svg>
   <span>Subir manual</span>
 </button>
 <button class="buttonAdd" type="button" on:click={() => (console.log("paso"))}>
  <span class="buttonAdd__text">Agregar Viaje</span>
  <span class="buttonAdd__icon"><svg class="svg" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg></span>
</button>
  </form>
  <table class="details-table">
    <thead>
      <tr>
        <th class="details-th">Origen</th>
        <th class="details-th">Destino</th>
        <th class="details-th">Tipo de Unidad</th>
        <th class="details-th">Tipo de Traslado</th>
        <th class="details-th">Acción</th>
          </tr>
        </thead>
        <tbody>
          {#each detalles as { origen, destino, tipoUnidad, tipoTraslado }}
          <tr>
      <td class="details-td">{origen}</td>
      <td class="details-td">{destino}</td>
      <td class="details-td">{tipoUnidad}</td>
      <td class="details-td">{tipoTraslado}</td>
      <td class="details-td">
        <button class="delButton" on:click={() => (console.log("algo"))}><span class="text">Eliminar</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
      </td>
    </tr>
    {/each}
</tbody>
</table>
<button class="cta"  on:click={() => (console.log("paso"))}>
  <span>Cotizar</span>
  <svg viewBox="0 0 13 10" height="10px" width="15px">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg>
</button>
</div>