<script lang="ts">
	import profile_animated from '$lib/assets/profile_animated.png';
	import profile_pic from '$lib/assets/profile.png';
	import { setProgrammaticScroll } from '$lib/utils';
	import { ChevronDoubleDownOutline } from 'flowbite-svelte-icons';
	import GeminiChat from './gemini-chat.svelte';

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
	<div class="m-auto mt-12 h-64 w-64" id="flipProfile">
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
	<GeminiChat />
	<div class="absolute bottom-1/12 mx-auto w-full">
		<a href="#projects" onclick={handleClick} class="flex h-full items-center">
			<ChevronDoubleDownOutline class="mx-auto h-10 w-10 text-2xl text-white" />
		</a>
	</div>
</div>
