<script lang="ts">
	import github_logo from '$lib/assets/github_white.png';

	type Project = {
		id: number;
		title: string;
		imageSrc?: string[];
		previewSrc?: string[];
		gitHubLink?: string;
		description?: string;
		techStack?: { language?: string; packages?: string[] }[];
		demoLink?: string;
	};
	interface Props {
		project: Project;
	}
	let { project }: Props = $props();
</script>

<div class="mx-auto space-y-2">
	<div class="mx-2 mt-16 inline-flex h-8 w-full">
		<h2 class="my-4 px-1 font-mono text-2xl md:text-3xl lg:text-2xl">
			{project.title}
			{#if project.gitHubLink}
				<a
					class="m-auto ml-4 cursor-pointer"
					href={project?.gitHubLink}
					target="_blank"
					rel="noreferrer"
				>
					<img src={github_logo} alt="GitHub" class="inline-flex h-6 w-auto object-scale-down" />
				</a>
			{/if}
		</h2>
	</div>

	<!-- Slider -->
	NEED IMAGES HERE
	<div class="mx-auto flex w-full flex-col lg:flex-row">
		<div class="text-md mx-3 w-full p-2 lg:w-3/4">
			<p class="font-openSans md:text-md mx-auto mt-12 w-full leading-relaxed">
				{project?.description}
			</p>
			{#if project?.demoLink}
				<div>
					<span>Click </span>
					<a target="_blank" rel="noreferrer" class="underline" href={project.demoLink}> here </a>
					<span> for a demo.</span>
				</div>
			{/if}
		</div>
		{#if project?.techStack && project.techStack?.length > 0}
			<div class="mx-3 mt-10 w-full p-2 lg:w-1/4">
				<h3 class="text-md my-2 h-6 font-mono md:text-lg lg:text-xl">Technical Sheet</h3>
				{#each project.techStack as techStack}
					<ul class="md:text-md list-disc font-mono text-sm">
						<li>
							{techStack.language}
							{#if techStack.packages && techStack.packages?.length > 0}
								<ul class="list-disc pl-4">
									{#each techStack.packages as packages}
										<li>{packages}</li>
									{/each}
								</ul>
							{/if}
						</li>
					</ul>
				{/each}
			</div>
		{/if}
	</div>
</div>
