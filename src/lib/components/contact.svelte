<script lang="ts">
	import ContactForm from './contact/ContactForm.svelte';
</script>

<div class="m-auto mt-24 h-full min-h-screen w-5/6 overflow-hidden bg-primary md:w-2/3">
	<div class="m-auto flex h-full w-full flex-col rounded-lg bg-secondary">
		<h1 class="mx-12 flex py-6 font-mono text-4xl">Contact Me</h1>
		<h3 class="mx-12 flex px-2 text-xl">Please feel free to contact me!</h3>
		<ContactForm />
	</div>
</div>
