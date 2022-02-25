<template>
  <q-page class="balance">

    <q-tab-panels
      v-model="tab"
      animated
      swipeable
      vertical
      transition-prev="jump-up"
      transition-next="jump-up"
    >
      <q-tab-panel name="1">
        <div class="status row">
          <q-card class="balance-card">
            <div class="card-head">
              <div class="row">
                <q-icon size="22px" color="primary" name="svguse:icons/allIcons.svg#wallet"/>
                <div class="card-head__title">Текущий баланс:</div>
              </div>
              <div class="card-head__current">0.00 ₽</div>
            </div>
            <q-btn class="q-btn-replenish" no-caps unelevated color="primary" label="Пополнить" />
          </q-card>
          <q-card class="balance-card">
            <div class="card-head">
              <div class="row">
                <q-icon size="22px" color="primary" name="svguse:icons/allIcons.svg#balanceplus"/>
                <div class="card-head__title">Всего пополнений</div>
              </div>
            </div>
            <div class="card-bottom">
              <div class="card-head__current">1 340 000.00 ₽</div>
              <div class="balance-card__hint">За весь период</div>
            </div>
            
          </q-card>
          <q-card class="balance-card">
            <div class="card-head">
              <div class="row">
                <q-icon size="22px" color="primary" name="svguse:icons/allIcons.svg#balanceminus"/>
                <div class="card-head__title">Весь расход</div>
              </div>
            </div>
            <div class="card-bottom">
              <div class="card-head__current">- 205 000.00 ₽</div>
              <div class="balance-card__hint">За весь период</div>
            </div>
          </q-card>
        </div>
        


        <null-date
          v-if="nulldate"
          title='История баланса пока пуста'
          text='Историят транзакцций появится после совершения пополнения.'
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

          <template v-slot:body-cell-id="props">
            <q-td :props="props">
              <div class="q-table__td">
                {{props.row.id}}
              </div>
            </q-td>
          </template>  
          <template v-slot:body-cell-date="props">
            <q-td :props="props">
              <div class="q-table__td">
                {{props.row.date}}
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
          <template v-slot:body-cell-status="props">
            <q-td :props="props">
              <div class="q-table__td">
                {{props.row.status}}
              </div>
            </q-td>
          </template>  
          <template v-slot:body-cell-pay="props">
            <q-td :props="props">
              <div class="q-table__td">
                {{props.row.pay}}
              </div>
            </q-td>
          </template>  
          <template v-slot:body-cell-comment="props">
            <q-td :props="props">
              <div class="q-table__td">
                {{props.row.comment}}
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
      </q-tab-panel>
    </q-tab-panels>


    
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
  { name: 'date', align: 'left', label: 'Дата', field: 'calories', sortable: true },
  { name: 'cpc', align: 'left', label: 'CPC,₽', field: 'fat', sortable: true },
  { name: 'status', align: 'left', label: 'Статус', field: 'carbs', sortable: true },
  { name: 'pay', align: 'left', label: 'Платежная система', field: 'protein', sortable: true },
  { name: 'comment', align: 'left', label: 'Комментарий', field: 'sodium', sortable: true }
]
const rows = [
  {
    id: '95654',
    date: '24.04.21; 18:30',
    cpc: '400.66',
    status: 'Пополнение',
    pay: 'WMZ',
    comment: 'Пополнение баланса, партнерское вознаграждение'
  },
]
// ID
// Дата
// CPC,₽
// Статус
// Платежная система
// Комментарий
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import NullDate from "src/components/NullDate.vue";

export default ({
  name: 'balance',
  setup () {
    const $q = useQuasar()

    return {
      triggerPositive () {
        $q.notify({
          position: 'bottom-right',
          timeout: 5000,
          type: 'positive',
          icon: 'svguse:icons/iconTable.svg#del',
          message: 'Кампания удалена',
          caption: 'Кампания и объявления в ней удалены. Показы прекращены'
        })
      },
      model: ref('Привет мир'),
      columns,
      rows,
      tab: ref('1'),
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