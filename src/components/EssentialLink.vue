<template>
  <q-item :to='link' v-ripple color="primary">
    <q-icon left size="16px" :name='`svguse:icons/allIcons.svg#${icon}`' />
    <q-toolbar-title>
      {{title}}
    </q-toolbar-title>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  }
})
</script>
