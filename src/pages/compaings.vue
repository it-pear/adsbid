<template>
  <q-page class="compaings pt-0">
    <!-- icon="mail" q-btn-dropdown__arrow -->
    <div class="head">
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
    <q-table
      hide-pagination
      row-key="id"
      :hide-selected-banner="true"
      :binary-state-sort="true"
      :rows="rows"
      :columns="columns"
      class="q-table-main"
    >
      <template v-slot:header-cell="props">
        <q-th :props="props">
          {{ props.col.label }}
          <i class="notranslate material-icons q-icon q-table__sort-icon q-table__sort-icon--left" aria-hidden="true" role="presentation">
            <q-icon :name="`svguse:icons/allIcons.svg#sortTableIcon`" />
          </i>
        </q-th>
      </template>

      <template v-slot:body-cell-id="props">
        <q-td :props="props" :class="{ 'q-td-warning': props.row.limit > 0 }">
          {{props.row.id}}
        </q-td>
      </template>  
      <template v-slot:body-cell-name="props">
        <q-td :props="props">
          <div class="q-table__td q-table__td__link">
            <a :href="props.row.name.link">{{props.row.name.name}}</a>
          </div>
        </q-td>
      </template>  
      <template v-slot:body-cell-status="props">
        <q-td :props="props">
          <div class="q-table__td q-table__td__status">
            <div class="q-table__td-color bg-negative"/>
            {{props.row.status}}
          </div>
        </q-td>
      </template>

      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <div class="q-table__td__field">
            <q-btn
              color="positive"
              no-caps
              outline
              dense
            >
              <q-tooltip anchor="top middle" self="bottom middle" class="top-tooltip">
                <div>
                  Запустить
                </div>
              </q-tooltip>
              <q-icon size="18px" class="q-icon__run" name="svguse:icons/iconTable.svg#play" /> 
            </q-btn>

            <q-btn
              color="primary"
              no-caps
              outline
              dense
            >
              <q-tooltip anchor="top middle" self="bottom middle" class="top-tooltip">
                <div>
                  Остановить
                </div>
              </q-tooltip>
              <q-icon size="18px" class="q-icon__stop" name="svguse:icons/iconTable.svg#stop" />
            </q-btn>

            <q-btn
              color="dark"
              no-caps
              outline
              dense
            >
              <q-tooltip anchor="top middle" self="bottom middle" class="top-tooltip">
                <div>
                  Изменить
                </div>
              </q-tooltip>
              <q-icon size="18px" class="q-icon__update" name="svguse:icons/iconTable.svg#custom" />
            </q-btn>

            <q-btn
              color="negative"
              no-caps
              outline
              dense
            >
              <q-tooltip anchor="top middle" self="bottom middle" class="top-tooltip">
                <div>
                  Удалить
                </div>
              </q-tooltip>
              <q-icon size="18px" class="q-icon__del" name="svguse:icons/iconTable.svg#del" />
            </q-btn>

            <q-btn
              color="dark"
              no-caps
              outline
              dense
            >
              <q-tooltip anchor="top middle" self="bottom middle" class="top-tooltip">
                <div>
                  Селектиы
                </div>
              </q-tooltip>
              <q-icon size="18px" class="q-icon__del" name="svguse:icons/iconTable.svg#selective" />
            </q-btn>

          </div>
        </q-td>
      </template> 

      <template v-slot:body-cell-declarations="props">
        <q-td :props="props">
          <div class="q-table__td">
            {{props.row.declarations}} объявл.
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
      <template v-slot:body-cell-consumption="props">
        <q-td :props="props">
          <div class="q-table__td q-table__td__consumption">
            <p class="q-table__td__consumption__number">{{props.row.consumption}} ₽</p>
            <p class="q-table__td__consumption__limit">Без лимита</p>
          </div>
        </q-td>
      </template>  
          
      <!-- <template v-slot:body-cell-spent="props">
        <q-td :props="props">
          <p>
            {{props.row.spent}} ₽<br/>
          </p>
          <div class="warning-limits" v-if="props.row.limit > 0">Из {{props.row.limit}} ₽</div>
          <p v-else class="disabled">Без лимита</p>
        </q-td>
      </template> -->
    </q-table>
  </q-page>
</template>

<script>
const columns = [
  {
    name: 'id',
    required: true,
    label: 'ID',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'name', align: 'left', label: 'Название', field: 'calories', sortable: true },
  { name: 'status', align: 'left', label: 'Статус', field: 'fat', sortable: true },
  { name: 'actions', align: 'left', label: 'Действия', field: 'carbs' },
  { name: 'declarations', align: 'left', label: 'Объвления', field: 'protein' },
  { name: 'impressions', align: 'left', label: 'Показы', field: 'sodium' },
  { name: 'clicks', align: 'left', label: 'Клики', field: 'calcium', sortable: true},
  { name: 'ctr', align: 'left', label: 'CTR, %', field: 'iron', sortable: true},
  { name: 'consumption', align: 'left', label: 'Расход, ₽', field: 'iron', sortable: true}
]
// Name
// Status
// Actions
// declarations
// Impressions
// Clicks
// CTR, %
// Consumption, ₽
const rows = [
  {
    id: 2000778,
    name: {
      name: 'ads суставы пенсионерка 83 года кзв',
      link: 'google.com'
    },
    status: 'Остановлен',
    actions: '',
    declarations: 0,
    impressions: 15433298,
    clicks: 2371958,
    ctr: 15.37,
    consumption: 103777102,
  },
  {
    id: 2000778,
    name: {
      name: 'ads суставы пенсионерка 83 года кзв',
      link: 'google.com'
    },
    status: 'Остановлен',
    actions: '',
    declarations: 0,
    impressions: 15433298,
    clicks: 2371958,
    ctr: 15.37,
    consumption: 103777102,
  },
  {
    id: 2000778,
    name: {
      name: 'ads суставы пенсионерка 83 года кзв',
      link: 'google.com'
    },
    status: 'Остановлен',
    actions: '',
    declarations: 0,
    impressions: 15433298,
    clicks: 2371958,
    ctr: 15.37,
    consumption: 103777102,
  },
  {
    id: 2000778,
    name: {
      name: 'ads суставы пенсионерка 83 года кзв',
      link: 'google.com'
    },
    status: 'Остановлен',
    actions: '',
    declarations: 0,
    impressions: 15433298,
    clicks: 2371958,
    ctr: 15.37,
    consumption: 103777102,
  },
  {
    id: 2000778,
    name: {
      name: 'ads суставы пенсионерка 83 года кзв',
      link: 'google.com'
    },
    status: 'Остановлен',
    actions: '',
    declarations: 0,
    impressions: 15433298,
    clicks: 2371958,
    ctr: 15.37,
    consumption: 103777102,
  },
  {
    id: 2000778,
    name: {
      name: 'ads суставы пенсионерка 83 года кзв',
      link: 'google.com'
    },
    status: 'Остановлен',
    actions: '',
    declarations: 0,
    impressions: 15433298,
    clicks: 2371958,
    ctr: 15.37,
    consumption: 103777102,
  },
  {
    id: 2000778,
    name: {
      name: 'ads суставы пенсионерка 83 года кзв',
      link: 'google.com'
    },
    status: 'Остановлен',
    actions: '',
    declarations: 0,
    impressions: 15433298,
    clicks: 2371958,
    ctr: 15.37,
    consumption: 103777102,
  },
]

import { ref } from 'vue'

export default ({
  name: 'compaings',
  setup () {
    return {
      model: ref(''),
      date: ref({ "from": "01.02.2022", "to": "16.02.2022" }),
      columns,
      rows
    }
  }
})
</script>