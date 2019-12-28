<template>
  <div @click="$emit('customevent', {})">
      <h3>{{title.split('')}}</h3>
      <p>{{text}}</p>
  </div>
</template>

<script>
export default {
  name: 'NewsItem',

  props: {
    title: {
      type: String,
      default: '...',
      required: true
    }
  },

  data () {
    return {
      text: ''
    }
  }
}
</script>
