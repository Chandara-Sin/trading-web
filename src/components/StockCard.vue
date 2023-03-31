<script setup lang="ts">
const { chartSeries } = defineProps<{
  chartSeries: { data: number[] }[];
}>();
</script>

<template>
  <div
    class="min-w-96 w-80 h-40 rounded-md bg-stone-100/60 p-4 cursor-pointer shadow-sm"
  >
    <section class="flex justify-between">
      <div class="flex items-center gap-x-4">
        <div
          class="bg-gray-200 rounded-full p-2 flex justify-center items-center"
        >
          <img src="../assets/images/apple-logo.png" width="28px" />
        </div>
        <div class="">
          <h3 class="text-sm font-dmsans font-extrabold text-gray-900">AAPL</h3>
          <p class="font-dmsans text-xs">Apple</p>
        </div>
      </div>
      <span
        class="cursor-pointer px-2 w-8 h-8 rounded-full flex justify-center items-center hover:bg-gray-200"
      >
        <icon :icon="['fas', 'ellipsis-vertical']" />
      </span>
    </section>
    <section class="flex items-center justify-between">
      <div class="h-24 w-44">
        <apexchart
          type="area"
          height="100%"
          width="100%"
          :options="chartOptions"
          :series="chartSeries"
        ></apexchart>
      </div>
      <div>
        <p class="font-bold font-dmsans">$ 10.390,00</p>
        <p class="font-bold font-dmsans text-green-500 text-sm text-right">
          <span>
            <icon :icon="['fas', 'arrow-trend-up']" />
          </span>
          +20
        </p>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
export default {
  data: () => ({
    chartOptions: {
      chart: {
        toolbar: { show: false },
        animation: {
          speed: 750,
          dynamicAnimation: {
            enabled: true,
            speed: 350,
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        enabled: false,
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "vertical",
          opacityFrom: 0.4,
          opacityTo: 0,
          shadeIntensity: 0.2,
        },
      },
      colors: ["#13ae94", "#e1e4f2"],
      grid: {
        borderColor: "rgba(255,255.255,0.08)",
        padding: {
          left: -10,
          right: 0,
          top: -16,
          bottom: -8,
        },
        xaxis: { lines: { show: false } },
        yaxis: { lines: { show: false } },
      },
      xaxis: {
        labels: { show: false },
        axisBorder: { show: false },
        axisTicks: { show: false },
        crosshairs: { show: false },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      tooltip: {
        enabled: false,
      },
    },
  }),
};
</script>
<style scoped></style>
