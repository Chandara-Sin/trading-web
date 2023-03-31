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
      <StockCard :chartSeries="chartSeries" />
      <StockCard :chartSeries="chartSeriesMock" />
      <StockCard :chartSeries="chartSeriesInit" />
    </div>
  </main>
</template>

<script lang="ts">
export default {
  data: () => ({
    chartSeries: [{ data: [30, 20, 35, 50, 49, 60, 55, 52, 60, 73] }],
    chartSeriesMock: [{ data: [70, 80, 95, 78, 59, 60, 55, 52, 48, 30] }],
    chartSeriesInit: [{ data: [20, 10, 34, 20, 39, 80, 35, 42, 60, 53] }],
  }),
};
</script>
