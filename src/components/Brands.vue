<template>
    <section id="brands" class="relative flex items-center h-screen bg-center bg-cover">
        <div class="blurred-bg"></div>
        <div class="container relative z-10 px-2 mx-auto">
            <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#a1754c] text-center p-10 sm:p-12 sm:m-12 lg:p-20 cursor-pointer"
                @click="toggleBrands">
                Our Brands
            </h2>
            <div v-if="showingBrands" class="brands-slider">
                <div v-for="(item, index) in sliderItems" :key="index" :style="{ animationDelay: `${index * 0.5}s` }"
                    class="brand-image">
                    <img :src="item.image" :alt="'Brand Image ' + (index + 1)" class="rounded-lg shadow-md">
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onUnmounted } from 'vue';
import b1 from '../assets/bugatti1.png';
import b2 from '../assets/versacelogo.jpg';
import b3 from '../assets/jc1.png';
import b4 from '../assets/kll1.png';
import b5 from '../assets/mkk.png';
import b6 from '../assets/h&b111.png';

// Data for slider items
const sliderItems = [
    { image: b1 },
    { image: b2 },
    { image: b3 },
    { image: b4 },
    { image: b5 },
    { image: b6 }
];

const showingBrands = ref(false);
let sliderInterval = null;

const toggleBrands = () => {
    showingBrands.value = !showingBrands.value;
    if (showingBrands.value) {
        startSlider();
    } else {
        stopSlider();
    }
};

const startSlider = () => {
    sliderInterval = setInterval(() => {
        const slider = document.querySelector('.brands-slider');
        slider.scrollBy({ left: slider.offsetWidth, behavior: 'smooth' });
    }, 3000); // Adjust the interval for slider speed
};

const stopSlider = () => {
    if (sliderInterval) {
        clearInterval(sliderInterval);
    }
};

onUnmounted(() => {
    stopSlider();
});
</script>

<style scoped>
#brands {
    position: relative;
    background: none;
}

.blurred-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('../assets/BGBLACK.jpg');
    background-size: cover;
    background-position: center;
    filter: blur(15px);
    z-index: -1;
}

.brands-slider {
    display: flex;
    overflow: hidden;
    scroll-behavior: smooth;
    width: 100%;
    /* Ensure full width for the slider */
}

.brand-image {
    min-width: 200px;
    /* Adjust this value based on your design */
    transition: opacity 1s ease;
    opacity: 0;
    /* Initially hide images */
}

.brand-image img {
    width: 100%;
}

@keyframes fadeIn {
    to {
        opacity: 1;
    }
}

.brand-image {
    animation: fadeIn 1s forwards;
}
#brand-logo {
    position: relative;
    display: inline-block;
    overflow: hidden;
    transition: transform 0.3s ease, color 0.3s ease;
}

#brand-logo::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 100%;
    background-color: fuchsia;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
}

#brand-logo.animate::after {
    transform: translateX(0);
}

/* Optional: Smooth transition for the color change */
#brand-logo {
    transition: color 0.7s ease;
}

#brand-logo:hover {
    color: #2254ce;
}

#brand-logo.scale-up {
    transform: scale(1.0);
    /* Scale up effect */
    color: #570d0d;
    /* Optional: change color on click */
}

/* Add to your styles.css */

/* Ensure each flip item takes up full width */
.slider-item {
    flex: 0 0 100%;
    /* Full width for each item */
    box-sizing: border-box;
}

/* Hide overflow on the slider container */
.slider-container {
    overflow: hidden;
    /* Hide anything that goes beyond the slider container */
    position: relative;
}



/* Font Awesome Icons */
.fab {
    font-family: 'Font Awesome 5 Brands';
}
</style>
