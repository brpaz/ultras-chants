<template>
  <div class="flex items-center text-indigo-600 mb-16 bg-white shadow">
    <div
      class="container mx-auto flex flex-col sm:flex-row items-center justify-between p-4"
    >
      <div
        class="flex items-center cursor-pointer pb-4 md:pb-0"
        @click="$router.push('/')"
      >
        <Logo width="64" height="64" class="mr-4" />
        <h1 class="text-3xl">
          Ultras Chants
        </h1>
      </div>

      <Search />
    </div>
  </div>
</template>

<script>
import Logo from '~/assets/icons/Brand.svg'
import Search from '~/components/Search.vue'
export default {
  components: {
    Logo,
    Search
  }
}
</script>
