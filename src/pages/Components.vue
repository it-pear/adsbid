<template>
  <div style="padding: 10px">
    <div>Компоненты</div>

    <q-select
      v-model="single"
      :options="options"
      dropdown-icon="keyboard_arrow_down"
      label="Placeholder"
    />

    <br />

    <q-select
      v-model="multiple"
      :options="options"
      multiple
      dropdown-icon="keyboard_arrow_down"
      label="Placeholder"
      use-chips
    />

    <br />

    <q-btn
      label="Open dialog"
      color="primary"
      no-caps
      unelevated
      @click="dialog = true"
    />

    <br />
    <br />

    <q-dialog v-model="dialog">
      <q-card>
        <div class="row">
          <div class="q-dialog__title">
            Вы уверены, что хотите удалить кампанию?
          </div>
          <q-icon
            class="q-dialog__close"
            size="22px"
            name="svguse:icons/allIcons.svg#close"
            flat
            v-close-popup
          />
        </div>

        <div class="row">
          <q-space />
          <q-btn label="Отмена" no-caps flat color="grey" v-close-popup />
          <q-btn
            class="q-btn__bold"
            label="Удалить"
            no-caps
            unelevated
            color="primary"
          />
        </div>
      </q-card>
    </q-dialog>

    <q-input filled v-model="date" mask="date" :rules="['date']">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy
            ref="qDateProxy"
            cover
            transition-show="scale"
            transition-hide="scale"
          >
            <q-date v-model="date" range>
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      single: ref(null),
      multiple: ref(null),
      date: ref({ from: '2022/07/08', to: '2022/07/17' }),
      options: [
        "Google",
        "Facebook",
        "Twitter",
        "Apple",
        "Oracle",
        "Google1",
        "Facebook1",
        "Twitter1",
        "Apple2",
        "Oracle2",
        "Google2",
        "Facebook2",
        "Twitter2",
        "Apple2",
        "Oracle2",
        "Google12",
        "Facebook12",
        "Twitter12",
        "Apple12",
        "Oracle12",
      ],
      dialog: ref(null),
    };
  },
};
</script>

<style lang="scss" scoped></style>
