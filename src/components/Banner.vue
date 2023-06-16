<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <article class="flex flex-wrap place-content-center h-full w-full">
          <p class="text-5xl text-center font-bold font-dmsans">
            Make the Trade
          </p>
          <p class="py-4 w-full font-4xl text-center font-light font-dmsans">
            Become part of the ecosystem and enjoy the revolution
          </p>
          <button
            class="flex items-center justify-center rounded-xl gap-x-2 bg-blue-600 px-4 py-3 my-4 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
          >
            <p class="text-sm font-medium font-dmsans text-white">Trade now</p>

            <icon
              :icon="['fas', 'arrow-up-long']"
              class="w-3 h-3 rotate-45 text-white"
            />
          </button>
        </article>
      </v-col>
      <v-col cols="12" sm="6">
        <video autoplay muted loop>
          <source src="../assets/trading-banner.mp4" type="video/mp4" />
        </video>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
export default {};
</script>
<style scoped></style>
