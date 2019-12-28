<template>
  <Layout>
    <div class="w-full">
      <SectionHeading text="Team chants" />

      <ChantsList :chants="chants" />
    </div>
  </Layout>
</template>

<script>
import ChantsList from '~/components/ChantsList.vue'
import SectionHeading from '~/components/SectionHeading.vue'

export default {
  components: {
    ChantsList,
    SectionHeading
  },
  computed: {
    chants() {
      return this.$page.chants.edges.map((edge) => edge.node)
    }
  }
}
</script>

<page-query>
query {
  chants: allChant(filter: { team: { eq: "napoli" }}){
    totalCount
    edges {
      node {
        id
        path
        name
        content
        group
        team
        year
        youtube_id
      }
    }
  }
}
</page-query>
