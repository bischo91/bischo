<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.ico';
	import Analytics from '$lib/components/analytics.svelte';

	let { children } = $props();
</script>

<script module lang="ts">
	export const prerender = true;
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<Analytics />
{@render children()}
