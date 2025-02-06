import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://nannys-cmd.github.io/wtics/', // Cambia 'wtics' por el nombre de tu repositorio
});
