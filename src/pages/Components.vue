<template>
  <div style="padding: 10px">
    <div>Компоненты</div>
    <div>
      <q-select
        v-model="model"
        :options="options"
        dropdown-icon="keyboard_arrow_down"
        label="Placeholder"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      model: ref(null),
      options: ["Google", "Facebook", "Twitter", "Apple", "Oracle", "Google", "Facebook", "Twitter", "Apple", "Oracle"],
    };
  },
};
</script>

<style lang="scss" scoped></style>
