<template>
  <div>
    <h2 class="text-3xl mb-8 text-indigo-600 font-bold text-center">
      {{ text }}
    </h2>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>
