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
    <null-date
      v-if="nulldate"
      title='Список объявлений пока пуст'
      text='У вас еще не создано ни одной кампании. Для начала работы в кабинете рекламодателя создайте рекламную кампанию и добавьте объявления.'
    />
    <q-table
      hide-pagination
      row-key="id"
      :hide-selected-banner="true"
      :binary-state-sort="true"
      :rows="rows"
      selection="multiple"
      :columns="columns"
      class="q-table-main"
      v-if="!nulldate"
      v-model:selected="selected"
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
        <q-td :props="props" :class="{ 'q-td-warning': true }">
          <div class="q-table__td">{{props.row.id}}</div>
        </q-td>
      </template>  
     <template v-slot:body-cell-ad="props">
        <q-td :props="props">
          <div class="row no-wrap items-start">
            <img :src="props.row.ad.image" alt="">
            <div class="q-table__td q-table__td-ad">
              <div class="q-table__td-ad__title">{{props.row.ad.title}}</div>
              <q-chip square>Рейтинг NC17</q-chip>
              <a :href="props.row.ad.link" target="_blank" class="q-table__td-ad__link">
                {{props.row.ad.link}}
              </a>
            </div>
          </div>
        </q-td>
      </template>  
      <template v-slot:body-cell-status="props">
        <q-td :props="props">
          <div class="q-table__td q-table__td__status">
            <!-- bg-positive bg-negative bg-warning -->
            <div class="q-table__td-color bg-positive"/>
            {{props.row.status}}
          </div>
        </q-td>
      </template>

      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <div class="q-table__td__field">
            <!-- <q-btn
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
            </q-btn> -->

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
              @click="dialog = true"
            >
              <q-tooltip anchor="top middle" self="bottom middle" class="top-tooltip">
                <div>
                  Удалить
                </div>
              </q-tooltip>
              <q-icon size="18px" class="q-icon__del" name="svguse:icons/iconTable.svg#del" />
            </q-btn>

          </div>
        </q-td>
      </template> 

      <template v-slot:body-cell-cpc="props">
        <q-td :props="props">
          <q-list class="q-table__td__cpc">
            <q-item v-ripple clickable class="row items-center">
              <q-icon size="22px" name="svguse:icons/allIcons.svg#cpcmob" />
              {{props.row.cpc.mobile}}
              <q-icon size="14px" class="q-icon__update" name="svguse:icons/iconTable.svg#custom" />
              </q-item>
            <q-item v-ripple clickable class="row items-center">
              <q-icon size="20px" name="svguse:icons/allIcons.svg#cpcdesc" />
              {{props.row.cpc.desctop}}
              <q-icon size="14px" class="q-icon__update" name="svguse:icons/iconTable.svg#custom" />
              </q-item>
          </q-list>
        </q-td>
      </template>
       <template v-slot:body-cell-clicks="props">
        <q-td :props="props">
          <div class="q-table__td">
            {{props.row.clicks}}
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
            <p class="q-table__td__consumption__limit text-negative">Из 103 000 000 ₽ </p>
          </div>
        </q-td>
      </template>  
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
  { name: 'ad', align: 'left', label: 'Объявление', sortable: true },
  { name: 'status', align: 'left', label: 'Статус', sortable: true },
  { name: 'actions', align: 'left', label: 'Действия'},
  { name: 'cpc', align: 'left', label: 'CPC', },
  { name: 'impressions', align: 'left', label: 'Показы' },
  { name: 'clicks', align: 'left', label: 'Клики', sortable: true},
  { name: 'ctr', align: 'left', label: 'CTR, %', sortable: true},
  { name: 'consumption', align: 'left', label: 'Расход, ₽', sortable: true}
]
const rows = [
  {
    id: 973777,
    ad: {
      image: 'images/image30-1.jpg',
      title: 'Пенсионерка из г. [CITY]: Мне 83, а суставы как в 20 лет! Просто смешайте в стакане ложку обычной',
      link: 'https://newsprofit.ru/analytics/statistics'
    },
    status: 'Запущен',
    actions: '',
    cpc: {
      mobile: 5.34,
      desctop: 4.05
    },
    impressions: 15203402,
    clicks: 973777,
    ctr: 1.4,
    consumption: 103777102,
  },
  {
    id: 973777,
    ad: {
      image: 'images/image30-1.jpg',
      title: 'Пенсионерка из г. [CITY]: Мне 83, а суставы как в 20 лет! Просто смешайте в стакане ложку обычной',
      link: 'https://newsprofit.ru/analytics/statistics'
    },
    status: 'Запущен',
    actions: '',
    cpc: {
      mobile: 5.34,
      desctop: 4.05
    },
    impressions: 15203402,
    clicks: 973777,
    ctr: 1.4,
    consumption: 103777102,
  },
  {
    id: 973777,
    ad: {
      image: 'images/image30-1.jpg',
      title: 'Пенсионерка из г. [CITY]: Мне 83, а суставы как в 20 лет! Просто смешайте в стакане ложку обычной',
      link: 'https://newsprofit.ru/analytics/statistics'
    },
    status: 'Запущен',
    actions: '',
    cpc: {
      mobile: 5.34,
      desctop: 4.05
    },
    impressions: 15203402,
    clicks: 973777,
    ctr: 1.4,
    consumption: 103777102,
  },
  {
    id: 973777,
    ad: {
      image: 'images/image30-1.jpg',
      title: 'Пенсионерка из г. [CITY]: Мне 83, а суставы как в 20 лет! Просто смешайте в стакане ложку обычной',
      link: 'https://newsprofit.ru/analytics/statistics'
    },
    status: 'Запущен',
    actions: '',
    cpc: {
      mobile: 5.34,
      desctop: 4.05
    },
    impressions: 15203402,
    clicks: 973777,
    ctr: 1.4,
    consumption: 103777102,
  },
  {
    id: 973777,
    ad: {
      image: 'images/image30-1.jpg',
      title: 'Пенсионерка из г. [CITY]: Мне 83, а суставы как в 20 лет! Просто смешайте в стакане ложку обычной',
      link: 'https://newsprofit.ru/analytics/statistics'
    },
    status: 'Запущен',
    actions: '',
    cpc: {
      mobile: 5.34,
      desctop: 4.05
    },
    impressions: 15203402,
    clicks: 973777,
    ctr: 1.4,
    consumption: 103777102,
  },
  {
    id: 973777,
    ad: {
      image: 'images/image30-1.jpg',
      title: 'Пенсионерка из г. [CITY]: Мне 83, а суставы как в 20 лет! Просто смешайте в стакане ложку обычной',
      link: 'https://newsprofit.ru/analytics/statistics'
    },
    status: 'Запущен',
    actions: '',
    cpc: {
      mobile: 5.34,
      desctop: 4.05
    },
    impressions: 15203402,
    clicks: 973777,
    ctr: 1.4,
    consumption: 103777102,
  },
]

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
      selected: ref([]),
      options: [
        "компания 2 сердства для выносливости",
        "компания 3 пенсионерка мне 83 суставы",
        "Twitter"
      ],
      columns,
      rows
    }
  },
  components: {
    NullDate
  }
})
</script>