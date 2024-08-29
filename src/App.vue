<template>
  <div>
    <NavBar />
    
    <Home />
    <AboutUs />
    <Brands />
    <Store />
    <locations />
    
    <ContactUs />
    <Footer />
  </div>
</template>

<script setup>
import Brands from './components/Brands.vue';
import Faq  from './components/Faq.vue';
import ContactUs from './components/ContactUs.vue';
import Footer from './components/Footer.vue';
import NavBar from './components/NavBar.vue';
import AboutUs from './components/AboutUs.vue';
import Locations from './components/Locations.vue';
import Store from './components/Store.vue';
import Home from './components/Home.vue'
//deleted the FAQ <faq/> not good looking,still to optimise and for testing

</script>
