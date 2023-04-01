<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import Banner from "../components/Banner.vue";
import StockCard from "../components/StockCard.vue";
</script>

<template>
  <main>
    <Navbar />
    <Banner />
    <div class="flex items-center justify-between w-full">
      <StockCard v-for="chartData of chartDataList" :chartSeries="chartData" />
    </div>
  </main>
</template>

<script lang="ts">
export default {
  data: () => ({
    chartDataList: [
      [30, 20, 35, 50, 49, 60, 55, 52, 60, 73],
      [70, 80, 95, 78, 59, 60, 55, 52, 48, 30],
      [20, 10, 34, 20, 39, 80, 35, 42, 60, 53],
    ],
  }),
};
</script>
