<script lang="ts">
	import { onMount } from "svelte"
	export interface BreakProps {
		/** The delay before the break is shown */
		delay: number
		/** The height of the break */
		height?: number
	}
	const { delay, height = 1 }: BreakProps = $props()
	let show = $state(false)

	onMount(() => {
		const timer = setTimeout(() => {
			show = true
		}, delay)
		return () => clearTimeout(timer)
	})
</script>

{#if show}
	{#each Array(height).fill(0) as _}
		<br />
	{/each}
{/if}
