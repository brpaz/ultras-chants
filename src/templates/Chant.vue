<template>
  <Layout>
    <div class="w-3/4 mx-auto mb-16">
      <SectionHeading :text="chant.name" />

      <div>
        <ChantCard :chant="chant" :show-name="false" />
      </div>
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
