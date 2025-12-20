<script lang="ts">
	import profile_animated from '$lib/assets/profile_animated.png';
	import profile_pic from '$lib/assets/profile.png';
	let flipClass = 'flip';
	let flipProfile;
	const toggleFlip = () => {
		if (flipProfile) {
			// Toggle the flip class by checking and replacing the class attribute content.
			// Svelte recommends using a boolean reactive statement for classes, but we'll stick closer to the React logic here for demonstration.
			// In a more Svelte-idiomatic way, you'd use: class:flip={isFlipped}
			// For now, we'll use a local state variable:
			flipClass = flipClass === 'flip' ? '' : 'flip';
		}
	};
</script>

<div
	class="m-auto mt-24 h-full min-h-screen w-5/6 overflow-hidden bg-primary md:w-2/3"
	id="contact"
>
	<div class="m-auto flex h-full w-full flex-col rounded-lg bg-secondary">
		<h1 class="mx-12 flex py-6 font-mono text-4xl">Contact Me</h1>
		<h3 class="mx-12 flex px-2 text-xl">Please feel free to contact me!</h3>
		<!--<ContactForm />-->
		Contact Form
	</div>
</div>
