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
                <q-input ref="filterRef" filled v-model="filter" label="Filter" dropdown-icon="keyboard_arrow_down">
                  <template v-slot:append>
                    <q-icon v-if="filter !== ''" name="clear" class="cursor-pointer" @click="resetFilter" />
                  </template>
                </q-input>

                <q-tree
                  :nodes="simple"
                  node-key="label"
                  :filter="filter"
                  default-expand-all
                />
              </q-item>
              <q-item>
                <label class="q-item__title">Язык браузера</label>
                <div class="row no-wrap">
                  <q-select label="Укажите URL" dropdown-icon="keyboard_arrow_down"/>
                  <q-tabs v-model="tabs" class="tabs" no-caps>
                    <q-tab class="tab" name="mails" label="Включить" />
                    <q-tab class="tab" name="alarms" label="Исключить" />
                  </q-tabs>
                </div>
              </q-item>
              <q-item class="q-item-devices">
                <label class="q-item__title">Устройства</label>
                <label>
                  <q-checkbox class="checkbox" label="ПК" v-model="val2" dense />
                  <q-checkbox class="checkbox" label="Телефоны" v-model="val2" dense />
                </label>
              </q-item>
              
              <q-item>
                <label class="q-item__title">Браузеры</label>
                <div class="row no-wrap">
                  <q-select label="Укажите URL" dropdown-icon="keyboard_arrow_down"/>
                  <q-tabs v-model="tabs" class="tabs" no-caps>
                    <q-tab class="tab" name="mails" label="Включить" />
                    <q-tab class="tab" name="alarms" label="Исключить" />
                  </q-tabs>
                </div>
              </q-item>

              <q-item class="q-item-traffics">
                <label class="q-item__title">Источники трафика</label>
                <label class="q-item-traffics__label">
                  <q-radio v-model="shape" val="line" color="dark" label="Витрины" />
                  <q-radio v-model="shape" val="line2" color="dark" label="Сайты" />
                </label>
              </q-item>
              <q-item class="q-item-traffics">
                <label class="q-item__title">Расписание показов</label>
                <div class="row no-wrap">
                  <q-select
                    v-model="single"
                    :options="options"
                    multiple
                    use-chips
                    dropdown-icon="keyboard_arrow_down"
                    label="Выберите или введите значение"
                    popup-content-class="q-select-ad-traffic"
                  />
                  <!-- :label="date.from ? `${date.from} - ${date.to}` : date" -->
                  <div class="row no-wrap traffics-row">
                    <q-input v-model="date" mask="##:##" />
                    <div class="traffics-row-hr"></div>
                    <q-input v-model="date2" mask="##:##" />
                  </div>
                </div>
              </q-item>
            </q-list>
            <q-btn outline color="primary" no-caps label="Добавить интервал" class="btn-add-dropdown-time" />
            <div class="sec-btns">
              <q-btn color="grey" no-caps unelevated flat label="Отменить" />
              <q-btn color="primary" no-caps unelevated label="Далее" />
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
    const date = ref('00:00')
    const date2 = ref('00:00')
    const filter = ref('')
    const filterRef = ref(null)
    return {
      tab: ref('2'),
      tabs: ref("mails"),
      val: ref(false),
      val2: ref(false),
      shape: ref('line'),
      date,
      date2,
      filter,
      filterRef,
      text: ref(''),
      single: ref(null),
      options: [
        { label: 'Ежедневно', value: 'everyday', id: 8, disable: false },
        { label: 'По будням', value: 'weekdays', id: 9, disable: false },
        { label: 'По выходным', value: 'weekends', id: 10, disable: false },
        { label: 'Выбрать день', value: 'chooseDay', disable: true, class: 'need-top-line' },
        { label: 'Понедельник', short: 'Пн', value: 'monday', id: 1, disable: false },
        { label: 'Вторник', short: 'Вт', value: 'tuesday', id: 2, disable: false },
        { label: 'Среда', short: 'Ср', value: 'wednesday', id: 3, disable: false },
        { label: 'Четверг', short: 'Чт', value: 'thursday', id: 4, disable: false },
        { label: 'Пятница', short: 'Пт', value: 'friday', id: 5, disable: false },
        { label: 'Суббота', short: 'Сб', value: 'saturday', id: 6, disable: false },
        { label: 'Воскресенье', short: 'Вс', value: 'sunday', id: 7, disable: false }
      ],
      simple: [
        {
          label: 'Satisfied customers',
          children: [
            {
              label: 'Good food',
              children: [
                { label: 'Quality ingredients' },
                { label: 'Good recipe' }
              ]
            },
            {
              label: 'Good service (disabled node)',
              disabled: true,
              children: [
                { label: 'Prompt attention' },
                { label: 'Professional waiter' }
              ]
            },
            {
              label: 'Pleasant surroundings',
              children: [
                { label: 'Happy atmosphere' },
                { label: 'Good table presentation' },
                { label: 'Pleasing decor' }
              ]
            }
          ]
        }
      ],

      resetFilter () {
        filter.value = ''
        filterRef.value.focus()
      }
    }
    
  },
  components: {}
})
</script>