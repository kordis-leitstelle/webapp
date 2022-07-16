<script lang="ts">
	import {createEventDispatcher} from 'svelte';
	import Spinner from '../Spinner/Spinner.svelte';

	export let buttonType = 'button';
	export let buttonClass = '';
	export let isLoading = false;
	//	Should be a registered tailwind color
	export let spinnerColor = 'white';

	const dispatch = createEventDispatcher();
</script>

<button
	type={buttonType}
	class={buttonClass}
	on:click={() => dispatch('clicked')}
>
	{#if isLoading}
		<Spinner color={spinnerColor} />
	{/if}
	<slot />
</button>
