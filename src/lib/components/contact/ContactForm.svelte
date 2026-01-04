<script lang="ts">
	let formElement: HTMLFormElement;
	let isSubmitting = false;

	const sendEmail = async (e: SubmitEvent) => {
		e.preventDefault();

		if (isSubmitting) return;

		isSubmitting = true;

		const formData = new FormData(formElement);
		const name = formData.get('user_name') as string;
		const email = formData.get('user_email') as string;
		const subject = formData.get('subject') as string;
		const message = formData.get('message') as string;

		try {
			const response = await fetch('/api/email', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ name, email, subject, message })
			});

			const data = await response.json();

			if (response.ok) {
				alert('Email sent! Thank you!');
				formElement.reset();
			} else {
				alert(
					data.message ||
						'Something went wrong.\n Please send me an email directly at bischo91@gmail.com'
				);
			}
		} catch (error) {
			console.error(error);
			alert('Something went wrong.\n Please send me an email directly at bischo91@gmail.com');
		} finally {
			isSubmitting = false;
		}
	};
</script>

<form bind:this={formElement} on:submit={sendEmail} class="mx-2 mb-12">
	<input
		type="text"
		name="user_name"
		placeholder="Name"
		required
		class="my-4 flex w-full rounded-lg bg-white px-3 py-2 text-primary"
		disabled={isSubmitting}
	/>
	<input
		type="email"
		name="user_email"
		placeholder="Email"
		required
		class="my-4 flex w-full rounded-lg bg-white px-3 py-2 text-primary"
		disabled={isSubmitting}
	/>
	<input
		type="text"
		name="subject"
		placeholder="Subject"
		required
		class="my-4 flex w-full rounded-lg bg-white px-3 py-2 text-primary"
		disabled={isSubmitting}
	/>
	<textarea
		name="message"
		placeholder="Message"
		required
		class="my-4 flex h-64 w-full rounded-lg bg-white px-3 py-2 text-primary"
		disabled={isSubmitting}
	></textarea>
	<button
		type="submit"
		class="float-right mt-4 flex cursor-pointer rounded-lg bg-secondary px-4 py-2 font-bold text-white"
		disabled={isSubmitting}
	>
		{isSubmitting ? 'Sending...' : 'Send'}
	</button>
</form>
