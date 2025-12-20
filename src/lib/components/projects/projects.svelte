<script lang="ts">
	import { ProjectContainer, projectContents } from '$lib/components/projects/';
</script>

<div class="h-full min-h-screen w-full overflow-hidden bg-primary" id="projects">
	{#each projectContents as projectContent}
		<ProjectContainer project={projectContent} />
	{/each}
</div>
