<template>
  <div>
<Home/>
<Service/>
<Event/>
<Grids/>
<Footer/>
  </div>
</template>

<script setup>
import Home from '../components/home.vue';
import Service from '~/components/service.vue';
import Event from '../components/event.vue';
import Grids from '../components/grids.vue';
import Footer from '../components/footer.vue'
</script>

<style scoped>
*body{
  margin: 0;
  padding: 0;
  overflow: none;
}
</style>