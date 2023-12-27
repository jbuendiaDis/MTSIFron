
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
          {
            folio: 'COT003',
            fechaCreacion: '2023-01-01',
            estatus: 'Pendiente',
            detalles: [
              { origen: 'Aguascalientes', destino: 'Monterrey', tipoUnidad: 'Caja 53', tipoTraslado: 'Rodando' },
              { origen: 'Silao', destino: 'Toluca', tipoUnidad: 'Caja 53"', tipoTraslado: 'Rodando' },
            ],
          },
          {
            folio: 'COT004',
            fechaCreacion: '2023-01-01',
            estatus: 'Pendiente',
            detalles: [
              { origen: 'Aguascalientes', destino: 'Monterrey', tipoUnidad: 'Caja 53', tipoTraslado: 'Rodando' },
              { origen: 'Silao', destino: 'Toluca', tipoUnidad: 'Caja 53"', tipoTraslado: 'Rodando' },
            ],
          },
          {
            folio: 'COT005',
            fechaCreacion: '2023-01-01',
            estatus: 'Pendiente',
            detalles: [
              { origen: 'Aguascalientes', destino: 'Monterrey', tipoUnidad: 'Caja 53', tipoTraslado: 'Rodando' },
              { origen: 'Silao', destino: 'Toluca', tipoUnidad: 'Caja 53"', tipoTraslado: 'Rodando' },
            ],
          },
          {
            folio: 'COT006',
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
  
  /* Estilos para las celdas de acciones (por ejemplo, botones) */
  .action-button {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 8px 12px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }
  
  .action-button:hover {
    background-color: #45a049;
  }
  
  /* Efecto de sombra al pasar el ratón sobre la tabla */
  table:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
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

  <div style="display: flex; align-items: center; flex-direction: column; min-width: 1024px;">
    <h1>Historialde Cotizaciones</h1>
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
                        </tr>
                    </thead>
                    <tbody>
                {#each detalles as { origen, destino, tipoUnidad, tipoTraslado }}
                <tr>
                    <td class="details-td">{origen}</td>
                    <td class="details-td">{destino}</td>
                    <td class="details-td">{tipoUnidad}</td>
                    <td class="details-td">{tipoTraslado}</td>
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