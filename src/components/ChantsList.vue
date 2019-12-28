<template>
  <div class="flex flex-row flex-wrap justify-ccenter">
    <div
      v-for="(chant, index) in chants"
      :key="index"
      class="w-full lg:mr-8 lg:w-5/12"
    >
      <ChantCard :chant="chant" />
    </div>
  </div>
</template>

<script>
import ChantCard from '~/components/ChantCard.vue'
export default {
  components: {
    ChantCard
  },
  props: {
    chants: {
      type: Array,
      required: true,
      default: () => {
        return []
      }
    }
  }
}
</script>
