/// <reference types="vitest" />
import * as path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: [{ find: '@', replacement: path.resolve(__dirname, '/src') }],
	},
	plugins: [react()],
	root: 'src',
	build: {
		outDir: '../dist',
	},
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: ['../__test__/setup.ts'],
		include: ['**/*(*.)?{test,spec}.{js,ts,jsx,tsx}'],
		exclude: ['node_modules', 'dist', '.idea', '.git', '.cache'],
	},
});
