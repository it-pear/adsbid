<template>
  <q-page class="compaings pt-0">
    <!-- icon="mail" -->
    <div class="head">
      <div class="head-filter row">
        <q-input
          outlined
          v-model="model"
          :dense="dense"
          :options-dense="denseOpts"
          placeholder="Поиск по ID или названию объявления"
        >
          <template v-slot:prepend>
            <q-icon size="20px" name="svguse:icons/allIcons.svg#search" />
          </template>
        </q-input>
        <q-btn color="primary" no-caps unelevated icon="add" label="Создать кампанию" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default ({
  name: 'compaings',
  setup () {
    return {
      model: ref('')
    }
  }
})
</script>