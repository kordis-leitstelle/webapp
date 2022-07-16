<script lang="ts">
	import {createEventDispatcher} from 'svelte';
	import Spinner from '../Spinner/Spinner.svelte';

	export let buttonType = 'button';
	export let buttonClass = '';
	export let isLoading = false;
	export let spinnerClass: string;

	const dispatch = createEventDispatcher();
</script>

<button
	type={buttonType}
	class={buttonClass}
	on:click={() => dispatch('clicked')}
>
	{#if isLoading}
		<Spinner {spinnerClass} />
	{/if}
	<slot />
</button>
