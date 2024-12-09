<template>
   <div class="home">
    <div class="content-wrapper">
      <div class="navs">
        <!-- Links on the left -->
        <nav class="nav-links-left" :class="{ show: isNavVisible }">
          <Nuxtlink to="/services" class="nav-link">SERVICES</Nuxtlink>
          <Nuxtlink to="/packs" class="nav-link">PACKS</Nuxtlink>
        </nav>

        <!-- Centered Logo -->
        <img src="/icons/logowhite.png" alt="Logo" class="logo" />

        <!-- Links on the right -->
        <nav class="nav-links-right" :class="{ show: isNavVisible }">
          <Nuxtlink to="/events" class="nav-link">EVENTS</Nuxtlink>
          <Nuxtlink to="/about" class="nav-link">ABOUT</Nuxtlink>
        </nav>

        <!-- Burger Menu -->
        <button class="burger" @click="toggleNav">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <!-- Navigation Bar -->




      <!-- Sound Wave Container -->
      <div class="sound-wave-container">
        <!-- Left Sound Wave -->
        <div class="sound-wave left">
          <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>

        <!-- Image Box -->
        <div class="box">
          <div class="box-content">
            <!-- Content goes here -->
          </div>
        </div>

        <!-- Right Sound Wave -->
        <div class="sound-wave right">
          <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
      </div>
      <!-- Social Icons -->
      <div class="social-icons">
        <div class="icontitle">
          <p>join us</p>
        </div>
        <div class="icon-row">
                    <div class="lilicons">
          <FontAwesomeIcon :icon="['fab', 'youtube']" />
                    </div>

                    <div class="lilicons">
          <FontAwesomeIcon :icon="['fab', 'twitter']" />
                    </div>

                    <div class="lilicons">
          <FontAwesomeIcon :icon="['fab', 'instagram']" />
                    </div>

                    <div class="lilicons">
          <FontAwesomeIcon :icon="['fab', 'tiktok']" />
                    </div>

                    <div class="lilicons">
          <FontAwesomeIcon :icon="['fab', 'facebook']" />
                    </div>

                    <div class="lilicons">
          <FontAwesomeIcon :icon="['fab', 'telegram']" />
                    </div>

                    <div class="lilicons">
          <FontAwesomeIcon :icon="['fab', 'whatsapp']" />
                    </div>

                     <div class="lilicons">
          <FontAwesomeIcon :icon="['fab', 'linkedin']" />
                      </div>


        </div>
      </div>
    </div>
  </div>




  
</template>
<script setup>
import { ref } from 'vue';

// Reactive state for toggling the burger menu
const isNavVisible = ref(false);

// Function to toggle navigation visibility
const toggleNav = () => {
  isNavVisible.value = !isNavVisible.value;
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: 'lemon-milk', sans-serif;

  /* height: 100%; 
  width: 100%; */
}

.home {
  background-image: url('/images/dude.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  /* padding: 1rem; */
  width: 90%;
  /* max-width: 1300px;
  min-height: 100vh; */
}

/* Navigation Bar */
.navs {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 0rem;
  position: relative
}

.nav-links-left, .nav-links-right {
  display: flex;
  gap: 3rem; 
  flex: 1;
  justify-content: flex-start;
  
}
.nav-links-right {
  justify-content: flex-end; 
}
.nav-link {
  display: flex;
  /* gap: 6rem; */
  flex: 1;
  color: #faf7f7;
  font-size: 1.4rem;
  font-weight: bold;
  text-transform: uppercase;
  transition: color 0.3s ease;
  font-family: 'lemon-milk', sans-serif;

  
}

.nav-link:hover {
  color: #ff5500;
}

.logo {
  /* position: absolute; */
  left: 50%;
  /* right:50%; */
  /* transform: translateX(-50%); */
  /* height: auto; */
  max-height: 18rem;
  max-width: 15rem;
  flex: 0 1 auto ;
  margin-top: 1rem;
  margin: 0 auto ;

}

/* Burger Menu */
.burger {
  display: none; /* Hidden on large screens */
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 2;
}

.burger span {
  display: block;
  width: 25px;
  height: 3px;
  background: white;
  transition: all 0.3s ease-in-out;
}
@media (max-width: 768px) {
  .burger {
    display: flex;
  }

  .nav-links-left{
    display: none;
    position: absolute;
    top: 60px;
    right: 20px;
    background: #444;
    padding: 10px;
    gap: 1rem;
    border-radius: 5px;
    z-index: 10;
  }
  .nav-links-right {
   
    display: none;
    position: absolute;
    top: 60px;
    background: #444;
    padding: 10px;
    gap: 1rem;
    border-radius: 5px;
    z-index: 10;
  
  }
}
/* Responsive Styles */
@media (max-width: 768px) {
  .nav-links-left, .nav-links-right {
    display: none; /* Hidden by default */
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 20px;
    background: #444;
    padding: 10px;
    gap: 10px;
    border-radius: 5px;
    z-index: 10;
  }

  .nav-links-left.show, .nav-links-right.show {
    display: flex; /* Show when toggled */
    gap: 4rem;
  }

  .burger {
    display: flex; 
    flex-direction: right;
  }

  .logo {
   display: flex;
   flex-direction: left;
    transform: none;
    margin: 0 auto;
  }
}

.sound-wave-container {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  position: relative; /* Ensures proper alignment control */
}

.sound-wave {
  display: flex;
  flex: 1;
  gap: 0.6rem;
  pointer-events: none;
  justify-content: space-around;
  max-width: 20%; /* Limits the space taken by waves */
}

.sound-wave div {
  width: 8px; /* Slightly smaller for better layout */
  background-color: #faf7f7;
  border-radius: 20px;
  animation: pulse 0.8s infinite ease-in-out alternate;
  flex-grow: 1;
}

/* Dynamic wave heights */
.left div:nth-child(1), .right div:nth-child(1) { height: 20px; }
.left div:nth-child(2), .right div:nth-child(2) { height: 60px; }
.left div:nth-child(3), .right div:nth-child(3) { height: 80px; }
.left div:nth-child(4), .right div:nth-child(4) { height: 50px; }
.left div:nth-child(5), .right div:nth-child(5) { height: 80px; }
.left div:nth-child(6), .right div:nth-child(6) { height: 60px; }
.left div:nth-child(7), .right div:nth-child(7) { height: 50px; }
.left div:nth-child(8), .right div:nth-child(8) { height: 20px; }

.sound-wave div:nth-child(odd) { animation-duration: 0.6s; }
.sound-wave div:nth-child(even) { animation-duration: 1s; }

/* Box Styling */
.box {
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("/images/p.png");
  mix-blend-mode: difference;
  pointer-events: none;
  background-size: cover;
  background-position: center;
  width: 100%;
  max-width: 800px;
  height: 70vh;
  border-radius: 8px;
  margin: 0 auto;
  z-index: 1; /* Ensures it's on top */
}

/* Responsive Adjustments */
@media (max-width: 1024px) {
  .sound-wave {
    max-width: 15%; /* Reduce space for waves */
  }

  .sound-wave div {
    width: 6px; /* Shrink wave width */
    gap: 0.4rem;
  }
}

@media (max-width: 768px) {
  .sound-wave {
    max-width: 10%;
  }

  .sound-wave div:nth-child(7),
  .sound-wave div:nth-child(8) {
    display: none; /* Remove last two waves */
  }

  .sound-wave div {
    width: 5px;
    height: 40px; /* Smaller wave heights */
  }
}

.social-icons {
  display: flex;
  margin-bottom: 2.5rem;
  flex-direction: column;
  align-items: center;
  gap: rem;
  
}

.icontitle p {
  font-size: 1.5rem;
  color: #faf7f7;
  font-family: 'lemon-milk', sans-serif;

}

.icon-row {
  display: flex;
  justify-content: center;
  font-size: 2rem;
  gap: 2rem;


}
.lilicons{
  display: flex;
  flex-wrap: wrap;
}

.icon-row svg {
  /* font-size: 0.1rem; */
  color: hsl(0, 23%, 97%, 0.8);
  transition: color 0.3s ease;
}

/* Pulse Animation */
@keyframes pulse {
  from { transform: scaleY(1); }
  to { transform: scaleY(1.6); }
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .nav-link {
    font-size: 1rem;
    margin: 0 0.8rem;
  }

  .logo {
    width: 5rem;
    max-height: 5rem;
    flex-direction: left;
  }


  .icon-row svg {
    font-size: 0.7rem;
  }
  .icontitle p{
    font-size: 0.8rem;

  }
}
  @media (max-width: 320px) {
  .icon-row svg {
    font-size: 0.6rem;
    gap: 2px;
  }
 
}

</style>
