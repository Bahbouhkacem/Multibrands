<template>
    <section id="brands" class="relative flex items-center h-screen bg-center bg-cover">
        <div class="blurred-bg"></div>
        <div class="container relative z-10 px-2 mx-auto">
            <h2
                class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#a1754c] text-center p-10 sm:p-12 sm:m-12 lg:p-20 cursor-pointer">
                Our Brands
            </h2>
            <div class="brands-slider">
                <div v-for="(item, index) in sliderItems" :key="index" :style="{ animationDelay: `${index * 0.5}s` }"
                    class="brand-image">
                    <img :src="item.image" :alt="'Brand Image ' + (index + 1)" class="rounded-lg shadow-md">
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
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
    flex-wrap: wrap;
}

.brand-image {
    min-width: 200px;
    transition: opacity 1s ease;
    opacity: 0;
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

@media (max-width: 640px) {
    .brands-slider {
        justify-content: space-between;
    }

    .brand-image {
        width: 48%;
        /* Show two items per row */
        margin-bottom: 10px;
        /* Space between rows */
    }
}

/* Optional: Smooth transition for the color change */
#brand-logo {
    transition: color 0.7s ease;
}

#brand-logo:hover {
    color: #2254ce;
}
</style>
