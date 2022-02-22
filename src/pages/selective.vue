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

    <div class="filters">

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
    </div>

    <q-table
      hide-pagination
      row-key="id"
      selection="multiple"
      :binary-state-sort="true"
      :rows="selectives"
      :columns="headers"
      v-model:pagination="pagination"
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
                v-model.number="coeff"
                :disable="false"
                :class="{ 'q-input__noprocent': !props.row.coeffUp }" 
              />
              
              <q-icon v-show="props.row.coeffUp" size="18px" name="edit" />
              <q-icon v-show="!props.row.coeffUp" size="18px" name="done" color="green" />
              <q-icon v-show="!props.row.coeffUp" size="18px" name="clear" color="red" />
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
    coeffUp: false,
    isActive: false,
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
    id: 973777,
    clicks: '15 203 402',
    usedBalance: '973 777',
    cpc: '1.4',
    coeff: 100,
    coeffUp: false,
    isActive: false,
  },
  {
    id: 973777,
    clicks: '15 203 402',
    usedBalance: '973 777',
    cpc: '1.4',
    coeff: 100,
    coeffUp: false,
    isActive: false,
  },
]
export default {  
  setup() {
    return {
      selectives,
      headers,
      coeff: ref('ss'),
      coeffUp: ref(false),
      fillDefault: null,
      selected: ref([])
    }
  },
    
}
</script>

<style>



</style>