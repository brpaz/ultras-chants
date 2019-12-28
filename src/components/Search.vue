<template>
  <div class="relative">
    <div
      class="relative text-gray-600 shadow rounded border-0"
      style="width:350px;"
    >
      <input
        v-model="searchTerm"
        type="search"
        class="p-4 w-full"
        placeholder="Search ..."
      />
      <div class="absolute top-0 right-0 mr-4 mt-6">
        <SearchIcon width="16" height="16" />
      </div>
    </div>

    <div
      v-if="searchResults.length > 0"
      class="absolute text-gray-600 text-sm border-b border-gray-300 w-full p-2 bg-white shadow"
    >
      <ul>
        <li
          v-for="result in searchResults"
          :key="result.id"
          class="border-b p-2"
        >
          <g-link :to="result.path">
            {{ result.name }} ({{ getResultType(result) }})</g-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SearchIcon from '~/assets/icons/Search.svg?inline'
export default {
  components: {
    SearchIcon
  },
  data: () => ({
    searchTerm: ''
  }),
  computed: {
    searchResults() {
      const searchTerm = this.searchTerm
      if (searchTerm.length < 3) return []
      const results = this.$search.search({ query: searchTerm, limit: 5 })
      return results
    }
  },
  methods: {
    getResultType(result) {
      if (result.index === 'teams') {
        return 'Team'
      }

      return 'Chant'
    }
  },
  watch: {
    $route(to, from) {
      this.searchTerm = ''
    }
  }
}
</script>
