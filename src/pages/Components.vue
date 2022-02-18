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
          <q-btn label="Отмена" no-caps flat color="dm-grey" v-close-popup />
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

    <q-input filled v-model="date">
      <template v-slot:prepend>
        <q-icon
          size="16px"
          name="svguse:icons/allIcons.svg#calendar"
          class="cursor-pointer"
        >
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-card class="row datepicker">
              <q-list dense bordered padding class="rounded-borders">
                <q-item>
                  <q-item-section>Сегодня</q-item-section>
                </q-item>

                <q-item>
                  <q-item-section>Вчера</q-item-section>
                </q-item>

                <q-item>
                  <q-item-section>Позавчера</q-item-section>
                </q-item>

                <q-item class="q-item--active">
                  <q-item-section>Текущая неделя</q-item-section>
                </q-item>

                <q-item>
                  <q-item-section>Прошлая неделя</q-item-section>
                </q-item>

                <q-item>
                  <q-item-section>Текущий месяц</q-item-section>
                </q-item>

                <q-item>
                  <q-item-section>Прошлый месяц</q-item-section>
                </q-item>

                <q-item>
                  <q-item-section>- 7 дней</q-item-section>
                </q-item>

                <q-item>
                  <q-item-section>- 30 дней</q-item-section>
                </q-item>

                <q-item>
                  <q-item-section>- 90 дней</q-item-section>
                </q-item>
              </q-list>

              <q-date
                v-model="date"
                minimal
                range
                mask="DD.MM.YYYY - DD.MM.YYYY"
              >
              </q-date>
            </q-card>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>

    <br />

    <q-checkbox class="checkbox" v-model="val" label="Дата" dense />

    <br />
    <br />

    <q-tabs v-model="tab" class="tabs" no-caps>
      <q-tab class="tab" name="mails" label="Mails" />
      <q-tab class="tab" name="alarms" label="Alarms" />
    </q-tabs>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      single: ref(null),
      multiple: ref(null),
      date: ref("19.10.2022 - 27.10.2022"),
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
      val: ref(true),
      tab: ref('mails')
    };
  },
};
</script>

<style lang="scss" scoped></style>
