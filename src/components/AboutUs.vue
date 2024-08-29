<template>
    <section id="about" class="relative flex flex-col items-center h-screen bg-center bg-cover">
        <div class="blurred-bg"></div>
        <div class="container z-10 mx-2 px-auto sm:px-6 lg:px-8">
            <h2
                class="text-3xl  sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#a1754c] text-center  pt-20  sm:p-12 sm:mx-4 lg:p-20">
                About us
            </h2>
            <div class="mx-auto slider-container sm:mt-8">
                <div class="flex transition-transform duration-700 ease-in-out slider" ref="slider">
                    <div class="flex flex-col flex-shrink-0 w-full px-0 slider-item sm:flex-row sm:w-full"
                        v-for="(item, index) in sliderItems" :key="index">
                        <div class="order-2 w-full p-4 sm:w-1/2 sm:order-1">
                            <p class="text-[#f0efed] mb-4 text-lg sm:text-xl lg:text-2xl font-serif" v-html="item.text">
                            </p>
                        </div>
                        <div class="order-1 w-full p-AUTO sm:w-1/2 sm:order-2">
                            <img :src="item.image" alt="About Us" class="w-full mb-0 rounded-lg shadow-md">
                        </div>
                    </div>
                </div>

                <!-- Navigation Buttons -->

            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Lenis from '@studio-freight/lenis';

// Import your images
import ab1 from '../assets/aboutus1.jpg';
/*  import ab2 from '../assets/VERSACE1.JPG';
import ab3 from '../assets/cavali.JPG';   */

const sliderItems = [
    {
        text: 'We have been working successfully in the field of Fashion since 2016.<br><br>Our commitment is to offer in the market the best selection of sportwear and formal apparel, giving the best service to our customers<br><br> We are an exclusive menswear store in Libya’s Eastern region.', image: ab1 },
  /*  { text: 'MULTIBRANDS specializes in high-value brands, including luxury names like Versace. <br><br> The company focuses on offering exclusive, premium fashion <br>and accessories <br><br> catering to discerning customers who seek top-tier quality and style.', image: ab2 },
    { text: 'MULTIBRANDS is a curator of luxury, showcasing the distinguished flair of Cavalli and Just Cavalli.<br>  <br> MULTIBRANDS brings these iconic brands to a clientele that values both exceptional quality and style, offering an exclusive range of fashion and accessories that make a statement in every detail.<br> <br> Discover the essence of elegance through the lens of Cavalli and Just Cavalli.', image: ab3 }
*/];
/*
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
*/
// Initialize Lenis on component mount
onMounted(() => {
    updateSliderPosition(); // Initialize slider position

    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
    });

    const animate = (time) => {
        lenis.raf(time);
        requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    // Clean up Lenis on component unmount
    onUnmounted(() => {
        cancelAnimationFrame(animate);
    });
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Quattrocento:wght@400;700&display=swap');

#about {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
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

h2 {
    font-family: 'Playfair Display', serif;
    /* Playfair Display for the "About us" heading */
}

p {
    font-family: 'Quattrocento', serif;
    /* Quattrocento for paragraph text */
}
@media (max-width: 639px) {
    .slider-item {
        flex-direction: column;
        padding: 1rem;
        margin-bottom: 1rem;
        /* Adjust padding as needed */
    }

    
}
</style>
