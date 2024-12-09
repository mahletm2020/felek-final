<template>
  <div class="full-page-background">
    <!-- <div class="container"> -->
      <div class="grid-container">

        <!-- Top Row Layout -->
        <div class="gridebig">
          <div class="image-wrapper">
            <img src="/images/s1.jpg" alt="Item 1" class="grid-image">
          </div>
          <div class="arrow-overlay"></div>
        </div>

        <!-- Middle Column: Two small items in a column layout for desktop view -->
        <div class="middle-small-items-column">
          <div class="grid-item-small">
            <div class="image-wrapper">
              <img src="/images/s1.jpg" alt="Small Item 1" class="grid-image">
            </div>
            <div class="label">KEFETA VOL. 1.<br />THE SERUM PRESETS</div>
            <button class="justbtn"></button>
          </div>
          <div class="grid-item-small">
            <div class="image-wrapper">
              <img src="/images/s4.jpg" alt="Small Item 2" class="grid-image">
            </div>
            <div class="label">KEFETA VOL. 1.<br />THE SERUM PRESETS</div>
            <button class="justbtn"></button>
          </div>
        </div>

        <div class="gridebig">
          <div class="image-wrapper">
            <img src="/images/s3.jpg" alt="Item 3" class="grid-image">
          </div>
          <div class="arrow-overlay"></div>
        </div>

        <!-- Spacer -->
        <div class="spacer-row"></div>

        <!-- Bottom Row Layout -->
        <div class="gridebig">
          <div class="image-wrapper">
            <img src="/images/s2.jpg" alt="Item 4" class="grid-image">
          </div>
          <div class="arrow-overlay"></div>
        </div>

        <!-- Middle Column: Two small items in a column layout for VOL. 2 -->
        <div class="middle-small-items-column">
          <div class="grid-item-small">
            <div class="image-wrapper">
              <img src="/images/s4.jpg" alt="Small Item 3" class="grid-image">
            </div>
            <div class="label">KEFETA VOL. 2.<br />THE SERUM PRESETS</div>
            <button class="justbtn"></button>
          </div>
          <div class="grid-item-small no-border">
            <div class="image-wrapper">
              <img src="/images/s5.jpg" alt="Small Item 4" class="grid-image">
            </div>
          </div>
        </div>

        <!-- Last Grid Item -->
        <div class="gridebig last-item">
          <div class="image-wrapper">
            <img src="/images/s1.jpg" alt="Item 5" class="grid-image blurred-image">
          </div>
          <div class="arrow-overlay"></div>
        </div>

      </div>
    <!-- </div> -->
  </div>
</template>

<style scoped>
/* Full-page background */
.full-page-background {
  /* height: 300vh; */
  /* display: flex;
  align-items: center;
  justify-content: center; */
  /* margin-top: -25rem; */
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

/* Main container */
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
}

/* Grid container */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 90vw;
  max-width: 1200px;
}

/* Image wrapper */
.image-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 10px;
}

.grid-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Large grid item */
.gridebig {
  grid-column: span 1;
  grid-row: span 2;
  height: 640px;
  border-right: 6px solid rgb(255, 98, 0);
  border-bottom: 6px solid rgb(255, 102, 0);
}

/* Column layout for small items */
.middle-small-items-column {
  display: flex;
  flex-direction: column;
  gap: 20px;
  
}

/* Small grid item */
.grid-item-small {
  height: 280px;
  border: 6px solid rgb(255, 89, 0);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Just button styling */
.justbtn {
  width: 120px;
  height: 35px;
  background-color: #ff5500;
  border: none;
  border-radius: 20px;
  margin-top: 10px;
}

/* Blurred image */
.blurred-image {
  filter: blur(5px);
}

/* Arrow overlay */
/* .arrow-overlay {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  background-color: rgb(255, 89, 0);
  mask: url('/icons/downarrow.svg') center / contain no-repeat;
} */

/* Responsive design */
@media (max-width: 1024px) {
  .grid-container {
    grid-template-columns: 1fr 1fr;
  }

  .gridebig {
    height: 400px;
  }

  .middle-small-items-column {
    flex-direction: row;
    gap: 10px;
  }

  .grid-item-small {
    height: 200px;
  }
}

@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr;
  }

  .gridebig {
    height: 300px;
  }

  .grid-item-small {
    width: 100%;
    height: 180px;
  }
}

@media (max-width: 480px) {
  .grid-container {
    grid-template-columns: 1fr;
  }

  .gridebig {
    height: 250px;
  }

  .grid-item-small {
    height: 150px;
  }
}
</style>
