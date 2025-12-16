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

<div class="bg-primary h-full min-h-screen w-full overflow-hidden" id="about">
	<div class="m-auto mt-20 h-56 w-56 sm:h-96 sm:w-96 {flipClass}" id="flipProfile">
		<div class="flip-content">
			<div class="flip-front">
				<img src={profile_animated} alt="Animated profile" class="w-full" />
			</div>
			<div class="flip-back">
				<img src={profile_pic} alt="Static profile" class="w-full" />
			</div>
		</div>
	</div>
	<div class="bg-primary mx-4 mt-24 h-full sm:mt-16">
		<p class="text-primary text-center font-mono text-sm sm:text-lg md:text-xl lg:text-2xl">
			Hello World! <br />
			I'm Brian.<br />
			I'm an enthusiastic developer and an engineer<br />
		</p>
	</div>
	<div class="absolute bottom-0 h-1/6 w-full">
		<!--bind:this={scrollArrow}-->
		<section class="scroll-arrow absolute bottom-24 left-1/2 flex flex-col">
			<!--<a href="#projects" on:click|preventDefault={scrollToProjects} class="cursor-pointer">
				<span></span>
				<span></span>
				<span></span>
			</a>-->
		</section>
	</div>
</div>
