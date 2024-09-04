<template>
    <section id="store" class="relative flex items-center h-screen bg-center bg-cover">
        <div class="blurred-bg"></div>
        <div class="container relative z-10 px-8 mx-auto">
            <h2
                class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#a1754c] text-center pb-20 sm:p-12 sm:m-12 lg:p-20">
                Our Store
            </h2>
            <div class="relative pb-4 mb-4 -mt-20 slider-container ">
                <div class="flex transition-transform duration-700 ease-in-out slider" ref="slider">
                    <div class="flex-shrink-0 w-full px-0 slider-item md:flex" v-for="(item, index) in sliderItems"
                        :key="index">
                        <div class="md:w-1/2">
                            <img :src="item.image1" alt="Slide Image 1" class="w-full h-auto rounded-lg shadow-md">
                        </div>
                        <div class="md:w-1/2">
                            <img :src="item.image2" alt="Slide Image 2" class="w-full h-auto rounded-lg shadow-md">
                        </div>
                    </div>
                </div>

                <!-- Navigation Buttons -->
                <button @click="prevSlide"
                    class="absolute left-0 p-2 text-white transform -translate-y-1/2 bg-gray-800 rounded-full top-1/2 hover:bg-gray-600">
                    &#10094;
                </button>
                <button @click="nextSlide"
                    class="absolute right-0 p-2 text-white transform -translate-y-1/2 bg-gray-800 rounded-full top-1/2 hover:bg-gray-600">
                    &#10095;
                </button>
            </div>
        </div>
    </section>
</template>

<script setup>
import b1 from '../assets/store1.jpg'
import b2 from '../assets/store2.jpg'
import b3 from '../assets/store3.jpg'
import b4 from '../assets/store4.jpg'
import b5 from '../assets/store5.jpg'
import b6 from '../assets/store6.jpg'
import b7 from '../assets/store7.jpg'
import b8 from '../assets/store8.jpg'
import b9 from '../assets/store9.jpg'

import { ref, onMounted, onUnmounted } from 'vue';

const sliderItems = [
    { image1: b1, image2: b2 },
    { image1: b3, image2: b4 },
    { image1: b5, image2: b6 },
    { image1: b7, image2: b8 },
    { image1: b9, image2: b1 }
];

const slider = ref(null);
const currentIndex = ref(0);

const updateSliderPosition = () => {
    if (slider.value) {
        const translateX = -currentIndex.value * 100;
        slider.value.style.transform = `translateX(${translateX}%)`;
    }
};

const prevSlide = () => {
    currentIndex.value = (currentIndex.value > 0) ? currentIndex.value - 1 : sliderItems.length - 1;
    updateSliderPosition();
};

const nextSlide = () => {
    currentIndex.value = (currentIndex.value < sliderItems.length - 1) ? currentIndex.value + 1 : 0;
    updateSliderPosition();
};

onMounted(() => {
    updateSliderPosition(); // Initialize position
    const interval = setInterval(nextSlide, 3000); // Automatic slide every 3 seconds

    onUnmounted(() => {
        clearInterval(interval); // Clear interval when component is unmounted
    });
});
</script>

<style scoped>
#store {
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
    filter: blur(10px);
    z-index: -1;
}

.slider-item {
    flex: 0 0 100%;
    box-sizing: border-box;
}

.slider-container {
    overflow: hidden;
    position: relative;
}
</style>
