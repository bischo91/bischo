import { goto } from '$app/navigation';

let isProgrammaticScroll = false;
let scrollTimeout: ReturnType<typeof setTimeout> | null = null;

export const scrollHash = (node: Element) => {
	const observer = new IntersectionObserver((entries) => {
		if (isProgrammaticScroll) {
			return;
		}
		const entry = entries.find((entry) => entry.isIntersecting);
		if (entry) {
			const id = entry.target.id;
			goto(`#${id}`, { replaceState: true, noScroll: true });
		}
	});
	observer.observe(node);

	return { destroy: () => observer.disconnect() };
};

export const setProgrammaticScroll = (value: boolean) => {
	isProgrammaticScroll = value;
	if (value) {
		if (scrollTimeout) {
			clearTimeout(scrollTimeout);
		}
		scrollTimeout = setTimeout(() => {
			isProgrammaticScroll = false;
		}, 2000);
	} else {
		if (scrollTimeout) {
			clearTimeout(scrollTimeout);
			scrollTimeout = null;
		}
	}
};

export const getProgrammaticScroll = (): boolean => {
	return isProgrammaticScroll;
};
