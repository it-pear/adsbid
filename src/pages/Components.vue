<template>
  <div>Компоненты</div>
  <div>
    <q-select v-model="model" :options="options" label="Standard" />
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      model: ref(null),
      options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],
    };
  },
};
</script>

<style lang="scss" scoped></style>
