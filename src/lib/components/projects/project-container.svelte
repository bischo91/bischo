<script lang="ts">
	import github_logo from '$lib/assets/github_white.png';
	import { Slidy } from 'svelte-slidy';

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

	let index = $state(0),
		init = $state(false);

	const slides = $derived(
		project.imageSrc?.map((image, i) => ({
			id: i,
			type: image.split('.')[1] == 'mp4' ? 'video' : 'image',
			src: image,
			poster: project.previewSrc?.[i] || '',
			title: image
		}))
	);

	const slidy = $derived({
		timeout: 500,
		slides: slides,
		slide: {
			gap: 25,
			width: '100%',
			height: '100%',
			backimg: false,
			imgsrckey: 'src',
			objectfit: 'contain',
			overflow: 'visible'
		},
		wrap: {
			id: 'slidy',
			width: '100%',
			height: '60vh',
			maxHeight: '600px',
			padding: '0',
			align: 'middle',
			alignmargin: 0
		},
		controls: {
			dots: true,
			dotsnum: false,
			dotsarrow: false,
			dotspure: true,
			arrows: true,
			keys: true,
			drag: true,
			wheel: true
		},
		options: {
			axis: 'x',
			loop: true,
			duration: 350,
			sensity: 0.3
		}
	});
</script>

<div class="mx-auto max-w-full space-y-2 overflow-x-hidden">
	<div class="mx-2 inline-flex h-8 w-full">
		<h2 class="my-4 px-1 text-2xl md:text-3xl lg:text-2xl">
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
	{#if project.imageSrc}
		<div class="slidy-wrapper mt-8 h-full w-full">
			<Slidy {...slidy} bind:index bind:init>
				{#snippet children({ item }: { item: { type: string; src: string; poster: string } })}
					<div class="slide-wrapper">
						{#if item.type === 'video'}
							<video src={item.src} poster={item.poster} class="media-content" controls muted loop>
								<track kind="captions" />
							</video>
						{:else}
							<img alt={item.src} src={item.src} class="media-content" />
						{/if}
					</div>
				{/snippet}
			</Slidy>
		</div>
	{/if}
	<div class="mx-auto flex w-full flex-col lg:flex-row">
		<div class="text-md mx-3 w-full p-2 lg:w-3/4">
			<p class="md:text-md mx-auto mt-12 w-full leading-relaxed">
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
				<h3 class="text-md my-2 h-6 md:text-lg lg:text-xl">Technical Sheet</h3>
				{#each project.techStack as techStack}
					<ul class="md:text-md list-disc text-sm">
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

<style>
	.slide-wrapper {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
	}
	.media-content {
		height: 90%;
		width: 85%;
	}

	:global(#slidy .slidy-dots.pure li button) {
		background-color: rgba(255, 255, 255, 0.25);
	}

	:global(#slidy .slidy-dots.pure li.active button) {
		background-color: white !important;
	}

	:global(#slidy .slidy-dots.pure li button:hover) {
		background-color: rgba(255, 255, 255, 0.5);
	}

	:global(#slidy .arrow-left),
	:global(#slidy .arrow-right),
	:global(#slidy .dots-arrow-left button),
	:global(#slidy .dots-arrow-right button) {
		background-color: transparent !important;
		color: #ffffff !important;
		transition:
			background-color 0.3s ease,
			opacity 0.3s ease;
		font-size: 24px !important;
		border-radius: 50%;
		padding: 0 12px !important;
		z-index: 100;
	}

	:global(#slidy .arrow-left:hover),
	:global(#slidy .arrow-right:hover),
	:global(#slidy .dots-arrow-left:hover button),
	:global(#slidy .dots-arrow-right:hover button) {
		background-color: rgba(255, 255, 255, 0.25) !important;
		/*opacity: 1;*/
		z-index: 100;
	}
</style>
