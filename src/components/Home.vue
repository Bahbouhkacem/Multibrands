<template>
    <section id="landing" class="relative flex items-center h-screen bg-center bg-cover">
        <div class="blurred-bg"></div>
        <div class="container relative z-10 px-2 mx-auto">
            <h2
                class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#a1754c] text-center p-10 sm:p-12 sm:m-12 lg:p-20 hidden md:block">
                Welcome to MULTIBRANDS
            </h2>
            <div class="relative mt-8 slider-container">
                <div class="flex transition-transform duration-700 ease-in-out slider" ref="slider">
                    <div class="flex-shrink-0 w-full px-0 slider-item md:flex" v-for="(item, index) in sliderItems"
                        :key="index">
                        <div class="md:w-1/2">
                            <h3 class="mb-4 text-2xl font-bold text-[#a1754c] ">{{ item.title }}</h3>
                            <p class="text-[#f0efed] mb-4 text-lg sm:text-xl lg:text-2xl font-serif"
                                v-html="item.description"></p>
                        </div>

                        <div class="md:w-1/2">
                            <img :src="item.image" alt="Slide Image" class="w-full h-auto rounded-lg shadow-md" />
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
import b1 from '../assets/multibrands1.png'
import b2 from '../assets/VERSACE1.jpg'
import b3 from '../assets/hb2.jpg'
import b4 from '../assets/store4.jpg'
import b5 from '../assets/store5.jpg'
import b6 from '../assets/store6.jpg'

import { ref, onMounted } from 'vue';

// Data for slider items with one image and description per slide
const sliderItems = [
    {
        title: 'Who is MultiBrands',
        description: 'MultiBrands is a dynamic clothing company that specializes in offering a diverse range of fashion-forward apparel and accessories. <br><br>With a commitment to quality and style, we curate collections that cater to modern tastes and trends, providing our customers with exceptional fashion choices.',
        image: b1,
    },
    {
        title: 'Versace',
        description: 'Renowned for its opulent designs and bold aesthetics, Versace is a luxury fashion house that epitomizes glamour and sophistication. Founded by Gianni Versace in 1978, the brand is celebrated for its iconic prints, high fashion couture, and distinctive, high-impact style. Versace collections encompass everything from striking ready- to - wear pieces to exquisite accessories and home decor, making it a symbol of Italian elegance and luxury.',
        image: b2,
    },
    {
        title: 'Harmont & Blaine',
        description: 'Harmont & Blaine blends classic elegance with contemporary style, offering a refined collection of mens and womens apparel. <br><br>Established in Italy, the brand is known for its high-quality fabrics, sophisticated designs, and timeless tailoring. With a focus on understated luxury and attention to detail, Harmont & Blaine delivers versatile fashion that seamlessly transitions from casual to formal occasions, embodying both comfort and style.',
        image: b3,
    },
   
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
});
</script>

<style scoped>
#landing {
    position: relative;
    background: none;
    /* Remove any background image from the main section */
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
    filter: blur(5px);
    z-index: -1;
}

.slider-item {
    flex: 0 0 100%;
    box-sizing: border-box;
    display: flex;
    /* Add this to make the image and text align horizontally */
    justify-content: space-between;
    /* Add this to make the image and text spaced evenly */
}

.slider-container {
    overflow: hidden;
    position: relative;
}

/* Add these styles to make the images a good size and centered */
.slider-item img {
    max-width: 400px;
    /* adjust the width to your liking */
    max-height: 300px;
    /* adjust the height to your liking */
    object-fit: cover;
    /* make the image cover the entire container */
    border-radius: 10px;
    /* add a slight border radius for a nicer look */
    margin: 20px;
    /* add some margin around the image */
    display: block;
    /* Add this to make the image a block element */
    margin: 0 auto;
    /* Add this to center the image horizontally */
}

/* Add these styles to move the text to the right a bit */
.slider-item p {
    margin-left: 20px;
    /* adjust the margin to your liking */
}
/* Add media queries for mobile devices */
@media only screen and (max-width: 768px) {
    .slider-item {
        flex-direction: column;
        /* Make the image and text stack vertically on mobile */
    }

    .slider-item img {
        max-width: 300px;
        /* Adjust the image width for mobile devices */
        margin: 10px;
        /* Adjust the image margin for mobile devices */
    }

    .slider-item p {
        margin-left: 10px;
        /* Adjust the text margin for mobile devices */
    }
}
</style>
