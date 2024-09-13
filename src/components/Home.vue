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
                        <div class="flex items-center justify-center flex-shrink-0 w-full px-0 slider-item md:flex"
                            v-for="(item, index) in sliderItems" :key="index">
                            <div class="w-full text-center">
                                <h3 class="mb-4 text-2xl font-bold text-[#a1754c]">{{ item.title }}</h3>
                                <div class="flex justify-center">
                                    <img :src="item.image" alt="Slide Image"
                                        class="w-full h-auto rounded-lg shadow-md md:w-auto" />
                                </div>
                                <p class="text-[#f0efed] mb-4 text-lg sm:text-xl lg:text-2xl font-serif"
                                    v-html="item.description"></p>
                            </div>
                        </div>
                    </div>

                    <!-- Navigation Buttons -->
                    <button hidden @click="prevSlide"
                        class="absolute left-0 p-2 text-white transform -translate-y-1/2 bg-gray-800 rounded-full top-1/2 hover:bg-gray-600">
                        &#10094;
                    </button>
                    <button hidden @click="nextSlide"
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
import b4 from '../assets/mkors.jpg'
import { ref, onMounted } from 'vue';

const sliderItems = [
    {
        title: 'Who is MultiBrands',
        description: 'MultiBrands is a dynamic clothing company that specializes in offering a diverse range of fashion-forward apparel and accessories.Providing our customers with exceptional fashion choices.',
        image: b1,
    },
    {
        title: 'Versace',
        description: 'Versace is a luxury fashion house that epitomizes glamour and sophistication. Founded by Gianni Versace in 1978, the brand is celebrated for its iconic prints, high fashion couture, and distinctive, high-impact style.',
        image: b2,
    },
    {
        title: 'Harmont & Blaine',
        description: 'Harmont & Blaine blends classic elegance with contemporary style, offering a refined collection of mens and womens apparel.Established in Italy.',
        image: b3,
    },
    {
        title: 'Michael Kors',
        description: 'Michael Kors is a global luxury fashion brand known for its chic, sophisticated designs in clothing, accessories, and footwear, blending timeless elegance with a modern touch.',
        image: b4,
    }
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

    // Set up automatic sliding every 3 seconds
    setInterval(() => {
        nextSlide();
    }, 3000);
});
</script>

<style scoped>
.shared-bg {
    /* This will ensure the background is applied properly within each component */
    min-height: 100vh;
    /* Ensure it takes full height of the viewport */
    /* Remove any additional margin/padding */
    margin: 0;
    padding: 0;
}
#landing {
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
    filter: blur(5px);
    z-index: -1;
}

.slider-item {
    flex: 0 0 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
}

.slider-container {
    overflow: hidden;
    position: relative;
}

.slider-item img {
    max-width: 400px;
    max-height: 300px;
    object-fit: cover;
    border-radius: 10px;
    margin: 20px;
    display: block;
    margin: 0 auto;
}

.slider-item p {
    margin-left: 20px;
}

@media only screen and (max-width: 768px) {
    .slider-item {
        flex-direction: column;
    }

    .slider-item img {
        max-width: 300px;
        margin: 10px;
    }

    .slider-item p {
        margin-left: 10px;
    }
}
</style>
