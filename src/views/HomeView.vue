<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import Banner from "../components/Banner.vue";
import StockCard from "../components/StockCard/StockCard.vue";
import type { StockCardType } from "../components/StockCard/StockCardType";
</script>

<template>
  <main class="w-fit">
    <Navbar />
    <Banner />
    <div class="flex flex-wrap gap-4 justify-center items-center">
      <StockCard
        v-for="{
          title,
          symbol,
          series,
          volumn,
          netChange,
          deltaIndicator,
        } of chartDataList"
        :series="series"
        :symbol="symbol"
        :title="title"
        :volumn="volumn"
        :netChange="netChange"
        :deltaIndicator="deltaIndicator"
      />
    </div>
  </main>
</template>

<script lang="ts">
export default {
  data: (): { chartDataList: StockCardType[] } => ({
    chartDataList: [
      {
        title: "Apple",
        symbol: "AAPL",
        series: [30, 20, 35, 50, 49, 60, 55, 52, 60, 73],
        volumn: +1039000,
        netChange: +20,
        deltaIndicator: "up",
      },
      {
        title: "Tesla",
        symbol: "TSLA",
        series: [70, 80, 95, 78, 59, 60, 55, 52, 48, 30],
        volumn: +739000,
        netChange: +12,
        deltaIndicator: "down",
      },
      {
        title: "Adidas",
        symbol: "ADS",
        series: [20, 10, 34, 20, 39, 80, 35, 42, 50, 63],
        volumn: +1200,
        netChange: +8,
        deltaIndicator: "up",
      },
      {
        title: "Airbnb",
        symbol: "ABNB",
        series: [10, 10, 24, 50, 39, 30, 35, 42, 53, 33],
        volumn: +1740,
        netChange: +18,
        deltaIndicator: "down",
      },
    ],
  }),
};
</script>
