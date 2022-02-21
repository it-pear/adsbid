<template>
  <div class="null-date"> 
    <img src="~assets/nulldate.svg" />
    <div class="title">{{title}}</div>
    <div class="text">
      {{text}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    text: String
  },
  setup() {
    return {

    }
  },
}
</script>