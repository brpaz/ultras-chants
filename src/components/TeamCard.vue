<template>
  <div
    class="flex flex-col justify-center text-center bg-white shadow-lg rounded-lg mr-4 mb-8 p-4 border border-gray-400 cursor-pointer"
    style="width:250px"
    @click="$router.push(team.path)"
  >
    <g-image :src="team.logo" class="block mx-auto mb-4" />

    <h2 class="font-bold">{{ team.name }}</h2>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    team: {
      type: Object,
      required: true
    }
  }
}
</script>
