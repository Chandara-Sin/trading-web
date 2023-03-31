<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import Banner from "../components/Banner.vue";
import StockCard from "../components/StockCard.vue";
</script>

<template>
  <main>
    <Navbar />
    <Banner />
    <div class="flex items-center justify-evenly w-full">
      <StockCard />
    </div>
  </main>
</template>
