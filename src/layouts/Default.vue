<template>
  <div class="layout flex flex-col h-screen">
    <Header />

    <div class="flex flex-grow container mx-auto w-full">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  @apply bg-gray-200 h-screen;
}
</style>
