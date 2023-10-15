<script lang="ts">
  import { onMount } from 'svelte';
  import * as styles from './Maps.styles'
  import config from "@config";

  type Address = {
    corporative: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    phoneNumber: string;
    lat: number;
    lng: number | string;
  };

  const addresses: Address[] = [
    {
      corporative: " Corporativo Diamante Santa Fe",
      street: "Lomas de Santa Fe, Contadero",
      city: "Cuajimalpa de Morelos",
      state: "Ciudad de México, CDMX",
      zip: "C.P. 01219",
      phoneNumber: "55 5604 4010",
      lat: 19.3609745,
      lng: -99.2799068
    },
    {
      corporative: "Estado de México",
      street: "Ponsiano Díaz S/N",
      city: " Santiago Tianguistengo",
      state: "Estado de México",
      zip: "C.P. 52600",
      phoneNumber: "71 3133 8574",
      lat: 19.172412,
      lng: -99.467260
    },
    {
      corporative: "Monterrey",
      street: "Camboya Nº 101",
      city: " Col. Nuevo Amanecer 1ª Sección, Apodaca",
      state: "Monterrey N.L.",
      zip: "C.P. 66636 ",
      phoneNumber: "81 2230 8979",
      lat: 25.779403,
      lng: -100.248869
    }
  ];


  const getMapUrl = ({ lat, lng }: Address) => `https://www.google.com/maps/embed/v1/place?key=${config.api_maps}&q=${lat},${lng}`;

  let selectedAddress: Address = addresses[0];

  const setSelectedAddress = (address: Address) => {
    console.log(address);
    selectedAddress = address;
    updateMap();
  };

  const updateMap = () => {
  const mapFrame = document.getElementById('map-frame') as HTMLIFrameElement;

      const mapUrl = getMapUrl(selectedAddress);
      mapFrame.src = mapUrl;
    };


  onMount(() => {
    const mapFrame = document.getElementById('map-frame') as HTMLIFrameElement;

    const updateMap = () => {
      const mapUrl = getMapUrl(selectedAddress);
      mapFrame.src = mapUrl;
    };

    updateMap();
  });
</script>

<div class={styles.maps}>
  <div class={styles.mapContainer}>
    <!-- svelte-ignore a11y-missing-attribute -->
    <iframe id="map-frame" class={styles.iframe}/>
    <div class={styles.addressList}>
      {#each addresses as address}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <li on:click={() => setSelectedAddress(address)} class={styles.listLi}>
        <div>
          <h2 class={styles.titleStyles}>{address.street}</h2>
          <p class={styles.textStyles}>{address.city}, {address.state} {address.zip}</p>
        </div>
        <div>
          <p class={styles.phoneStyles}>{address.phoneNumber}</p>
          <p class={styles.phoneStyles}>asanchez@multitrasladosyservicios.net</p>
        </div>
      </li>
      {/each}
    </div>
  </div>
</div>
