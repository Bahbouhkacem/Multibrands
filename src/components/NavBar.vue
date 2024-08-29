
<script setup>
import { ref } from 'vue';

const isNavbarVisible = ref(false);

const toggleNavbar = () => {
    isNavbarVisible.value = !isNavbarVisible.value;
};

const handleLogoClick = (e) => {
    e.preventDefault(); // Prevent default link behavior

    const logo = e.currentTarget;
    logo.classList.add('scale-up'); // Add scale-up class

    // Navigate to the desired URL after animation ends
    setTimeout(() => {
        window.location.href = '#'; // Change this URL to the destination you want
    }, 300); // Duration of the animation in ms

    // Remove the class after animation ends to allow repeated clicks
    setTimeout(() => {
        logo.classList.remove('scale-up');
    }, 300); // Duration of the animation in ms
};
</script>
<template>
    <nav class="fixed top-0 left-0 z-50 w-full bg-[#36292442] shadow-md">
        <div class="flex items-center justify-between px-10 py-2 navbar-wrapper">
            <a href="#" id="brand-logo" @click="handleLogoClick">
                <img src="../assets/multibrands.png" alt="Brand Logo" class="logo-image" />
            </a>
            <!-- Mobile Menu Toggle -->
            <label>
                <button @click="toggleNavbar" class="flex items-center menu-toggle md:hidden">


                    <div class="flex flex-col items-center justify-center h-10 cursor-pointer px-auto w-9">
                        <input class="hidden peer" type="checkbox" />
                        <div
                            class="w-[50%] h-[2px] bg-[#a1754c] rounded-sm  origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]">
                        </div>
                        <div class="w-[50%] h-[2px] bg-[#a1754c] rounded-md  origin-center peer-checked:hidden">
                        </div>
                        <div
                            class="w-[50%] h-[2px] bg-[#a1754c] rounded-md  origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]">
                        </div>
                    </div>

                </button>
            </label>

            <!-- Desktop Menu Links -->
            <div class="hidden ml-auto space-x-4 md:flex">
                <a href="#about"
                    class="text-[#a1754c] nav-link transition-colors duration-300 hover:text-white hover:bg-[#a1754c] hover:rounded-lg hover:px-2">About</a>

                <a href="#brands"
                    class="text-[#a1754c] nav-link transition-colors duration-300 hover:text-white hover:bg-[#a1754c] hover:rounded-lg hover:px-2">Brands</a>
                <a href="#store"
                    class="text-[#a1754c] nav-link transition-colors duration-300 hover:text-white hover:bg-[#a1754c] hover:rounded-lg hover:px-2">Store</a>
                <a href="#locations"
                    class="text-[#a1754c] nav-link transition-colors duration-300 hover:text-white hover:bg-[#a1754c] hover:rounded-lg hover:px-2">Locations</a>
                <a href="#contact"
                    class="text-[#a1754c] nav-link transition-colors duration-300 hover:text-white hover:bg-[#a1754c] hover:rounded-lg hover:px-2">Contact
                    Us</a>
            </div>
        </div>
        <!-- Mobile Menu Links -->
        <div v-if="isNavbarVisible" class="mobile-menu">
            <a href="#" id="mobile-logo" class="text-2xl font-bold text-[#a1754c]"
                @click="handleLogoClick">MultiBrands</a>
            <a href="#about" class="text-[#a1754c] mobile-nav-link hover:text-gray-800">About</a>
            <a href="#brands" class="text-[#a1754c] mobile-nav-link hover:text-gray-800">Brands</a>
            <a href="#store" class="text-[#a1754c] mobile-nav-link hover:text-gray-800">Store</a>
            <a href="#locations" class="text-[#a1754c] mobile-nav-link hover:text-gray-800">Locations</a>
            <a href="#contact" class="text-[#a1754c] mobile-nav-link hover:text-gray-800">Contact Us</a>
        </div>
    </nav>
</template>



<style scoped>
/* Increase Logo Size */
.logo-image {
    height: 90px;
    /* Increase height */
    width: 170px;
    /* Maintain aspect ratio */
}

/* Navbar Wrapper Adjustments */
.navbar-wrapper {
    padding: 0 10px;
    /* Adjust horizontal padding as needed */
}

/* Logo Styling */
#brand-logo {
    display: flex;
    align-items: center;
    /* Center logo vertically */
}

/* Font Imports */
@import url('https://fonts.googleapis.com/css2?family=Karla:wght@400;700&family=Merriweather:wght@400;700&display=swap');

/* Navbar Styles */
nav {
    font-family: 'Karla', sans-serif;
    font-size: larger;
    height: 80px;
    /* Ensure navbar height remains constant */
}

/* Nav Links */
.nav-link,
.mobile-nav-link {
    font-family: 'Merriweather', serif;
}

/* Mobile Menu Toggle */
.menu-toggle {
    display: flex;
    padding: 1rem;
    flex-direction: column;
    width: 40px;
    height: 30px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
/* the navbar on mobile its bars+button (css file)*/


/* Mobile Menu Styles */
.mobile-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 80px;
    /* Adjust according to the height of the navbar */
    left: 0;
    width: 100%;
    background-color: rgb(32, 30, 30);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 20;
    transition: transform 0.3s ease;
    border-radius: 2rem;
}

/* Toggle icon styles */
.menu-toggle .bars:nth-child(1) {
    transform: rotate(0);
}

.menu-toggle .bars:nth-child(2) {
    transform: rotate(0);
}

.menu-toggle .bars:nth-child(3) {
    transform: rotate(0);
}

/* Show mobile menu when isNavbarVisible is true */
.mobile-menu {
    display: flex;
}

/* Mobile Menu Items */
#mobile-logo {
    margin-top: 1rem;
    margin-bottom: 1rem;
}

/* Mobile Menu Items */
.mobile-nav-link {
    padding: 1rem;
    border-bottom: 1px solid #ddd;
    text-align: center;
    width: 100%;
    display: block;
}

/* Remove bottom border for the last item */
.mobile-nav-link:last-child {
    border-bottom: none;
}

/* Desktop Menu Styles */
.hidden {
    display: none;
}

@media (min-width: 768px) {
    .mobile-menu {
        display: none;
    }

    .menu-toggle {
        display: none;
    }

    .hidden.md\:flex {
        display: flex;
    }
}

</style>

