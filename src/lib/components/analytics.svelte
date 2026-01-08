<script lang="ts">
	import { onMount } from 'svelte';
	import { initializeAnalytics, trackPageView } from '$lib/analytics';

	onMount(() => {
		initializeAnalytics();

		setTimeout(() => {
			const initialPath = window.location.pathname + window.location.search + window.location.hash;
			trackPageView(initialPath);
		}, 100);

		const handleHashChange = () => {
			const path = window.location.pathname + window.location.search + window.location.hash;
			trackPageView(path);
		};

		window.addEventListener('hashchange', handleHashChange);
		window.addEventListener('popstate', handleHashChange);

		return () => {
			window.removeEventListener('hashchange', handleHashChange);
			window.removeEventListener('popstate', handleHashChange);
		};
	});
</script>
