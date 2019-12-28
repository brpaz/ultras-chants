<template>
  <div
    class="bg-white flex p-8 mb-8 shaddow-lg border border-gray-400 flex flex-col cursor-pointer"
    @click="$router.push(chant.path)"
  >
    <div class="font-bold text-indigo-700 text-xl">{{ chant.name }}</div>
    <div class="text-sm text-gray-600">{{ chant.year }}</div>

    <div class="flex justify-between flex-col relative">
      <div
        class="pt-4 text-center"
        style="white-space: pre-line;"
        v-html="chant.content"
      ></div>

      <YoutubeVideo v-if="chant.youtube_id" :id="chant.youtube_id" />
    </div>
  </div>
</template>

<script>
import YoutubeVideo from '~/components/YoutubeVideo.vue'
export default {
  components: {
    YoutubeVideo
  },
  props: {
    chant: {
      type: Object,
      required: true
    }
  }
}
</script>
