<script lang="ts">
	import { onMount } from 'svelte';

	let messages: Array<{ role: 'user' | 'model'; content: string }> = [];
	let inputMessage = '';
	let isLoading = false;
	let chatContainer: HTMLDivElement;
	let isInitialized = false;

	const renderMarkdown = (text: string): string => {
		if (!text) return '';

		const escapeHtml = (str: string) => {
			const map: Record<string, string> = {
				'&': '&amp;',
				'<': '&lt;',
				'>': '&gt;',
				'"': '&quot;',
				"'": '&#039;'
			};
			return str.replace(/[&<>"']/g, (m) => map[m]);
		};

		const codeBlocks: string[] = [];
		const inlineCodes: string[] = [];

		let html = text
			.replace(/```([\s\S]*?)```/g, (match, code) => {
				const placeholder = `__CODE_BLOCK_${codeBlocks.length}__`;
				codeBlocks.push(code.trim());
				return placeholder;
			})
			.replace(/`([^`\n]+)`/g, (match, code) => {
				const placeholder = `__INLINE_CODE_${inlineCodes.length}__`;
				inlineCodes.push(code);
				return placeholder;
			});

		html = escapeHtml(html);

		codeBlocks.forEach((code, index) => {
			html = html.replace(
				`__CODE_BLOCK_${index}__`,
				`<pre class="p-2 my-2 overflow-x-auto bg-gray-800 rounded"><code class="font-mono text-xs">${code}</code></pre>`
			);
		});

		inlineCodes.forEach((code, index) => {
			html = html.replace(
				`__INLINE_CODE_${index}__`,
				`<code class="bg-gray-800 rounded px-1 py-0.5 text-sm font-mono">${code}</code>`
			);
		});

		html = html.replace(/\*\*([^*]+?)\*\*/g, '<strong>$1</strong>');
		html = html.replace(/__([^_]+?)__/g, '<strong>$1</strong>');

		html = html.replace(/\*([^*\n]+?)\*/g, '<em>$1</em>');
		html = html.replace(/_([^_\n]+?)_/g, '<em>$1</em>');
		html = html.replace(/\*([^*\n]+?)/g, '<span>-$1</span>');

		html = html.replace(/\n/g, '<br>');

		return html;
	};

	onMount(() => {
		messages = [
			{
				role: 'model',
				content:
					'Hello! I am Brian Cho, an enthusiastic developer and an engineer. How can I help you learn more about Brian?'
			}
		];
		isInitialized = true;
	});

	const sendMessage = async () => {
		if (!inputMessage.trim() || isLoading) return;

		const userMessage = inputMessage.trim();
		inputMessage = '';
		messages = [...messages, { role: 'user', content: userMessage }];
		isLoading = true;

		try {
			const response = await fetch('/api/gemini', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					message: userMessage,
					conversationHistory: messages.slice(0, -1) // Exclude the current user message
				})
			});

			if (!response.ok) {
				const error = await response.json();
				if (response.status === 429) {
					throw new Error(
						error.message || error.error || 'Rate limit exceeded. Please try again later.'
					);
				}
				throw new Error(error.error || 'Failed to get response');
			}

			const data = await response.json();
			messages = [...messages, { role: 'model', content: data.response }];
		} catch (error) {
			console.error('Error sending message:', error);
			messages = [
				...messages,
				{
					role: 'model',
					content:
						error instanceof Error
							? error.message
							: 'Sorry, I encountered an error. Please try again later.'
				}
			];
		} finally {
			isLoading = false;
			// Scroll to bottom
			setTimeout(() => {
				if (chatContainer) {
					chatContainer.scrollTop = chatContainer.scrollHeight;
				}
			}, 100);
		}
	};

	const handleKeyPress = (e: KeyboardEvent) => {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			sendMessage();
		}
	};
</script>

<div class="mx-auto mt-2 w-full max-w-3xl rounded-lg bg-primary p-6">
	{#if isInitialized}
		<div bind:this={chatContainer} class="mb-4 h-[30vh] overflow-y-auto rounded-lg bg-primary p-4">
			{#each messages as message}
				<div class="mb-4 {message.role === 'user' ? 'text-right' : 'text-left'}">
					<div
						class="inline-block max-w-[80%] rounded-lg px-4 py-2 {message.role === 'user'
							? 'bg-blue-600 text-white'
							: 'bg-gray-700 text-gray-100'}"
					>
						{#if message.role === 'model'}
							<div class="markdown-content text-sm">
								{@html renderMarkdown(message.content)}
							</div>
						{:else}
							<p class="text-sm whitespace-pre-wrap">{message.content}</p>
						{/if}
					</div>
				</div>
			{/each}
			{#if isLoading}
				<div class="text-left">
					<div class="inline-block rounded-lg bg-gray-700 px-4 py-2">
						<div class="flex gap-1">
							<div class="h-2 w-2 animate-bounce rounded-full bg-gray-400"></div>
							<div
								class="h-2 w-2 animate-bounce rounded-full bg-gray-400"
								style="animation-delay: 0.1s"
							></div>
							<div
								class="h-2 w-2 animate-bounce rounded-full bg-gray-400"
								style="animation-delay: 0.2s"
							></div>
						</div>
					</div>
				</div>
			{/if}
		</div>

		<div class="flex gap-2">
			<textarea
				bind:value={inputMessage}
				onkeypress={handleKeyPress}
				placeholder="Type your message..."
				disabled={isLoading}
				class="flex-1 resize-none rounded-lg bg-white px-4 py-2 text-primary"
				rows="2"
			></textarea>
			<button
				onclick={sendMessage}
				disabled={isLoading || !inputMessage.trim()}
				class="flex items-center rounded-lg bg-secondary px-4 py-2 font-bold text-white"
			>
				Send
			</button>
		</div>
	{/if}
</div>

<style>
	@keyframes bounce {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-10px);
		}
	}

	.animate-bounce {
		animation: bounce 1s infinite;
	}

	:global(.markdown-content) {
		line-height: 1.6;
	}

	:global(.markdown-content strong) {
		font-weight: 700;
		color: inherit;
	}

	:global(.markdown-content em) {
		font-style: italic;
		color: inherit;
	}

	:global(.markdown-content code) {
		font-family: 'Courier New', Courier, monospace;
	}

	:global(.markdown-content pre) {
		margin: 0.5rem 0;
	}

	:global(.markdown-content pre code) {
		display: block;
		padding: 0.5rem;
	}
</style>
