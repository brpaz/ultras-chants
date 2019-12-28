<template>
  <div class="flex relative aspect-16x9 w-full">
    <iframe
      class="absolute pin"
      :src="videoUrl"
      width="100%"
      height="100%"
      frameborder
      allowfullscreen
    />
  </div>
</template>
<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    videoUrl() {
      return `https://www.youtube.com/embed/${this.id}`
    }
  }
}
</script>

<style scoped>
.video-container {
  position: relative;
  width: 100%;
}

.video-container::after {
  padding-top: 56.25%;
  display: block;
  content: '';
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.aspect-16x9 {
  padding-bottom: 56.25%;
}
</style>
