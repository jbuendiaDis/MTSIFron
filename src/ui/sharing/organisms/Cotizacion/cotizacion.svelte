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
  
    // Funciones similares para los selects restantes
  
    const selectStyles = css`
      display: block;
      width: 100%;
      padding: 10px;
      margin-bottom: 15px;
      font-size: 16px;
      font-family: 'Roboto', sans-serif;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
      appearance: none;
      background-color: white;
      background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" fill="%23333" viewBox="0 0 24 24"%3E%3Cpath d="M7 10l5 5 5-5z" /%3E%3C/svg%3E');
      background-repeat: no-repeat;
      background-position: right 10px center;
    `;
  
    const formStyles = css`
      display: flex;
      flex-wrap: wrap;
      max-width: 900px;
      gap: 20px
    `;
  </script>
  
  <style>
     table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    font-family: 'Roboto', sans-serif;
    border: 1px solid #ddd;
  }

  th, td {
    border: 1px solid #ddd;
    padding: 15px;
    text-align: left;
  }

  th {
    background:  rgba(0,25,130,0.7371323529411764);
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
  </style>
  
  <form class={formStyles}>
    <label>
      Seleccione opción 1:
      <select class={selectStyles} bind:value={selectedValue1} on:change={loadOptions2}>
        {#each options1 as option (option)}
          <option value={option.value}>{option.label}</option>
        {/each}
      </select>
    </label>
  
    <label>
      Seleccione opción 2:
      <select class={selectStyles} bind:value={selectedValue2}>
        {#each options2 as option (option)}
          <option value={option.value}>{option.label}</option>
        {/each}
      </select>
    </label>
  
    <label>
      Seleccione opción 3:
      <select class={selectStyles} bind:value={selectedValue3}>
        {#each options3 as option (option)}
          <option value={option.value}>{option.label}</option>
        {/each}
      </select>
    </label>
  
    <label>
      Seleccione opción 4:
      <select class={selectStyles} bind:value={selectedValue4}>
        {#each options4 as option (option)}
          <option value={option.value}>{option.label}</option>
        {/each}
      </select>
    </label>
    <button class="action-button" on:click={() => (console.log("paso"))}>Agregar</button>
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
          <button class="action-button" on:click={() => deleteQuote(folio)}>Eliminar</button>
      </td>
  </tr>
  {/each}
</tbody>
</table>