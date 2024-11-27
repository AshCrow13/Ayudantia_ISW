import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  pluggins: [react()], // Add the react plugin
  resolve:{
    alias: {
      '@components': path.resolve(__dirname, 'src/components'), // Add the alias for the components directory
      '@pages': path.resolve(__dirname, 'src/pages'), // Add the alias for the pages directory
      '@services': path.resolve(__dirname, 'src/services'), // Add the alias for the services directory
      '@styles': path.resolve(__dirname, 'src/styles'), // Add the alias for the styles directory
      '@assets': path.resolve(__dirname, 'src/assets') // Add the alias for the assets directory
    }
  }
});