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
		paused = $state(true),
		init = $state(false);

	const slides = $derived(
		project.imageSrc?.map((image, i) => ({
			id: i,
			type: image.split('.')[1] == 'mp4' ? 'video' : 'image',
			src: image,
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
			dotsnum: true,
			dotsarrow: true,
			dotspure: false,
			arrows: true,
			keys: true,
			drag: false,
			wheel: true
		},
		options: {
			axis: 'x',
			loop: true,
			duration: 350,
			sensity: 0.3
		}
	});

	const videoControl = (e, id) => {
		if (paused) e.target.play();
		else e.target.pause();
	};
</script>

<div class="mx-auto max-w-full space-y-2 overflow-x-hidden">
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
	{#if project.imageSrc}
		<div class="slidy-wrapper w-full pb-12">
			<Slidy {...slidy} bind:index bind:init>
				{#snippet children({ item })}
					<div class="slide-wrapper">
						{#if item.type === 'video'}
							<video
								src={item.src}
								poster={item.poster}
								onclick={(e) => videoControl(e, item.ix)}
								bind:paused
								class="media-content"
							>
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

<style>
	.slidy-wrapper {
		position: relative;
		overflow-x: hidden;
		width: 100%;
		max-width: 100%;
	}

	.slide-wrapper {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		box-sizing: border-box;
	}

	.media-content {
		max-width: 100%;
		max-height: 100%;
		width: auto;
		height: auto;
		object-fit: contain;
		display: block;
	}

	:global(#slidy) {
		overflow: hidden !important;
		max-width: 100%;
	}

	:global(#slidy .slidy-ul li) {
		overflow: hidden !important;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	:global(#slidy .slidy-dots) {
		position: absolute !important;
		bottom: -60px !important;
		top: auto !important;
		left: 50% !important;
		transform: translateX(-50%) !important;
		width: auto !important;
		max-width: 100% !important;
		height: auto !important;
		display: flex !important;
		justify-content: center;
		align-items: center;
		gap: 8px;
		z-index: 10;
		overflow: visible;
	}

	:global(#slidy .slidy-dots li button) {
		background-color: transparent !important;
		background: none !important;
		border: none !important;
		color: #b0b0b0 !important;
		opacity: 1 !important;
		transition: color 0.3s ease;
	}

	:global(#slidy .slidy-dots li.active),
	:global(#slidy .slidy-dots li.active button) {
		color: #ffffff !important;
		background-color: transparent !important;
		background: none !important;
	}

	:global(#slidy .slidy-dots.pure li button) {
		background: transparent !important;
		background-color: transparent !important;
		color: #b0b0b0 !important;
	}

	:global(#slidy .slidy-dots.pure li.active button) {
		background: transparent !important;
		background-color: transparent !important;
		color: #ffffff !important;
	}

	:global(#slidy .slidy-dots li button:hover) {
		color: #ffffff !important;
	}

	:global(#slidy .arrow-left),
	:global(#slidy .arrow-right),
	:global(#slidy .dots-arrow-left button),
	:global(#slidy .dots-arrow-right button) {
		background-color: transparent !important;
		background: none !important;
		color: #ffffff !important;
		opacity: 1 !important;
		transition:
			background-color 0.3s ease,
			opacity 0.3s ease;
		font-size: 24px !important;
		width: auto !important;
		height: 100% !important;
		min-height: 60vh !important;
		max-height: 600px !important;
		padding: 0 12px !important;
		line-height: 1 !important;
		border-radius: 0 !important;
		display: flex !important;
		align-items: center !important;
		justify-content: center !important;
	}

	:global(#slidy .arrow-left:hover),
	:global(#slidy .arrow-right:hover),
	:global(#slidy .dots-arrow-left:hover button),
	:global(#slidy .dots-arrow-right:hover button) {
		background-color: rgba(255, 255, 255, 0.15) !important;
		opacity: 1;
	}
</style>
