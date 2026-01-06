import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	build: {
		rollupOptions: {
			output: {
				assetFileNames: (assetInfo) => {
					const name = assetInfo.name || '';
					// Keep original names for videos (large files, rarely change, better caching)
					if (name.endsWith('.mp4')) {
						return 'assets/[name][extname]';
					}
					// Use hashed names for images (smaller files, change more often, cache busting)
					// If you experience image loading issues, you can add image extensions here too:
					// if (name.match(/\.(png|jpg|jpeg|gif|webp|svg)$/i)) {
					//   return 'assets/[name][extname]';
					// }
					return 'assets/[name]-[hash][extname]';
				}
			}
		}
	}
});
