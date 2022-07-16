<script>
	import {Meta, Story, Template} from '@storybook/addon-svelte-csf';
	import LoadingButton from './LoadingButton.svelte';

	const buttonClass =
		'krd-button bg-button-primary hover:bg-button-primary-hover text-white';
</script>

<Meta title="Loading Button" component={LoadingButton} />

<Template let:args>
	<LoadingButton {...args}>Slot content</LoadingButton>
</Template>
<Template let:args>
	<LoadingButton {...args} />
</Template>

<Story name="Loading" args={{isLoading: true, buttonClass}} />
<Story name="Not loading (Default)" args={{isLoading: false, buttonClass}} />
<Story name="Default" />
