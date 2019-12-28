<template>
  <Layout>
    <div class="container mx-auto w-full">
      <SectionHeading text="Teams" />
      <div
        class="flex flex-wrap flex-col sm:flex-row justify-center items-center"
      >
        <div
          v-for="edge in $page.teams.edges"
          :key="edge.node.id"
          class="flex flex-col justify-center text-center bg-white shadow-lg rounded-lg mr-4 mb-8 p-4 border border-gray-400 cursor-pointer"
          style="width:250px"
          @click="goToTeamChants(edge.node.slug)"
        >
          <g-image :src="edge.node.logo" class="mb-4" />

          <h2 class="font-bold">{{ edge.node.name }}</h2>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import SectionHeading from '~/components/SectionHeading.vue'
export default {
  components: {
    SectionHeading
  },
  methods: {
    goToTeamChants(team) {
      this.$router.push({ path: `/teams/${team}` })
    }
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
        slug
        path
        logo (width: 192, height: 192)
      }
    }
  }
}
</page-query>
