<script lang="ts">
	import type {IconDefinition} from '@fortawesome/free-solid-svg-icons';

	export let iconClass = '';
	export let icon: IconDefinition;

	let i: [number, number, string[], string, string | string[]];
	let c: string;
	let transform;

	$: i = icon?.icon || [0, 0, '', [], ''];
</script>

{#if i[4]}
	<svg
		class={iconClass}
		viewBox={`0 0 ${i[0]} ${i[1]}`}
		aria-hidden="true"
		role="img"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g
			transform={`translate(${i[0] / 2} ${i[1] / 2})`}
			transform-origin={`${i[0] / 4} 0`}
		>
			<g {transform}>
				{#if typeof i[4] == 'string'}
					<path
						d={i[4]}
						fill="currentColor"
						transform={`translate(${i[0] / -2} ${i[1] / -2})`}
					/>
				{:else}
					<path
						d={i[4][0]}
						fill="currentColor"
						transform={`translate(${i[0] / -2} ${i[1] / -2})`}
					/>
					<path
						d={i[4][1]}
						fill="currentColor"
						transform={`translate(${i[0] / -2} ${i[1] / -2})`}
					/>
				{/if}
			</g>
		</g>
	</svg>
{/if}
