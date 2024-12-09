<template>
  <div class="background">
    <!-- Floating Event Box -->
    <div class="event-box">
      <div class="logo">
        <img src="/images/p.png" alt="Event Logo" />
      </div>
      <div class="event-header">
        <div class="title">
          <h1>EVENT</h1>
        </div>
        <div class="disc">
          <p class="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas ac.
          </p>
        </div>
      </div>
      <div class="pending-section">
        <div class="pending-box">PENDING</div>
        <div class="pending-box">PENDING</div>
      </div>
      <div class="social-icons">
        <FontAwesomeIcon v-for="icon in icons" :key="icon" :icon="['fab', icon]" />
        <p>JOIN US</p>
      </div>
    </div>

    <div class="packs-section">
      <div class="packs-header">
        <div class="logo">
          <div class="logoim">
            <img src="/images/p.png" alt="Packs Logo" id="packs-logo" />
          </div>
          <div class="logotitle">
            <h1>PACKS</h1>
          </div>
        </div>
        <div class="packdesc">
          <p class="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra.
          </p>
        </div>
      </div>
      <div class="packs-buttons">
        <div class="butt">
           <button class="cart-button"> <FontAwesomeIcon :icon="['fas', 'shopping-cart']" /> CART </button>
           <button class="freebie-button">FREEBIE</button>
        </div>
        <div class="arrow">
           <button class="see-all-button" id="arrow"> <span class="arrowonly">→</span> SEE ALL </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const icons = ['youtube', 'twitter', 'instagram', 'tiktok', 'facebook', 'telegram', 'whatsapp', 'linkedin']
</script>

<style scoped>
.background {
  /* min-height: 100vh; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 3rem;
  /* gap: 2rem; */
  background-image: url('/images/dude2.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.event-box {
  background-color: #e73b07;
  color: #faf7f7;
  padding: 2rem;
  border-radius: 0 0 200px 0;
  max-width: 1200px;
  text-align: left;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
}

.event-header {
  display: flex;
  flex-direction: row;
  gap: 20rem;
  margin-top: -7rem;
  margin-left: 2.2rem;
  font-size: bold;
  font-family: 'lemon-milk', sans-serif;
}

#packs-logo {
  width: 3rem;
  height: 3rem;
  margin-left: 1rem;
  margin-top: 0.5rem;
}

.disc {
  margin-top: 1rem;
}

.logo img {
  width: 5.5rem;
  height: 6rem;
  margin-left: -3.5rem;
  margin-top: -3rem;
}

.event-header h1 {
  font-size: 3rem;
  font-weight: bold;
  color: #1a1a1a;
  flex-grow: 1;
  font-family: 'lemon-milk', sans-serif;
}

.logotitle {
  margin-top: -2.4rem;
}

.description {
  font-size: 1.2rem;
  line-height: 1.5;
  color: #f8f4f4;
  flex-grow: 1;
  font-family: 'lemon-milk', sans-serif;
}

.pending-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 1rem;
}

.pending-box {
  background-color: #1a1a1a;
  color: #faf7f7;
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 200px;
  border-radius: 4px;
  flex-grow: 1;
}

.social-icons {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 1.5rem;
}

.logo {
  display: flex;
  flex-direction: row;
}

.social-icons p {
  font-size: 0.5rem;
}

.social-icons svg {
  font-size: 1.1rem;
  color: #faf7f7;
  transition: color 0.3s ease;
}

.social-icons svg:hover {
  color: #fb6449;
}

.packs-section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  color: #faf7f7;
  padding: 1.5rem 2rem;
  width: 100%;
  max-width: 1200px;
  gap: 1rem;
}

.packs-header {
  display: flex;
  align-items: center;
  gap: 12rem;
  flex-grow: 1;
  font-family: 'lemon-milk', sans-serif;
  margin-left: -12px;
}

.packs-header h1 {
  font-size: 3rem;
  font-weight: 900;
  color: #ff3a00;
  font-family: 'lemon-milk', sans-serif;
}

/* Adjusted packs-buttons section */
.packs-buttons {
  display: flex;
  gap: 25rem;
  /* margin: 0 auto; */
  /* width: 100%; */
  /* justify-content: flex-end; */
}
.butt{
  gap: 2rem;
  display: flex;
  flex-direction: row;
}
.cart-button,
.freebie-button {
  background-color: #faf7f7;
  border: none;
  color: #1a1a1a;
  padding: 0.5rem 2rem;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 5rem;
  flex-direction: left;
}

.see-all-button {
  background-color: transparent;
  color: #ff3a00;
  font-weight: bold;
  font-size: 1.2rem;
  border: none;
  display: flex;
  flex-direction: right;
  align-items: center;
}

.arrowonly {
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 0.5rem;
}

/* Responsive behavior */
@media (max-width: 768px) {
  .packs-header{
    display: flex;
    flex-direction: column;
  }
  .event-header {
    flex-direction: column; /* Stack event header vertically */
    align-items: center;
    gap: 1rem;
  }

  .pending-section {
    flex-direction: column; /* Stack pending boxes vertically */
    align-items: center;
  }

  .pending-box {
    width: 80%; /* Make pending boxes more flexible */
    max-width: 250px;
    height: 150px; /* Adjust height for small screens */
  }

  .social-icons {
    flex-direction: row; /* Keep icons in row */
    justify-content: center;
    gap: 1.5rem;
  }

  .packs-section {
    flex-direction: column; /* Stack the packs section vertically */
    align-items: center;
    gap: 2rem;
  }

  .packs-header {
    gap: 1rem;
    text-align: center;
  }

  .packs-buttons {
    flex-direction: row; /* Align buttons in a row */
    gap: 1rem;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .event-header {
    gap: 0.5rem;
  }

  .pending-box {
    width: 100%;
    max-width: 300px;
  }

  .packs-header {
    gap: 0.5rem;
  }

  .packs-buttons {
    gap: 0.5rem;
    align-items: center;
  }

  .cart-button,
  .freebie-button,
  .see-all-button {
    font-size: 0.9rem;
    width: 100%;
  }
  .packs-buttons{
    display: flex;
    flex-direction: column;
    margin-left: 12px;
  }
.arrow{
  margin-left:8rem ;
}  
#packs-logo {
    width: 2.5rem;
    height: 2.5rem;
    margin-left: -2rem;
  }
}
</style>
