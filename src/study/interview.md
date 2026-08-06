
# Optimisation

Module Bundler - #Vite over Webpack
Inside -> polyfill, compression (minification, source map)
Code splitting, using CDN, Optimizing Images and Fonts

# Image Loading Optimisation

Dimension: minimum
Compression & image optimization
Webp or Avif
CDN caching 
Lazy load / load on scroll
specify width and height
srcSet - ship differebt images based on screen size

# Code Quality

Linting
Unit Tests / e2e tests
Dependency scan
a11y
Lighthouse || Sentry

# XSS attack
 
 - Sanitize inputs
 - Never render html/js from user
 - DangerouslySetInnerHTML

 # needs Relearn

 Object clone, deep clone,

# Performance optimization (FCP, LCP, CLS, etc.)

# Core Web Vitals:
FCP (First Contentful Paint) — time to first visible content.
LCP (Largest Contentful Paint) — time for the largest visible element to render; target <2.5s.
CLS (Cumulative Layout Shift) — visual stability; avoid unsized images/late-loading fonts/ads.
INP (Interaction to Next Paint, replaced FID) — responsiveness to input.

Optimization techniques: code-splitting/lazy-loading, image optimization (proper formats, srcset, dimensions to avoid CLS), preloading critical resources, reducing render-blocking CSS/JS, caching, CDN, server-side rendering/streaming, minimizing main-thread JS work, will-change/GPU-accelerated properties for animations.

# CORS, preflight, OPTIONS
Fetch API
Fetch Cross origin

# WebRTC & WebSocket

# Typescript
Interfaces vs Types
Generics
Utility Types

# Pay attention

Web Performance & Core Vitals 
Tooling (& FE productivity)
Deployment & Infrastructure
Web Security 
Frontend Architecture 

# State managment
Redux, Zustand, Context, tanstack query data fetch