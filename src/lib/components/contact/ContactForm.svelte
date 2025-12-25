<script lang="ts">
	import { onMount } from 'svelte';
	import emailjs from '@emailjs/browser';

	const EMAILJS_USER_ID = 'user_G450MAckYglOAjutsXnzC';
	const EMAILJS_SERVICE_ID = 'service_bischo';
	const EMAILJS_TEMPLATE_ID = 'template_bischo';

	let formElement: HTMLFormElement;
	let isSubmitting = false;

	onMount(() => {
		emailjs.init(EMAILJS_USER_ID);
	});

	const sendEmail = async (e: SubmitEvent) => {
		e.preventDefault();

		if (isSubmitting) return;

		isSubmitting = true;

		try {
			await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formElement, EMAILJS_USER_ID);
			alert('Email sent! Thank you!');
			formElement.reset();
		} catch (error) {
			alert('Something went wrong.\n Please send me an email directly at bischo91@gmail.com');
		} finally {
			isSubmitting = false;
		}
	};
</script>

<form bind:this={formElement} on:submit={sendEmail} class="mb-12 mx-14">
	<input
		type="text"
		name="user_name"
		placeholder="Name"
		required
		class="flex w-full px-3 py-2 my-4 bg-white rounded-lg text-primary"
		disabled={isSubmitting}
	/>
	<input
		type="email"
		name="user_email"
		placeholder="Email"
		required
		class="flex w-full px-3 py-2 my-4 bg-white rounded-lg text-primary"
		disabled={isSubmitting}
	/>
	<input
		type="text"
		name="subject"
		placeholder="Subject"
		required
		class="flex w-full px-3 py-2 my-4 bg-white rounded-lg text-primary"
		disabled={isSubmitting}
	/>
	<textarea
		name="message"
		placeholder="Message"
		required
		class="flex w-full h-64 px-3 py-2 my-4 bg-white rounded-lg text-primary"
		disabled={isSubmitting}
	></textarea>
	<button
		type="submit"
		class="flex float-right px-4 py-2 mt-4 font-bold text-white rounded-lg bg-primary"
		disabled={isSubmitting}
	>
		{isSubmitting ? 'Sending...' : 'Send'}
	</button>
</form>
