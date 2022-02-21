<template>

  <q-page class="ads pt-0">
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
        <q-btn color="primary" no-caps unelevated icon="add" label="Создать объявление" />
      </div>
    </div>
    <q-tabs
      v-model="tab"
      class="q-tabs-main"
      no-caps
    >
      <q-tab name="1" label="Все" />
      <q-tab name="2" label="Активные" />
      <q-tab name="3" label="На паузе" />
      <q-tab name="4" label="На модерации" />
      <q-tab name="5" label="Отклоненные" />
    </q-tabs>
    <div class="filter">
      <q-btn-dropdown
        outline
        icon="svguse:icons/allIcons.svg#setting"
        class="dropdown-option"
        dropdown-icon="keyboard_arrow_down"
        label="Действия"
        no-caps
      >
        <q-list>
          <q-item clickable v-close-popup>
            sd
          </q-item>
          <q-item clickable v-close-popup>
            bvc
          </q-item>
        </q-list>
      </q-btn-dropdown>
      <div class="row q-select-sec items-center">
        <label>Кампания:</label>
        <q-select
          v-model="single"
          :options="options"
          dropdown-icon="keyboard_arrow_down"
          label="Placeholder"
        />
      </div>
      
      <q-btn-dropdown
        outline
        icon="svguse:icons/allIcons.svg#calendar"
        class="dropdown-datepicker"
        :label="date.from ? `${date.from} - ${date.to}` : date"
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
    </div>
    <null-date
      v-if="nulldate"
      title='Список объявлений пока пуст'
      text='У вас еще не создано ни одной кампании. Для начала работы в кабинете рекламодателя создайте рекламную кампанию и добавьте объявления.'
    />

  </q-page>
</template>

<script>


import { ref } from 'vue'
import { useQuasar } from 'quasar'
import NullDate from "src/components/NullDate.vue";

export default ({
  name: 'ads',
  setup () {
    const $q = useQuasar()

    return {
      triggerPositive () {
        $q.notify({
          position: 'bottom-right',
          timeout: 5000,
          type: 'negative',
          icon: 'svguse:icons/iconTable.svg#del',
          message: 'Кампания удалена',
          caption: 'Кампания и объявления в ней удалены. Показы прекращены'
        })
      },
      model: ref(''),
      date: ref({ "from": "01.02.2022", "to": "16.02.2022" }),
      current: ref(1),
      dialog: ref(null),
      nulldate: false,
      tab: ref('1'),
      single: ref('id 131 / ads cуставы пенсионерка 83 года кзjk'),
      options: [
        "компания 2 сердства для выносливости",
        "компания 3 пенсионерка мне 83 суставы",
        "Twitter"
      ],
    }
  },
  components: {
    NullDate
  }
})
</script>