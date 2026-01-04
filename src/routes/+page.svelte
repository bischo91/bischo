<script lang="ts">
	import { onMount } from 'svelte';
	import { About } from '$lib/components/about/';
	import Navigation from '$lib/components/navigation.svelte';
	import { Projects } from '$lib/components/projects/';
	import { Contact } from '$lib/components/contact/';
	import { Resume } from '$lib/components/resume/';
	import { scrollHash } from '$lib/utils';

	onMount(() => {
		document.title = 'Brian Cho';
	});
</script>

<div class="flex flex-col bg-primary">
	<div class="h-full min-h-screen w-full bg-primary" id="about" use:scrollHash>
		<About />
	</div>
	<div class="h-full w-full" id="nav">
		<Navigation />
	</div>
	<div class="mt-16 h-full min-h-screen w-full bg-primary" id="projects" use:scrollHash>
		<Projects />
	</div>
	<div class="mt-16 h-full min-h-screen w-full bg-primary" id="resume" use:scrollHash>
		<Resume />
	</div>
	<div class="h-full min-h-screen w-full bg-primary" id="contact" use:scrollHash>
		<Contact />
	</div>
</div>
