<template>
  <section class="connect-section">
    <div class="connect-left">
      <h2>Ready to work with us?</h2>
      <button class="contact-btn">Contact Us</button>
    </div>

    <div class="connect-logo">
      <img src="/images/p.png" alt="Logo" />
    </div>

    <div class="connect-right">
      <div class="social-icons">
        <div class="icontitle">
          <p>Join Us</p>
        </div>
        <div class="icon-row">
          <FontAwesomeIcon v-for="icon in icons" :key="icon" :icon="['fab', icon]" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const icons = ['youtube', 'twitter', 'instagram', 'tiktok', 'facebook', 'telegram', 'whatsapp', 'linkedin'];
</script>

<style scoped>
.connect-section {
  display: flex;
  flex-wrap: wrap; /* Ensure flexibility for smaller screens */
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: url('/images/dude.jpg') no-repeat center;
  background-size: cover;
  height: 300px;
  color: #fff;
  font-family: 'lemon-milk', sans-serif;
}

.connect-left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1; /* Allow it to resize */
  max-width: 33%; /* Limit to 1/3 width on large screens */
}

.connect-left h2 {
  font-size: 2rem;
  font-family: 'lemon-milk', sans-serif;

}

.icontitle {
  color: #fff;
  font-family: 'lemon-milk', sans-serif;
  font-size: 2.5rem;
}

.contact-btn {
  padding: 10px 20px;
  border: 2px solid #fff;
  color: #0a0a0a;
  background: transparent;
  cursor: pointer;
  border-radius: 15px;
  background-color: #faf7f7;
}

.connect-logo {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.connect-logo img {
  width: 150px;
}

.connect-right {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  max-width: 33%;
}

.social-icons {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.social-icon svg {
  width: 2.5rem;
  height: 2.5rem;
  color: #faf7f7;
  transition: color 0.3s;
}

.social-icon svg:hover {
  color: #ff4500;
}

/* Responsive Layout for Small Screens */
@media (max-width: 768px) {
  .connect-section {
    flex-direction: column; /* Stack elements vertically */
    height: auto; /* Adjust height for content */
  }

  .connect-left, .connect-right, .connect-logo {
    max-width: 100%; /* Take full width */
    flex: 1 1 100%; /* Ensure flexibility */
    text-align: center; /* Center-align content */
  }

  .connect-left h2 {
    font-size: 2rem; /* Adjust font size for smaller screens */
  }
}
</style>
