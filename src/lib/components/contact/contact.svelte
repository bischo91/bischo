<script lang="ts">
	import ContactForm from './ContactForm.svelte';
</script>

<div class="w-full h-full min-h-screen mb-24 bg-primary">
	<div class="max-w-full px-4 mx-auto sm:w-5/6 md:w-3/4 lg:w-2/3">
		<div class="flex flex-col w-full h-full m-auto rounded-lg">
			<h1 class="flex py-6 text-4xl">Contact Me</h1>
			<h3 class="flex px-2 text-xl">Please feel free to contact me!</h3>
			<ContactForm />
		</div>
	</div>
</div>
