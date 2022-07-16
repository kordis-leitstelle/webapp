<script>
	import {Meta, Story, Template} from '@storybook/addon-svelte-csf';
	import Spinner from './Spinner.svelte';
</script>

<Meta title="Spinner" component={Spinner} />

<Template let:args>
	<Spinner {...args} />
</Template>

<Story name="Default" args={{}} />
<Story
	name="Custom size"
	args={{spinnerClass: 'w-24 h-24 fill-white text-primary'}}
/>
