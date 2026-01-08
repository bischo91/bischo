<script lang="ts">
	import { ProjectContainer, projectContents } from '$lib/components/projects/';
</script>

<div class="w-full h-full min-h-screen mb-24 bg-primary">
	<div class="max-w-full px-4 mx-auto sm:w-5/6 md:w-3/4 lg:w-2/3">
		<h1 class="flex py-6 text-4xl">Projects</h1>
		<div class="space-y-36">
			{#each projectContents as projectContent}
				<ProjectContainer project={projectContent} />
			{/each}
		</div>
	</div>
</div>
