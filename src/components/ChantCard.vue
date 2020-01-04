<template>
  <div
    class="bg-white flex p-8 shaddow-lg border border-gray-400 flex flex-col cursor-pointer h-full"
    @click="$router.push(chant.path)"
  >
    <div v-if="showName" class="font-bold text-indigo-700 text-xl text-center">
      {{ chant.name }}
    </div>

    <div class="flex justify-between flex-col relative flex-grow">
      <div
        class="pt-4 text-center"
        style="white-space: pre-line;"
        v-html="chant.content"
      />

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
    },
    showName: {
      type: Boolean,
      required: false,
      default: true
    }
  }
}
</script>
