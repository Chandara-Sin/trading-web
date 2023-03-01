<script lang="ts">
export default {};
</script>
<template>
  <v-container class="bg-surface-variant">
    <v-row>
      <v-col cols="12" sm="6">
        <div class="flex flex-wrap place-content-center h-full w-full">
          <p class="text-5xl text-center font-bold font-dmsans">
            Make the Trade
          </p>
          <p class="m-2 p-2 font-4xl text-center font-light font-dmsans">
            Become part of the ecosystem and enjoy the revolution
          </p>
          <a
            class="rounded bg-blue-600 px-8 py-3 my-4 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
            href=""
          >
            Trade now
          </a>
        </div>
      </v-col>
      <v-col cols="12" sm="6">
        <video autoplay muted loop>
          <source src="../assets/trading-banner.mp4" type="video/mp4" />
        </video>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped></style>
