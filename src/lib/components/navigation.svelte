<script lang="ts">
	import { onMount } from 'svelte';
	import { setProgrammaticScroll, getProgrammaticScroll } from '$lib/utils';
	import githubLogo from '$lib/assets/github.png';
	import linkedinLogo from '$lib/assets/linkedin.png';
	let showNav: boolean;
	let currentHash = '';
	let navRef: HTMLElement | undefined;

	const getScrollOffset = (targetId: string): number => {
		if (targetId === 'about') {
			return 0;
		}

		if (!navRef) return 0;

		const navStyles = window.getComputedStyle(navRef);
		const isFixed = navStyles.position === 'fixed';

		if (isFixed) {
			return navRef.clientHeight;
		}

		const aboutSection = document.getElementById('about');
		const targetSection = document.getElementById(targetId);
		if (aboutSection && targetSection) {
			const aboutBottom = aboutSection.offsetTop + aboutSection.clientHeight;
			const targetTop = targetSection.offsetTop;
			if (targetTop > aboutBottom) {
				return navRef.clientHeight;
			}
		}

		return 0;
	};

	const scrollToSection = (id: string, useOffset: boolean = true) => {
		const targetElement = document.getElementById(id);

		if (targetElement) {
			showNav = id !== 'about';
			setProgrammaticScroll(true);
			requestAnimationFrame(() => {
				const offset = useOffset ? getScrollOffset(id) : 0;
				const top = targetElement.offsetTop - offset;

				window.scrollTo({
					top: Math.max(0, top),
					behavior: 'smooth'
				});
			});
			history.pushState(null, '', `#${id}`);
			currentHash = `#${id}`;
		}
	};

	const handleScroll = () => {
		if (getProgrammaticScroll()) {
			return;
		}
		const winScroll = window.scrollY || document.documentElement.scrollTop;
		const aboutSection = document.getElementById('about');
		const projectsSection = document.getElementById('projects');
		const resumeSection = document.getElementById('resume');
		const contactSection = document.getElementById('contact');

		if (!aboutSection || !projectsSection || !resumeSection || !contactSection || !navRef) {
			return;
		}

		const navHeight = navRef.clientHeight;
		const navStyles = window.getComputedStyle(navRef);
		const isNavFixed = navStyles.position === 'fixed';
		const viewportOffset = isNavFixed ? navHeight : 0;

		const sections = [
			{ id: 'contact', element: contactSection },
			{ id: 'resume', element: resumeSection },
			{ id: 'projects', element: projectsSection },
			{ id: 'about', element: aboutSection }
		];

		let activeSection = 'about';

		for (const section of sections) {
			const rect = section.element.getBoundingClientRect();
			if (rect.top <= viewportOffset + 100) {
				activeSection = section.id;
				break;
			}
		}

		if (winScroll < 50) {
			activeSection = 'about';
		}

		showNav = activeSection !== 'about';

		const newHash = `#${activeSection}`;
		if (newHash !== currentHash && newHash !== window.location.hash) {
			history.pushState(null, '', newHash);
			currentHash = newHash;
		}
	};

	const handlePopState = () => {
		currentHash = window.location.hash;
		const id = currentHash.replace('#', '');
		if (id) scrollToSection(id, true);
	};

	onMount(() => {
		currentHash = window.location.hash || '#about';

		const initialId = currentHash.replace('#', '');
		showNav = initialId !== 'about';

		window.addEventListener('scroll', handleScroll);
		handlePopState();
		handleScroll();

		if (currentHash && currentHash !== '#about') {
			const id = currentHash.replace('#', '');
			setTimeout(() => {
				scrollToSection(id, true);
			}, 100);
		}

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<div class="flex w-screen h-full">
	<nav
		class={`${showNav ? 'fixed top-0' : 'absolute'} z-50 my-auto inline-flex h-16 w-screen items-center justify-between space-x-4 bg-secondary py-5`}
		onscroll={handleScroll}
		bind:this={navRef}
	>
		<div class="inline-flex justify-around w-5/6">
			<a href="#about" onclick={() => scrollToSection('about')} class="md:text-xl">Brian Cho</a>
			<a href="#projects" onclick={() => scrollToSection('projects')} class="md:text-xl">Projects</a
			>
			<a href="#resume" onclick={() => scrollToSection('resume')} class="md:text-xl"> Resume </a>
			<a href="#contact" onclick={() => scrollToSection('contact')} class="md:text-xl"> Contact </a>
		</div>
		<div class="inline-flex items-center justify-end w-1/6 space-x-2">
			<a
				href="https://www.linkedin.com/in/bischo"
				target="_blank"
				rel="noopener noreferrer"
				class="h-full cursor-pointer"
				><img
					src={linkedinLogo}
					alt="LinkedIn"
					class="object-contain object-scale-down w-auto h-8"
				/></a
			>
			<a
				href="https://github.com/bischo91"
				target="_blank"
				rel="noopener noreferrer"
				class="h-full cursor-pointer"
				><img
					src={githubLogo}
					alt="GitHub"
					class="object-contain object-scale-down w-auto h-8"
				/></a
			>
		</div>
	</nav>
</div>
