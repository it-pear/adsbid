<template>
  <q-page class="createad pt-0">
    <q-tabs
      v-model="tab"
      class="createad-tabs"
    >
      <q-tab name="1">
        <div class="q-tab__number">1</div>
        <div class="q-tab__label">Общие настройки</div>
      </q-tab>
      <q-tab name="2">
        <div class="q-tab__number">2</div>
        <div class="q-tab__label">Настройки таргетинга</div>
      </q-tab>
    </q-tabs>
    <q-tab-panels
      v-model="tab"
      animated
      swipeable
      vertical
      transition-prev="jump-up"
      transition-next="jump-up"
    >
      <q-tab-panel name="1">
        <div class="createad-sec">
          <section class="content">
            <div class="text-subtitle1">Общие настройки</div>
            <q-list>
              <q-item>
                <label class="q-item__title">Название рекламной кампании</label>
                <q-input v-model="text" placeholder="Введите название рекламной кампании" />
              </q-item>
              <q-item>
                <label class="q-item__title">
                  Конечный URL
                  <q-icon size="16px" name="svguse:icons/hintIcons.svg#attention" class="q-icon-tooltip">
                    <q-tooltip anchor="top middle" self="bottom middle" class="top-tooltip">
                      Конечный URL
                    </q-tooltip>
                  </q-icon>
                </label>
                <q-input v-model="text" placeholder="Укажите URL" />
                <label class="hint underilne">
                  Макросы
                  <q-icon size="16px" name="svguse:icons/hintIcons.svg#quetion" class="q-icon-tooltip">
                    <q-tooltip anchor="top middle" self="bottom middle" class="top-tooltip">
                      контент
                    </q-tooltip>
                  </q-icon>
                </label>
              </q-item>
              <q-item class="q-item-limit">
                <label>
                  <q-checkbox class="checkbox" v-model="val" label="Установить лимит для рекламной кампании" dense />
                </label>
                <q-input color="primary" outlined v-model="text" label="0" bottom-slots v-show="val">
                  <template v-slot:append>
                    <q-icon size="16px" name="svguse:icons/allIcons.svg#ruble" color="dark" />
                  </template>
                </q-input>
                <label class="hint" v-show="val">
                  Укажите сумму в рублях
                </label>
              </q-item>
            </q-list>
            <div class="sec-btns">
              <q-btn color="grey" no-caps unelevated flat label="Отменить" />
              <q-btn color="primary" no-caps unelevated label="Далее" @click="tab = '2'" />
            </div>
          </section>

          
          <section class="sidebar">
            <div class="text-subtitle1">Прогнозируемые результаты за период</div>
            <label class="q-item__title">
              Охват
              <q-icon size="16px" name="svguse:icons/hintIcons.svg#attention" class="q-icon-tooltip">
                <q-tooltip anchor="top middle" self="bottom middle" class="top-tooltip">
                  Охват
                </q-tooltip>
              </q-icon>
            </label>
            <div class="progressive-bar">
              <div class="title">4.5K - 13K</div>
              <!-- Linear Progress не подходит, так как сам бар нельзя округлить -->
              <div class="bar"><div class="bar-length"></div></div>
            </div>
            <div class="sidebar__text">
              Точность прогнозов зависит от таких факторов, как данные прошедших кампаний, введенный бюджет, рыночные данные, критерии таргетинга и места размещения рекламы. Показанные цифры позволяют получить примерное представление о результативности, достигаемой за счет вашего бюджета, однако они являются лишь приблизительными и не гарантируют результатов.
            </div>
          </section>
        </div>
      </q-tab-panel>

      <q-tab-panel name="2">
        <div class="createad-sec">
          <section class="content">
            <div class="text-subtitle1">Настройки таргетинга</div>
            <q-list>
              <q-item>
                <label class="q-item__title">География показов</label>
                <q-input v-model="text" placeholder="Все" />
              </q-item>
              <q-item>
                <label class="q-item__title">Язык браузера</label>
                <div class="row no-wrap">
                  <q-select label="Укажите URL"/>
                  <q-tabs v-model="tabs" class="tabs" no-caps>
                    <q-tab class="tab" name="mails" label="Mails" />
                    <q-tab class="tab" name="alarms" label="Alarms" />
                  </q-tabs>
                </div>
              </q-item>

              <q-item class="q-item-limit">
                <label>
                  <q-checkbox class="checkbox" v-model="val" label="Установить лимит для рекламной кампании" dense />
                </label>
                <q-input color="primary" outlined v-model="text" label="0" bottom-slots v-show="val">
                  <template v-slot:append>
                    <q-icon size="16px" name="svguse:icons/allIcons.svg#ruble" color="dark" />
                  </template>
                </q-input>
                <label class="hint" v-show="val">
                  Укажите сумму в рублях
                </label>
              </q-item>
            </q-list>

            <div class="sec-btns">
              <q-btn color="grey" no-caps unelevated flat label="Отменить" />
              <q-btn color="primary" no-caps unelevated label="Далее" @click="tab = '2'" />
            </div>
          </section>

          
          <section class="sidebar">
            <div class="text-subtitle1">Прогнозируемые результаты за период</div>
            <label class="q-item__title">
              Охват
              <q-icon size="16px" name="svguse:icons/hintIcons.svg#attention" class="q-icon-tooltip">
                <q-tooltip anchor="top middle" self="bottom middle" class="top-tooltip">
                  Охват
                </q-tooltip>
              </q-icon>
            </label>
            <div class="progressive-bar">
              <div class="title">4.5K - 13K</div>
              <!-- Linear Progress не подходит, так как сам бар нельзя округлить -->
              <div class="bar"><div class="bar-length"></div></div>
            </div>
            <div class="sidebar__text">
              Точность прогнозов зависит от таких факторов, как данные прошедших кампаний, введенный бюджет, рыночные данные, критерии таргетинга и места размещения рекламы. Показанные цифры позволяют получить примерное представление о результативности, достигаемой за счет вашего бюджета, однако они являются лишь приблизительными и не гарантируют результатов.
            </div>
          </section>
          
        </div>
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default ({
  name: 'createad',
  setup () {
    return {
      tab: ref('1'),
      tabs: ref("mails"),
      val: ref(false),
      text: ref('')
    }
  },
  components: {}
})
</script>