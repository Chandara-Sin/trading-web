<script setup lang="ts">
const { title, series, symbol, volumn, netChange } = defineProps<{
  title: string;
  series: number[];
  symbol: string;
  volumn: number;
  netChange: number;
  deltaIndicator: string;
}>();
</script>

<template>
  <div
    class="w-[300px] h-40 rounded-md bg-stone-100/60 p-4 cursor-pointer shadow-sm"
  >
    <section class="flex justify-between">
      <div class="flex items-center gap-x-4">
        <div
          class="bg-gray-200 rounded-full p-2 flex justify-center items-center"
        >
          <v-img
            src="../assets/images/apple-logo.png"
            width="28px"
            height="28px"
            alt=""
          ></v-img>
        </div>
        <div>
          <h3 class="text-sm font-dmsans font-extrabold text-gray-900">
            {{ symbol }}
          </h3>
          <p class="font-dmsans text-xs">{{ title }}</p>
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
          :series="[{ data: series }]"
        ></apexchart>
      </div>
      <div>
        <p class="font-bold font-dmsans">$ {{ volumn }}</p>
        <p class="font-bold font-dmsans text-green-500 text-sm text-right">
          <span>
            <icon :icon="['fas', 'arrow-trend-up']" />
          </span>
          {{ netChange }}
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
