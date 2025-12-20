<script lang="ts">
	import { onMount } from 'svelte';
	import { About, Navigation } from '$lib/components';
	import { Projects } from '$lib/components/projects/';
	import Resume from '$lib/components/resume.svelte';
	import Contact from '$lib/components/contact.svelte';

	//  let scrollArrow; // Used to reference the DOM element (like React.createRef())
	//  ; // Used to reference the flip profile element
	// State to control the flip class
	let currentHash = '';
	// Function to toggle the 'flip' class

	// The Svelte way to handle component lifecycle effects (like componentDidMount)

	onMount(() => {
		document.title = 'Brian Cho';
	});

	// Placeholder for the smooth scrolling Link functionality.
	// In a real Svelte project, you'd use a Svelte library or manually implement the scroll logic.
	//  const scrollToProjects = () => {
	//      // Example of manual smooth scroll (requires a target element with id="projects")
	//      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
	//      // You would also implement the onSetActive logic here if needed.
	//  }
</script>

<Navigation />
<About />
<Projects />
<Resume />
<Contact />
