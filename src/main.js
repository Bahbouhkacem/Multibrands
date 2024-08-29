import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Lenis from '@studio-freight/lenis';
const app = createApp(App);

// Initialize Lenis
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // example easing function
  smooth: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
createApp(App).mount('#app')
