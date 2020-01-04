<template>
  <Layout>
    <div class="container mx-auto w-full">
      <SectionHeading text="Teams" />
      <div
        class="flex flex-wrap flex-col sm:flex-row justify-center items-center"
      >
        <TeamCard
          v-for="edge in $page.teams.edges"
          :key="edge.node.id"
          :team="edge.node"
        />
      </div>
    </div>
  </Layout>
</template>

<script>
import SectionHeading from '~/components/SectionHeading.vue'
import TeamCard from '~/components/TeamCard.vue'
export default {
  components: {
    SectionHeading,
    TeamCard
  }
}
</script>

<style></style>

<page-query>
query {
  teams: allTeam(sortBy: "name", order: ASC) {
    edges {
      node {
        id
        name
        path
        slug
        logo (width: 192, height: 192)
      }
    }
  }
}
</page-query>
