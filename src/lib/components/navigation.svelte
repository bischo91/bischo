<script lang="ts">
	import { onMount } from 'svelte';

	// State to hold the current URL hash (e.g., '#about')
	let currentHash = '';
	let isNavFixed = false;
	let navRef;
	// Function to handle browser back/forward buttons (popstate)
	const scrollToSection = (id: string) => {
		const targetElement = document.getElementById(id);

		if (targetElement) {
			let offset = 0;
			if (navRef && isNavFixed) {
				// Offset by the height of the fixed navigation bar
				offset = navRef.clientHeight;
			}
			//targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
			window.scrollTo({
				top: targetElement.offsetTop - offset,
				behavior: 'smooth'
			});
			history.pushState(null, '', `#${id}`);
		}
		currentHash = `#${id}`;
	};
	const handleScroll = () => {
		const winScroll = document.documentElement.scrollTop;
		const aboutSection = document.getElementById('about');
		let aboutHeight = aboutSection ? aboutSection.clientHeight : 0;

		if (winScroll > aboutHeight) {
			isNavFixed = true;
		} else {
			isNavFixed = false;
		}
	};
	const handlePopState = () => {
		currentHash = window.location.hash;
		const id = currentHash.replace('#', '');
		const targetElement = document.getElementById(id);
		if (targetElement) {
			targetElement.scrollIntoView({ behavior: 'smooth' });
		}
	};

	onMount(() => {
		// Set initial hash
		currentHash = window.location.hash || '#about';

		// Set up scroll listener
		window.addEventListener('scroll', handleScroll);
		window.addEventListener('popstate', handlePopState);
		handleScroll(); // Check position immediately on mount
		if (currentHash) {
			const id = currentHash.replace('#', '');
			document.getElementById(id)?.scrollIntoView();
		}
		// Cleanup
		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('popstate', handlePopState);
		};
	});
	// Function to determine if a link should be styled as active
	//const getActiveClass = (id) => {
	//	return currentHash === `#${id}` ? 'active' : '';
	//};
</script>

<div class="">
	<nav
		class={`${isNavFixed ? 'fixed top-0' : 'absolute bottom-0'} z-50 w-screen transition-all duration-300`}
		on:scroll={handleScroll}
		bind:this={navRef}
	>
		<a href="#about" on:click|preventDefault={() => scrollToSection('about')}> Home </a>
		<a href="#projects" on:click|preventDefault={() => scrollToSection('projects')}> Projects </a>
		<a href="#resume" on:click|preventDefault={() => scrollToSection('resume')}> Resume </a>
		<a href="#contact" on:click|preventDefault={() => scrollToSection('contact')}> Contact </a>
	</nav>
</div>
