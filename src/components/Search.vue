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
        @input="onInput"
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
          :class="{ 'border-b': searchResults.length > 1 }"
          class="p-2"
        >
          <g-link :to="result.path">
            {{ result.name }} ({{ getResultType(result) }})
          </g-link>
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
    searchTerm: '',
    searchResults: [],
    noResults: false
  }),
  watch: {
    $route(to, from) {
      this.searchTerm = ''
    }
  },
  methods: {
    onInput: function(event) {
      this.noResults = false
      this.searchResults = []
      if (this.searchTerm.length < 3) {
        return
      }

      const results = this.$search.search({ query: this.searchTerm, limit: 5 })

      if (results.length == 0) {
        this.noResults = true
      }

      this.searchResults = results
    },
    getResultType(result) {
      if (result.index === 'teams') {
        return 'Team'
      }

      return 'Chant'
    }
  }
}
</script>
