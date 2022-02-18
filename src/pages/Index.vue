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
          label="Выберит значение"
        />
        <q-select
          v-model="single2"
          :options="options2"
          dropdown-icon="keyboard_arrow_down"
          label="Выберит значение"
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
    <section class="sidebar">

    </section>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';

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
      current: ref(1)
    }
  }
})
</script>
