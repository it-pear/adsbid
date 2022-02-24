<template>
  <q-page class="selective pt-0">
    <div class="head">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="Кампании" to="/campaigns"/>
        <q-breadcrumbs-el label="Селективные цены"/>
      </q-breadcrumbs>
      <q-btn
        :icon="`svguse:icons/allIcons.svg#arrowLeft`"
        color="primary"
        no-caps
        flat
        label="Вернуться в список кампаний"
        style="height: auto;"
        to="/campaigns"
      />
    </div>

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
            Включить
          </q-item>
          <q-item clickable v-close-popup>
            Выключить
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

    <q-table
      hide-pagination
      row-key="id"
      selection="multiple"
      :binary-state-sort="true"
      :rows="selectives"
      :columns="headers"
      v-model:selected="selected"
      class="q-table-main"
    >
      <template v-slot:header-cell="props">
        <q-th :props="props">
          {{ props.col.label }}
          <i class="notranslate material-icons q-icon q-table__sort-icon q-table__sort-icon--left" aria-hidden="true" role="presentation">
            <q-icon size="24px" :name="`svguse:icons/allIcons.svg#sortTableIcon`" />
          </i>
        </q-th>
      </template>
      <template v-slot:body-cell-id="props">
        <q-td :props="props">
          <div class="q-table__content q-table__source">
            {{props.row.id}}
          </div>
        </q-td>
      </template>
      <template v-slot:body-cell-clicks="props">
        <q-td :props="props">
          <div class="q-table__content">
            {{props.row.clicks}}
          </div>
        </q-td>
      </template>
      <template v-slot:body-cell-usedBalance="props">
        <q-td :props="props">
          <div class="q-table__content">
            {{props.row.usedBalance}}
          </div>
        </q-td>
      </template>
      <template v-slot:body-cell-cpc="props">
        <q-td :props="props">
          <div class="q-table__content">
            {{props.row.cpc}}
          </div>
        </q-td>
      </template>
      <template v-slot:body-cell-coeff="props">
        <q-td :props="props">
          <div class="q-table__content">
            <div class="q-table__update">
              
              <q-tooltip anchor="top middle" self="bottom middle" class="top-tooltip">
                Изменить коэфициент
              </q-tooltip>
              
              <q-input
                borderless
                min="1"
                max="1000"
                type="text"
                v-model.number="props.row.coeff"
                :disable="props.row.coeffUp"
                :class="{ 'q-input__noprocent': !props.row.coeffUp }" 
              />
              
              <q-icon v-show="props.row.coeffUp" size="18px" name="edit" @click="props.row.coeffUp = false" />
              <q-icon v-show="!props.row.coeffUp" size="18px" name="done" color="green" @click="props.row.coeffUp = true" />
              <q-icon v-show="!props.row.coeffUp" size="18px" name="clear" color="red" @click="props.row.coeffUp = true" />
            </div>
          </div>
        </q-td>
      </template>
      <template v-slot:body-cell-isActive="props">
        <q-td :props="props">
          <div class="q-table__content">
            <q-toggle v-model="props.row.isActive" color="blue" class="q-toggle-castom">
              <q-tooltip anchor="top middle" self="bottom middle" class="top-tooltip">
                <div v-show="props.row.isActive === false">Включить</div>
                <div v-show="props.row.isActive === true">Выключить</div>
              </q-tooltip>
            </q-toggle>
          </div>
        </q-td>
      </template>
    </q-table>
    <q-pagination
      v-model="current"
      :max="5"
      direction-links
    />
  </q-page>
  
</template>

<script>

import { ref } from 'vue'

const headers = [
  { 
    label: 'Источник',
    field: 'id',
    name: 'id',
    align: 'left',
    required: true,
    sortable: true,
    field: row => row.id,
    format: val => `${val}`,
  },
  { label: 'Клики', field: 'clicks', name: 'clicks', align: 'left', sortable: true },
  { label: 'Потрачено, ₽', field: 'usedBalance', name: 'usedBalance', align: 'left', sortable: true },
  { label: 'CPC, ₽', field: 'cpc', name: 'cpc', align: 'left', sortable: true },
  { label: 'Коэффициент', field: 'coeff', name: 'coeff', align: 'left', sortable: false },
  { label: 'Статус', field: 'isActive', name: 'isActive', align: 'left', sortable: false }
]
const selectives = [
  {
    id: 973777,
    clicks: '15 203 402',
    usedBalance: '973 777',
    cpc: '1.4',
    coeff: 100,
    coeffUp: true,
    isActive: true,
  },
  {
    id: 972777,
    clicks: '15 203 402',
    usedBalance: '973 777',
    cpc: '1.4',
    coeff: 100,
    coeffUp: false,
    isActive: false,
  },
  {
    id: 97377,
    clicks: '15 203 402',
    usedBalance: '973 777',
    cpc: '1.4',
    coeff: 100,
    coeffUp: true,
    isActive: false,
  },
  {
    id: 97327,
    clicks: '15 203 402',
    usedBalance: '973 777',
    cpc: '1.4',
    coeff: 100,
    coeffUp: false,
    isActive: true,
  },
]
export default {  
  setup() {
    return {
      selectives,
      headers,
      coeff: ref('ss'),
      coeffUp: ref(true),
      fillDefault: null,
      current: ref(1),
      selected: ref([]),
      single: ref('id 131 / ads cуставы пенсионерка 83 года кзjk'),
      date: ref({ "from": "01.02.2022", "to": "16.02.2022" }),
      options: [
        "компания 2 сердства для выносливости",
        "компания 3 пенсионерка мне 83 суставы",
        "Twitter"
      ],
    }
  },
    
}
</script>

<style>



</style>