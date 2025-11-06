import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import type { PluginOption } from 'vite';
import { defineConfig, loadEnv } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  
  dotenv.config();

  const envVariables: Record<string, string> = {};
  for (const key in env) {
    if (key.startsWith('VITE_')) {
      envVariables[`process.env.${key}`] = JSON.stringify(env[key] as string);
    }
  }

  return {
    plugins: [
      react(),
      tailwindcss(),
    ] as PluginOption[],
    
    define: {
      envVariables,
      _APP_VERSION_: JSON.stringify('1.0.0'),
    },
    
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    
    // Build optimizations
    build: {
      // Modern target for smaller bundle
      target: 'esnext',
      
      // Minification with esbuild (faster, included by default in Vite)
      minify: 'esbuild',
      
      // Chunk configuration for better caching
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            // Separate node_modules into vendor chunks
            if (id.includes('node_modules')) {
              // React core
              if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
                return 'vendor-react';
              }
              // Three.js and related
              if (id.includes('three') || id.includes('@react-three')) {
                return 'vendor-three';
              }
              // Framer Motion
              if (id.includes('framer-motion')) {
                return 'vendor-motion';
              }
              // Firebase
              if (id.includes('firebase') || id.includes('@firebase')) {
                return 'vendor-firebase';
              }
              // Other vendors
              return 'vendor';
            }
          },
          // File names with hash for cache busting
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: (assetInfo) => {
            const info = assetInfo.name?.split('.') || [];
            const ext = info[info.length - 1];
            
            if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(ext)) {
              return `assets/images/[name]-[hash][extname]`;
            }
            if (/woff2?|ttf|otf|eot/i.test(ext)) {
              return `assets/fonts/[name]-[hash][extname]`;
            }
            if (/css/i.test(ext)) {
              return `assets/css/[name]-[hash][extname]`;
            }
            return `assets/[ext]/[name]-[hash][extname]`;
          },
        },
      },
      
      // Chunk size warning limit (increased due to Three.js)
      chunkSizeWarningLimit: 1000,
      
      // Source maps only in development
      sourcemap: mode !== 'production',
      
      // Report compressed size
      reportCompressedSize: true,
      
      // CSS code splitting
      cssCodeSplit: true,
    },
    
    // Dependency optimizations
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'react-router-dom',
        'framer-motion',
        '@react-three/fiber',
        '@react-three/drei',
      ],
      exclude: ['firebase'],
    },
    
    // Preview server (for local build testing)
    preview: {
      port: 4173,
      strictPort: true,
      host: true,
    },
    
    // Dev server
    server: {
      port: 5173,
      strictPort: true,
      host: true,
    },
  };
});