import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		// alias : 파일 경로에 별칭을 지정, 현재 @ = './src'로 지정되어 있음
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
});
