<script>
// @ts-nocheck

    import { onMount } from 'svelte';
    import { goto } from "$app/navigation";
    import { Cotizacion } from "@sharing/organisms"

    let cotizaciones = [
      {
        folio: 'COT001',
        fechaCreacion: '2023-01-01',
        estatus: 'Pendiente',
        detalles: [
          { origen: 'Aguascalientes', destino: 'Monterrey', tipoUnidad: 'Caja 53', tipoTraslado: 'Rodando' },
          { origen: 'Silao', destino: 'Toluca', tipoUnidad: 'Caja 53"', tipoTraslado: 'Rodando' },
        ],
      },
      {
        folio: 'COT002',
        fechaCreacion: '2023-01-01',
        estatus: 'Pendiente',
        detalles: [
          { origen: 'Aguascalientes', destino: 'Monterrey', tipoUnidad: 'Caja 53', tipoTraslado: 'Rodando' },
          { origen: 'Silao', destino: 'Toluca', tipoUnidad: 'Caja 53"', tipoTraslado: 'Rodando' },
        ],
      },
      // ... Puedes agregar más cotizaciones aquí ...
    ];
  
    /**
	 * @type {number | null}
	 */
    let expandedFolio = null;
  
    const viewQuoteDetails = (/** @type {number} */ folio) => {
      // Cambia el estado para mostrar o ocultar los detalles de la cotización
      expandedFolio = expandedFolio === folio ? null : folio;
    };
  
    const deleteQuote = (/** @type {string | number} */ folio) => {
      // Elimina la cotización del arreglo (puedes implementar la lógica de eliminación según tus necesidades)
      cotizaciones = cotizaciones.filter((cotizacion) => cotizacion.folio !== folio);
    };

    const goToCreateQuote = () => {
    // Navega a la página de creación de cotización (puedes ajustar la ruta según tu estructura de enrutamiento)
    goto('/create-quote');
  };
</script>

  
<style>
  .content {
    display: grid;
    background-color: gray;
    height: 20%;
    width: 100%;
    margin-top: -10em;
    z-index: -5;
    border-bottom: 1px solid white;
    min-height: 15vh;
  }
  .container {
    display: grid;
    place-content: center;
    min-width: 1200px;
    width: 100%;
  }
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

  .action-button:hover {
    background:  #fa333386;
  }

  .details-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
  }

  .details-th, .details-td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: left;
  }

  .details-th {
    background: linear-gradient(148deg, rgba(0,25,130,0.7371323529411764) 33%, rgba(255,255,255,0) 67%);;
    color: white;
  }
</style>

<div class="content" />
<div class="container">
    <Cotizacion />
    <table>
        <thead>
            <tr>
                <th>Folio de Cotización</th>
                <th>Fecha de Creación</th>
                <th>Estatus</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            {#each cotizaciones as { folio, fechaCreacion, estatus, detalles }}
            <tr>
                <td>{folio}</td>
                <td>{fechaCreacion}</td>
                <td>{estatus}</td>
                <td>
                    <button class="action-button" on:click={() => viewQuoteDetails(folio)}>Ver Detalle</button>
                </td>
            </tr>
            {#if expandedFolio === folio}
            <tr>
                <td colspan="4">
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
    </td>
</tr>
{/if}
    {/each}
</tbody>
</table>
</div>