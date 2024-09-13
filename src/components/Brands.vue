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
import b1 from '../assets/bugatti2.png';
import b2 from '../assets/versacelogo.jpg';
import b3 from '../assets/jc2.jpg';
import b4 from '../assets/kll2.jpg';
import b5 from '../assets/mkk.png';
import b6 from '../assets/HB14.jpg';

// Data for slider items
const sliderItems = [
    { image: b1 },
    { image: b6 },
    { image: b3 },
    { image: b4 },
    { image: b5 },
    { image: b2 }
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
    flex-wrap: wrap;
    justify-content: center;
    /* Center items on larger screens */
    gap: 10px;
    /* Add space between items */
}

.brand-image {
    flex: 0 0 45%;
    /* Show two items per row on mobile */
    background-color: rgb(175, 103, 36);
    /* Light grey background */
    padding: 10px;
    /* Add some padding inside the item */
    border-radius: 10px;
    transition: opacity 1s ease;
    opacity: 0;
}

.brand-image img {
    width: 100%;
    height: auto;
    /* Maintain aspect ratio */
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

@keyframes fadeIn {
    to {
        opacity: 1;
    }
}

.brand-image {
    animation: fadeIn 1s forwards;
}

@media (min-width: 640px) {
    .brand-image {
        flex: 0 0 30%;
        /* Show three items per row on tablet and larger screens */
    }
}

@media (min-width: 1024px) {
    .brand-image {
        flex: 0 0 20%;
        /* Show five items per row on desktop screens */
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
