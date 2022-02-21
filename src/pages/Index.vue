<template>
  <q-page class="home">

    <section class="feed">
      <div class="feed-head">
        <img src="~assets/feed-ico.png" />
        <div class="feed-head__label">Feed Profitclicks Flow</div>
      </div>
      <div class="feed-filter">
        <q-select
          v-model="single"
          :options="options"
          dropdown-icon="keyboard_arrow_down"
          label="Выберите значение"
        />
        <q-select
          v-model="single2"
          :options="options2"
          dropdown-icon="keyboard_arrow_down"
          label="Выберите значение"
        />
      </div>
      <div class="feed-cards">

        <q-card
          class="feed-cards__card"
          v-for="card in cards"
          :key="card"
        >
          <img :src="card.img">
          <q-card-section class="feed-cards__chips">
            <q-chip outline square color="primary" label="ads2.bid" text-color="primary" />
            <q-chip outline square color="primary" label="Новость" text-color="primary" />
          </q-card-section>
          <div class="feed-cards__title">
            У NewsProfit появился аккаунт в инстаграме
          </div>
          <div class="feed-cards__text">
            Приветствуем вас, друзья! Хотим поделиться новостью. У Newsprofit появился свой аккаунт в инстаграме...
          </div>
          <div class="feed-cards__date">4 февраля, 22:32</div>
        </q-card> 
        <q-pagination
          v-model="current"
          :max="5"
          direction-links
        />
      </div>
    </section>
    <div class="sidebar">
      <section class="geo">
        <div class="row justify-between items-center head">
          <div class="sidebar__title">Популярные ГЕО</div>
          <q-tabs v-model="tab" class="tabs" no-caps>
            <q-tab class="tab" name="today" label="За сегодня" />
            <q-tab class="tab" name="week" label="За неделю" />
          </q-tabs>
        </div>
        <q-table
          hide-pagination
          row-key="id"
          :hide-selected-banner="true"
          :binary-state-sort="true"
          :rows="rows"
          :columns="columns"
          class="q-table-home"
          v-if="!nulldate"
        >  
          <template v-slot:body-cell-country="props">
            <q-td :props="props">
              <div class="q-table__country">
                <q-icon size="29px" class="q-icon__del" :name="`svguse:icons/flags.svg#${props.row.country}`" />
                <div class="q-table__country-reduction">{{props.row.country}}</div>
                <div class="q-table__country-title">{{props.row.labelcountry}}</div>
              </div>
            </q-td>
          </template> 
          <template v-slot:body-cell-clicks="props">
            <q-td :props="props">
              <div class="q-table__clicks">
                {{props.row.clicks}}
              </div>
            </q-td>
          </template> 
        </q-table>

      </section>
      <section class="transit">
        <div class="row justify-between items-center head">
          <div class="sidebar__title">Переходы</div>
          <q-select
            v-model="single3"
            :options="options3"
            dropdown-icon="keyboard_arrow_down"
            label="Выберите значение"
          />
          <img src="~assets/feed-grafic.svg" />
        </div>
      </section>
    </div>

  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';
const columns = [
  {
    name: 'country',
    required: true,
    label: 'Страна',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: false
  },
  { name: 'clicks', align: 'left', label: 'Клики', field: 'clicks', sortable: false }
]
const rows = [
  {
    country: 'ru',
    labelcountry: 'Россия',
    clicks: '500 000'
  },
  {
    country: 'ua',
    labelcountry: 'Украина',
    clicks: '250 000'
  },
  {
    country: 'kz',
    labelcountry: 'Казахстан',
    clicks: '500 000'
  },
  {
    country: 'ru',
    labelcountry: 'Россия',
    clicks: '99 000'
  },
  {
    country: 'ru',
    labelcountry: 'Россия',
    clicks: '32 000'
  },
]

export default defineComponent({
  setup() {
    return {
      name: 'PageIndex',
      single: ref('Все тематики'),
      options: [
        "Все тематики",
        "Facebook",
        "Twitter",
        "Apple",
        "Oracle"
      ],
      single2: ref('Все типы контента'),
      options2: [
        "Все типы контента",
        "Facebook",
        "Twitter",
        "Apple",
        "Oracle"
      ],
      single3: ref('За сегодня'),
      options3: [
        "За сегодня",
        "За вчера",
        "7 дней",
        "За месяц"
      ],
      cards: [
        {img: '/images/Frame_1.jpg'},
        {img: '/images/Frame_2.jpg'},
        {img: '/images/Frame_3.jpg'},
        {img: '/images/Frame_4.jpg'},
        {img: '/images/Frame_5.jpg'},
        {img: '/images/Frame_6.jpg'},
        {img: '/images/Frame_1.jpg'},
        {img: '/images/Frame_2.jpg'},
        {img: '/images/Frame_3.jpg'}
      ],
      tab: ref('today'),
      current: ref(1),
      columns,
      rows
    }
  }
})
</script>
