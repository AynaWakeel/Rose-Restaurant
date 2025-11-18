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


## ----------------------- i have created a repo without readme file then 

git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/AynaWakeel/Rose-Restaurant.git
git push -u origin main

## ----------------------- how to create new branch and push code

git add .
git commit -m "Your commit message"
git push -u origin new-branch-name


## ---------------------- now pull code into main branch

git checkout main               # switch to main
git pull origin main            # make sure main is up to date
git merge new-branch-name       # merge your branch into main
git push origin main            # push the updated main to GitHub


# ------------- install react-router

npm i react-router
