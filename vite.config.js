import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://github.com/Nannys-cmd/wtics.git', // Cambia 'wtics' por el nombre de tu repositorio
});
