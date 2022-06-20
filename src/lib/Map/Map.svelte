<script lang="ts">
	import {onDestroy, onMount, setContext} from 'svelte';
	import {LngLatLike, Map} from 'mapbox-gl';

	export let centerCoords: LngLatLike = [0, 0];
	$: map?.setCenter(centerCoords);
	export let zoom = 9;
	$: map?.setZoom(zoom);
	export let mapStyle: string | undefined;
	$: map?.setStyle(mapStyle);

	let map: Map | undefined;
	let isMapReady = false;

	setContext('main-map', {getMap: () => map});

	onMount(() => {
		map = new Map({
			container: 'map',
			accessToken: __kordisConfig.MAPBOX_ACCESS_TOKEN,
			style: mapStyle,
			center: centerCoords,
			zoom,
			attributionControl: false
		});

		map.once('load', () => (isMapReady = true));

		map.dragRotate.disable();
		map.touchZoomRotate.disableRotation();
	});

	onDestroy(() => {
		if (map) map.remove();
	});
</script>

{#if isMapReady}
	<slot />
{/if}

<!-- Attribution -->
<div class="absolute z-10 bottom-0  bg-blue-50 px-1 bg-opacity-60 text-sm">
	Kordis Einsatzkarte | ©
	<a href="https://cartesius.io" target="_blank">Cartesius</a>,
	<a href="https://mapbox.com" target="_blank">Mapbox</a>,
	<a href="https://openstreetmap.org/" target="_blank">OpenStreetMap</a>
</div>

<div id="map-container">
	<div id="map" />
</div>

<style>
	@import '../../../node_modules/mapbox-gl/dist/mapbox-gl.css';

	#map {
		@apply h-full w-full;
	}

	#map-container {
		@apply h-screen;
	}

	:global(.mapboxgl-ctrl-logo) {
		display: none !important;
	}
</style>
