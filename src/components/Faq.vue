<template>
    <section id="faq" class="py-12 bg-gray-100">
        <div class="container px-4 mx-auto">
            <h2 class="mb-8 text-3xl font-bold text-center text-gray-800">Frequently Asked Questions</h2>
            <div class="max-w-3xl mx-auto">
                <div class="bg-white rounded-lg shadow-md">
                    <!-- Iterate over faqs and create FAQ items dynamically -->
                    <div v-for="(item, index) in faqs" :key="index" class="border-b">
                        <button class="w-full px-4 py-2 text-left focus:outline-none" :id="'faq' + (index + 1)"
                            @click="toggleAnswer(index)" :class="{ 'active': activeIndex === index }">
                            <h3 class="text-xl font-semibold text-gray-800">{{ item.question }}</h3>
                            <span class="text-gray-600">{{ activeIndex === index ? '-' : '+' }}</span>
                        </button>
                        <div :id="'faq' + (index + 1) + '-answer'" :class="{ 'hidden': activeIndex !== index }"
                            class="px-4 py-2 text-gray-600">
                            {{ item.answer }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

// Define FAQ items
const faqs = ref([
    { question: 'What are your store hours?', answer: 'Our stores are open Monday to Saturday from 10 AM to 8 PM and Sunday from 11 AM to 6 PM.' },
    { question: 'Do you offer online shopping?', answer: 'Yes, you can shop online through our website. We offer delivery to most locations.' },
    { question: 'What is your return policy?', answer: 'We accept returns within 30 days of purchase. Items must be in their original condition and packaging. Please visit our returns page for more details.' },
    { question: 'Do you have a loyalty program?', answer: 'Yes, we have a loyalty program where you can earn points for every purchase. Sign up on our website to start earning rewards.' },
    { question: 'Can I track my order?', answer: 'Yes, once your order has shipped, you will receive a tracking number via email. You can use this number to track your order on our website.' }
]);

// State to track active FAQ index
const activeIndex = ref(null);

// Toggle the answer visibility
function toggleAnswer(index) {
    activeIndex.value = activeIndex.value === index ? null : index;
}
</script>


<style  scoped>

/* CSS for FAQ Section */
#faq .hidden {
    display: none;
}

#faq button:focus {
    outline: none;
}

#faq button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

#faq button:hover {
    background-color: #f0f0f0;
}

#faq span {
    float: right;
    transition: transform 0.3s ease;
}

#faq button.active span {
    transform: rotate(45deg);
}

#faq button.active + div {
    display: block;
}

</style>