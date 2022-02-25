<template>
  <q-page class="statistic">

    <!-- icon="mail" q-btn-dropdown__arrow -->
    <div class="head">
      <div class="row items-center justify-between">
        <div class="text-subtitle2">Группировки</div>
        <div class="statistic__reset">
          Сбросить группировки
        </div>
      </div>
      <div class="row">
        <q-select 
          filled 
          bottom-slots 
          v-model="model" 
          :options="options" 
          label="Label" 
          dropdown-icon="keyboard_arrow_down"
          class="q-select-add"
        >
          <template v-slot:after>
            <q-icon size="16px" name="svguse:icons/allIcons.svg#add" color="grey" />
          </template>
        </q-select>
        <q-select 
          filled 
          bottom-slots 
          v-model="model" 
          :options="options" 
          label="Label" 
          dropdown-icon="keyboard_arrow_down"
          class="q-select-add"
        >
          <template v-slot:append>
            <q-icon name="close" @click.stop="model = ''" class="cursor-pointer" />
          </template>
        </q-select>
      </div>
    </div>
    <div class="filter">
      <div class="row items-center justify-between">
        <div class="text-subtitle2">Фильтры</div>
        <div class="statistic__reset">
          Сбросить группировки
        </div>
      </div>
      <div class="row">
        <div class="filter-wrapper">
          <div class="filter-wrapper__body">
            <div class="filter-wrapper__title q-mb-sm">Выберите период</div>
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

                <q-date v-model="date" minimal range mask="DD.MM.YYYY"> </q-date>
              </q-card>
            </q-btn-dropdown>
          </div>
        </div>
        <div class="filter-wrapper platform">
          <div class="filter-wrapper__body">
            <div class="row items-center justify-between">
              <div class="filter-wrapper__title q-mb-md q-mr-md">Платформа</div>
              <q-checkbox
                class="checkbox q-mb-md"
                v-model="val"
                label="Ввести вручную"
                dense
              />
            </div>

            <q-select
              use-input
              v-model="single"
              :options="options"
              dropdown-icon="keyboard_arrow_down"
              label="Выберите или введите значение"
            />

            <q-icon
              class="filter-wrapper__close"
              size="16px"
              name="svguse:icons/allIcons.svg#close"
              flat
              color="grey"
            />
          </div>
        </div>
        <div class="filter-wrapper choose">
          <div class="filter-wrapper__body">
            <div class="filter-wrapper__title q-mb-sm">Выберите фильтр</div>

            <q-select
              v-model="single"
              :options="options"
              dropdown-icon="keyboard_arrow_down"
              label="Выберите значение"
            />

            <q-icon
              class="filter-wrapper__close"
              size="16px"
              name="svguse:icons/allIcons.svg#close"
              flat
              color="grey"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="control">
      <q-btn
        color="primary"
        no-caps
        label="Применить"
      />
      <q-btn
        color="primary"
        no-caps
        flat
        icon="svguse:icons/allIcons.svg#download"
        label="Скачать .csv"
        class="q-btn__download"
      />
    </div>
    <null-date
      v-if="nulldate"
      title='Отсутствуют данные для статистики'
      text='У вас еще не создано ни одной кампании. Для начала работы в кабинете рекламодателя создайте рекламную кампанию и добавьте объявления.'
    />
    <q-table
      hide-pagination
      row-key="id"
      :hide-selected-banner="true"
      :binary-state-sort="true"
      :rows="rows"
      :columns="columns"
      class="q-table-main"
      v-if="!nulldate"
    >
      
      <template v-slot:header-cell="props">
        <q-th :props="props">
          {{ props.col.label }}
          <i class="notranslate material-icons q-icon q-table__sort-icon q-table__sort-icon--left" aria-hidden="true" role="presentation">
            <q-icon :name="`svguse:icons/allIcons.svg#sortTableIcon`" />
          </i>
        </q-th>
      </template>
      <template v-slot:top-row>
        <tr class="top-tr">
          <td class="q-td text-left">
            <div class="q-table__td">Итог</div>
          </td>
          <td class="q-td text-left">
            <div class="q-table__td">1 000 000</div>
          </td>
          <td class="q-td text-left">
            <div class="q-table__td">200 000</div>
          </td>
          <td class="q-td text-left">
            <div class="q-table__td">20</div>
          </td>
          <td class="q-td text-left">
            <div class="q-table__td">1.32</div
          ></td>
          <td class="q-td text-left">
            <div class="q-table__td">264 000</div>
          </td>
        </tr>
      </template>

      <template v-slot:body-cell-date="props">
        <q-td :props="props">
          <div class="q-table__td">
            {{props.row.date}}
          </div>
        </q-td>
      </template>  
      <template v-slot:body-cell-impressions="props">
        <q-td :props="props">
          <div class="q-table__td">
            {{props.row.impressions}}
          </div>
        </q-td>
      </template>  
      <template v-slot:body-cell-clicks="props">
        <q-td :props="props">
          <div class="q-table__td">
            {{props.row.clicks}}
          </div>
        </q-td>
      </template>  
      <template v-slot:body-cell-ctr="props">
        <q-td :props="props">
          <div class="q-table__td">
            {{props.row.ctr}}
          </div>
        </q-td>
      </template>  
      <template v-slot:body-cell-cpc="props">
        <q-td :props="props">
          <div class="q-table__td">
            {{props.row.cpc}}
          </div>
        </q-td>
      </template>  
      <template v-slot:body-cell-consumption="props">
        <q-td :props="props">
          <div class="q-table__td">
            {{props.row.consumption}}
          </div>
        </q-td>
      </template>  
      
    </q-table>
    <q-pagination
      v-model="current"
      :max="5"
      direction-links
      v-if="!nulldate"
    />
  </q-page>
</template>

<script>
const columns = [
  {
    name: 'date',
    required: true,
    label: 'Дата',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'impressions', align: 'left', label: 'Показы', field: 'calories', sortable: true },
  { name: 'clicks', align: 'left', label: 'Клики', field: 'fat', sortable: true },
  { name: 'ctr', align: 'left', label: 'CTR, %', field: 'carbs', sortable: true },
  { name: 'cpc', align: 'left', label: 'CPC', field: 'protein', sortable: true },
  { name: 'consumption', align: 'left', label: 'Расход, ₽', field: 'sodium', sortable: true }
]
const rows = [
  {
    date: '2021-07-28',
    impressions: '1 000 000',
    clicks: '200 000',
    ctr: '20',
    cpc: '1.32',
    consumption: '264 000'
  },
  {
    date: '2021-07-28',
    impressions: '1 000 000',
    clicks: '200 000',
    ctr: '20',
    cpc: '1.32',
    consumption: '264 000'
  },
  {
    date: '2021-07-28',
    impressions: '1 000 000',
    clicks: '200 000',
    ctr: '20',
    cpc: '1.32',
    consumption: '264 000'
  },
  {
    date: '2021-07-28',
    impressions: '1 000 000',
    clicks: '200 000',
    ctr: '20',
    cpc: '1.32',
    consumption: '264 000'
  },
  {
    date: '2021-07-28',
    impressions: '1 000 000',
    clicks: '200 000',
    ctr: '20',
    cpc: '1.32',
    consumption: '264 000'
  },
]

import { ref } from 'vue'
import { useQuasar } from 'quasar'
import NullDate from "src/components/NullDate.vue";

export default ({
  name: 'statistic',
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
      model: ref('Привет мир'),
      date: ref({ "from": "01.02.2022", "to": "16.02.2022" }),
      columns,
      rows,
      current: ref(1),
      dialog: ref(null),
      nulldate: false,
      single: ref(null),
      val: ref(false),
      options: [
        "Google",
        "Facebook",
        "Twitter"
      ],
    }
  },
  components: {
    NullDate
  }
})
</script>