<script lang="ts">
	import profile_animated from '$lib/assets/profile_animated.png';
	import profile_pic from '$lib/assets/profile.png';
	import { setProgrammaticScroll } from '$lib/utils';

	const scrollToProjects = (e: MouseEvent) => {
		history.pushState(null, '', '#resume');
		const targetElement = document.getElementById('resume');

		if (targetElement) {
			requestAnimationFrame(() => {
				window.scroll({
					top: targetElement.getBoundingClientRect().top + window.scrollY,
					behavior: 'smooth'
				});
			});
		}
	};

	const handleClick = (e: MouseEvent) => {
		e.preventDefault();
		const targetElement = document.getElementById('projects');
		const navElement = document.getElementById('nav');

		if (targetElement) {
			setProgrammaticScroll(true);

			let offset = 0;
			if (navElement) {
				const navRef = navElement.querySelector('nav');
				if (navRef) {
					offset = navRef.clientHeight;
				}
			}

			history.pushState(null, '', '#projects');

			requestAnimationFrame(() => {
				const top = targetElement.offsetTop - offset;
				window.scrollTo({
					top: top,
					behavior: 'smooth'
				});
			});
		}
	};
</script>

<div class="flow-root h-full w-full bg-primary pb-24">
	<div class="m-auto mt-20 h-56 w-56 sm:h-96 sm:w-96" id="flipProfile">
		<div class="perspective-100 group cursor-pointer">
			<div class="preserve-3d relative transition-transform duration-500 group-hover:rotate-y-180">
				<div class="absolute inset-0 object-cover backface-hidden">
					<img src={profile_animated} alt="Animated profile" class="w-full" />
				</div>
				<div class="absolute inset-0 rotate-y-180 backface-hidden">
					<img src={profile_pic} alt="Static profile" class="w-full" />
				</div>
			</div>
		</div>
	</div>
	<div class="mx-4 mt-24 h-full bg-primary sm:mt-16">
		<p class="text-center font-mono text-sm sm:text-lg md:text-xl lg:text-2xl">
			Hello World! <br />
			I'm Brian.<br />
			I'm an enthusiastic developer and an engineer<br />
		</p>
	</div>
	<div class="absolute bottom-0 h-1/6 w-full">
		<section class="scroll-arrow absolute bottom-24 left-1/2 flex flex-col">
			<!--<a href="#projects" on:click|preventDefault={scrollToProjects} class="cursor-pointer">
				<span></span>
				<span></span>
				<span></span>
			</a>-->
			<a href="#projects" onclick={handleClick} class="flex flex-col items-center"> here </a>
		</section>
	</div>
</div>
