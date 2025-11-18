## ----------------- First create the project in vite

npm create vite@latest my-project

## ---------------- 2nd selct the language in it ( typescript )

## ----------------- importand

cd my-project

## ---------------- then install tailwindcss 

npm install tailwindcss @tailwindcss/vite

# ------------------------ Configure the Vite plugin in vite.config.ts

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
## import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
##    tailwindcss()
  ],
})

## -------------------- import in index.css

@import "tailwindcss";

## --------------------- run then test

npm run dev