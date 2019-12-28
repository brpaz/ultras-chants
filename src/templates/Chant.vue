<template>
  <Layout>
    <div class="w-full">
      <SectionHeading :text="chant.name" />
      <ChantCard :chant="chant" />
    </div>
  </Layout>
</template>

<script>
import ChantCard from '~/components/ChantCard.vue'
import SectionHeading from '~/components/SectionHeading.vue'
export default {
  components: {
    SectionHeading,
    ChantCard
  },
  computed: {
    chant() {
      return this.$page.chant
    }
  }
}
</script>

<page-query>

query Chant($path: String!) {
  chant: chant(path: $path) {
    name
    content
    youtube_id
  }
}

</page-query>
