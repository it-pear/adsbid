<template>
  <q-page class="compaings pt-0">
    <!-- icon="mail" q-btn-dropdown__arrow -->
    <div class="head">
      <q-btn-dropdown
        outline
        icon="svguse:icons/allIcons.svg#calendar"
        class="dropdown-datepicker"
        :label="`${date.from} - ${date.to}`"
        no-caps
      >
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
            mask="DD.MM.YYYY"
          >
          </q-date>
        </q-card>
      </q-btn-dropdown>
      <!-- <q-input filled v-model="date.from">
        
      </q-input> -->
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
      model: ref(''),
      date: ref({ "from": "01.02.2022", "to": "16.02.2022" })
    }
  }
})
</script>