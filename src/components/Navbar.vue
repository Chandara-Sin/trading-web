<script lang="ts">
export default {
  data: () => ({
    items: [
      { title: "Trade" },
      { title: "Liquidity" },
      { title: "Launchpad" },
      { title: "Earn" },
      { title: "Info" },
    ],
  }),
};
</script>
<template>
  <header aria-label="Site Header" class="bg-white">
    <div class="flex h-16 items-center gap-8 px-4 sm:px-6 lg:px-8">
      <a class="block text-teal-600" href="/">
        <img
          src="../assets/logo.png"
          alt="logo"
          srcset=""
          class="w-10 h-auto"
        />
      </a>
      <div class="w-px h-6 bg-gray-600 hidden md:block mx-3"></div>
      <div class="flex flex-1 items-center justify-end nav-container">
        <nav aria-label="Site Nav" class="hidden md:block">
          <ul class="flex items-center gap-14 text-sm">
            <li>
              <a
                class="text-gray-500 font-medium transition font-dmsans hover:text-blue-600"
                href="/"
              >
                Trade
              </a>
            </li>
            <li>
              <a
                class="text-gray-500 font-medium transition font-dmsans hover:text-blue-600"
                href="/"
              >
                Liquidity
              </a>
            </li>
            <li>
              <a
                class="text-gray-500 font-medium transition font-dmsans hover:text-blue-600"
                href="/"
              >
                Launchpad
              </a>
            </li>
            <li>
              <a
                class="text-gray-500 font-medium transition font-dmsans hover:text-blue-600"
                href="/"
              >
                Earn
              </a>
            </li>
            <li>
              <a
                class="text-gray-500 font-medium transition font-dmsans hover:text-blue-600"
                href="/"
              >
                Info
              </a>
            </li>
          </ul>
        </nav>

        <div class="flex items-center gap-4">
          <div class="sm:flex sm:gap-4">
            <a
              class="block rounded-3xl font-dmsans bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
              href="/"
            >
              Open Dapp
            </a>
            <!-- <a
              class="hidden rounded-3xl bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
              href="/"
            >
              Profile
            </a> -->
          </div>

          <v-menu bottom>
            <template v-slot:activator="{ props }">
              <button
                class="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                v-bind="props"
              >
                <span class="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </template>
            <v-list
              class="w-56 rounded-md border border-gray-100 bg-white my-1"
              elevation="1"
            >
              <v-list-item v-for="(item, index) in items" :key="index">
                <v-list-item-title
                  class="block rounded-lg px-4 py-2 font-dmsans text-sm cursor-pointer text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  >{{ item.title }}</v-list-item-title
                >
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
@media (min-width: 768px) {
  .nav-container {
    justify-content: space-between !important;
  }
}
</style>
