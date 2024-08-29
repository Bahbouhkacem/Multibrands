<script setup>


import { ref } from 'vue';
import icon from '../assets/backggg.jpg'; // Adjust the path if necessary

const iconRef = ref(icon);

</script>
<template>
    <section id="locations" class="relative flex items-center h-screen">
        <div class="background-image"></div>
        <div class="container relative z-10 px-4 mx-auto">
            <h2
                class="text-3xl  sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#a1754c] text-center  pt-20  sm:p-12 sm:mx-4 lg:p-20">
                Our Locations</h2>
            <div class="card-container">

                <!-- Card 1 -->
                <div class="card">
                    <div class="content">
                        <div class="back">
                            <div class="back-content">
                                <img :src="icon" alt="Icon" height="100px" width="130px" />
                                <strong>Location 1</strong>
                            </div>
                        </div>
                        <div class="front">
                            <div class="img">
                                <div class="circle"></div>
                                <div class="circle" id="right"></div>
                                <div class="circle" id="bottom"></div>
                            </div>
                            <div class="front-content2">
                                <small class="badge">Syahiya Road, Tripoli, Libya</small>
                                <div class="description">
                                    <div class="title">
                                        <p class="title">
                                            <a href="https://www.google.com/maps/search/?api=1&query=32.884118,13.189391"
                                                target="_blank">
                                                Click to View Mass Multibrand on Google Maps
                                            </a>
                                        </p>
                                        <svg fill-rule="nonzero" height="15px" width="15px" viewBox="0 0 256 256"
                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g fill="#20c997">
                                                <path d="M25 27l-9-6.75-9 6.75v-23h18z" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Hello World -->
                <div class="flex items-center hidden py-4 text-center hello-world lg:flex">
                    <p class="text-xl font-bold">
                        "Discover our two convenient locations<br><br>because we're dedicated to being right where you
                        need us!"
                    </p>
                </div>


                <!-- Card 2 -->
                <div class="card">
                    <div class="content">
                        <div class="back">
                            <div class="back-content">
                                <img :src="icon" alt="Icon" height="100px" width="130px" />
                                <strong>Location 2</strong>
                            </div>
                        </div>
                        <div class="front">
                            <div class="img">
                                <div class="circle"></div>
                                <div class="circle" id="right"></div>
                                <div class="circle" id="bottom"></div>
                            </div>
                            <div class="front-contents">
                                <small class="badge">Shari al Matar, Tripoli, Libya</small>
                                <div class="description">
                                    <div class="title">
                                        <p class="title">
                                            <a href="https://www.google.com/maps?q=32.884118,13.189391" target="_blank">
                                                Click to View Mass Multibrand on Google Maps
                                            </a>
                                        </p>
                                        <svg fill-rule="nonzero" height="15px" width="15px" viewBox="0 0 256 256"
                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g fill="#20c997">
                                                <path d="M25 27l-9-6.75-9 6.75v-23h18z" />
                                            </g>
                                        </svg>
                                    </div>
                                    <p class="card-footer"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<style scoped>
.hello-world {
    margin: 20px 0;
    /* Adjust spacing as needed */
}
</style>


<style scoped>
/* CSS for Locations Section */
#locations {
    position: relative;
    overflow: hidden;
    /* Ensure no overflow from background image */
}

#locations .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('../assets/locations1.jpg');
    background-size: cover;
    /* Ensure the image covers the entire section */
    background-position: center;
    /* Center the background image */
    background-repeat: no-repeat;
    /* Prevent repeating the background image */
    filter: blur(8px);
    /* Apply the blur effect */
    z-index: -1;
    /* Ensure it is behind the content */
}

#locations .container {
    position: relative;
    z-index: 0;
    /* Ensure the content is above the background image */
}
/*  The cards animation */

.card-container {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    /* Space between cards */
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
}

.card {
    flex: 1;
    max-width: calc(33.33% - 20px);
    /* Adjust width to fit three cards with spacing */
    height: 254px;
    overflow: visible;
}

.content {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 300ms;
    box-shadow: 0px 0px 10px 1px #000000ee;
    border-radius: 5px;
}


.front,
.back {
    background-color: #151515;
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    border-radius: 5px;
    overflow: hidden;
}

.back {
    width: 100%;
    height: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    overflow: hidden;
}

.back::before {
    position: absolute;
    content: ' ';
    display: block;
    width: 160px;
    height: 160%;
    background: linear-gradient(90deg, transparent, #ff9966, #ff9966, #ff9966, #ff9966, transparent);
    animation: rotation_481 5000ms infinite linear;
}

.back-content {
    position: absolute;
    width: 99%;
    height: 99%;
    background-color: #151515;
    border-radius: 5px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
}

.card:hover .content {
    transform: rotateY(180deg);
}

@keyframes rotation_481 {
    0% {
        transform: rotateZ(0deg);
    }

    0% {
        transform: rotateZ(360deg);
    }
}

.front {
    transform: rotateY(180deg);
    color: white;
}

.front .front-content {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
}
.front .front-contents {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: url('../assets/gps2.png');
    background-repeat: no-repeat;

}

.front .front-content2 {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
background-image: url('../assets/gps1.png');
background-repeat: no-repeat;
}
.front-content2 .badge {
    background-color: #00000055;
    padding: 2px 10px;
    border-radius: 10px;
    backdrop-filter: blur(2px);
    width: fit-content;
    color: black;
    /* Added text color */
}
.front-contents .badge {
    background-color: #00000055;
    padding: 2px 10px;
    border-radius: 10px;
    backdrop-filter: blur(2px);
    width: fit-content;
    color: black;
    /* Added text color */
}
.front-content .badge {
    background-color: #00000055;
    padding: 2px 10px;
    border-radius: 10px;
    backdrop-filter: blur(2px);
    width: fit-content;
    color: black;
        /* Added text color */
}

.description {
    box-shadow: 0px 0px 10px 5px #00000088;
    width: 100%;
    padding: 10px;
    background-color: #00000099;
    backdrop-filter: blur(5px);
    border-radius: 5px;
}

.title {
    font-size: 11px;
    max-width: 100%;
    display: flex;
    justify-content: space-between;
}

.title p {
    width: 50%;
}

.card-footer {
    color: #ffffff88;
    margin-top: 5px;
    font-size: 8px;
}

.front .img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.circle {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: #ffbb66;
    position: relative;
    filter: blur(15px);
    animation: floating 2600ms infinite linear;
}
</style>