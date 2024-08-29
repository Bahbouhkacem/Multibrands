<template>
  <section id="contact" class="relative flex items-center justify-center h-screen">
    <div class="blurred-bg"></div>

    <div class="absolute inset-0 bg-center bg-cover blur-md" style="background-image: url('../assets/contactus.jpg');">
    </div>
    <div class="relative w-full max-w-6xl p-6 space-y-6 bg-white rounded-lg shadow-lg">
      <!-- Contact Section Title and Description -->
      <div class="text-center">
        <h2
          class="text-3xl  sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#a1754c] text-center  pt-20  sm:p-12 sm:mx-4 lg:p-20">
          Contact Us</h2>
        <p class="mb-8 text-gray-600">
          If you have any questions or need further information, feel free to reach out to us through the
          contact details below.
        </p>
      </div>

      <!-- Business Card and Contact Info -->
      <div class="flex flex-col items-center space-y-6 md:flex-row md:space-y-0 md:space-x-6">
        <!-- Business Card -->
        <div class="flex flex-col items-center flex-1 space-y-4">
          <img src="../assets/card.png" alt="Business Card" class="w-4/5 h-auto rounded-lg shadow-lg md:w-1/2">
          <img src="../assets/CD2.png" alt="Additional Card" class="w-4/5 h-auto rounded-lg shadow-lg md:w-1/2">
        </div>

        <!-- Contact Info -->
        <div class="flex-1 space-y-4 text-center">
          <a href="mailto:mass.multi.ly@gmail.com"
            class="flex items-center justify-center text-blue-600 hover:underline">
            <i class="mr-2 fas fa-envelope"></i>
            Click to send us an email
          </a>
          <a href="https://wa.me/+218915940010" class="flex items-center justify-center text-green-600 hover:underline">
            <i class="mr-2 fab fa-whatsapp"></i>
            Click to call us on WhatsApp
          </a>

        </div>
      </div>
    </div>
  </section>
</template>




<style scoped>
.contact-form {
    flex: 2;
    
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
/* contact us css style */



.contact-form-container {
  display: flex;
  align-items: flex-start;
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #361d1d;
  border-radius: 8px;
  font-family: 'Montserrat', sans-serif;
  font-size: large;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.card-photo {
  flex: 1;
  margin-right: 20px;

}

.card-photo img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 120px;

}


.contact-form h2 {
  margin-top: 0;
  
}

.contact-form label {
  display: block;
  margin: 10px 0 5px;
}



</style>