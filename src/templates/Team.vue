<template>
  <Layout>
    <div class="w-full">
      <SectionHeading :text="'Chants For ' + $page.team.name" />

      <ChantsList :chants="$page.team.chants" />
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
      return []
    }
  }
}
</script>
<page-query>
query Team($id: ID!) {
  team: team(id: $id) {
    id
    slug
    name
    chants(sortBy: "name", order: ASC) {
      name
      path
      content
      group
      year
      youtube_id
    }
  }
}
</page-query>
