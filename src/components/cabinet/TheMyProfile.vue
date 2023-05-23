<template>
  <section>
    <h2 class="products__title__h2">Мой профиль</h2>
    <form action="#!" class="cabinet__form">
      <label>
        <h4 class="cabinet__title__h4">ФИО</h4>
        <input type="text" class="cabinet__input" placeholder="ФИО" />
      </label>

      <section class="cabinet__list">
        <label>
          <h4 class="cabinet__title__h4">Дата рождения</h4>
          <section class="cabinet__list__date">
            <select class="cabinet__select">
              <option v-for="item in 31" :key="item">
                {{ item }}
              </option>
            </select>

            <select class="cabinet__select">
              <option v-for="item in ArrMonth" :key="item">
                {{ item }}
              </option>
            </select>

            <select class="cabinet__select">
              <option v-for="item in dateArray" :key="item">
                {{ item }}
              </option>
            </select>
          </section>
        </label>

        <section>
          <h4 class="cabinet__title__h4">Пол</h4>

          <section class="cabinet__list__item">
            <label class="input-wrap" for="floor_1">
              <input
                type="radio"
                name="floor"
                id="floor_1"
                class="checkboxNone"
                value="cash"
                v-model="value"
              />
              <span class="checkmark"></span>
              <h3 class="checkout__title__address">Мужчина</h3>
            </label>

            <label class="input-wrap" for="floor_2">
              <input
                type="radio"
                name="floor"
                id="floor_2"
                class="checkboxNone"
                value="cash"
                v-model="value"
              />
              <span class="checkmark"></span>
              <h3 class="checkout__title__address">Женщина</h3>
            </label>
          </section>
        </section>
      </section>

      <label>
        <h4 class="cabinet__title__h4">ФИО</h4>
        <div class="cabinet__change__item">
          <input type="tel" class="cabinet__input" disabled value="+998901234567" />
          <button class="cabinet__change" type="button" @click="entranceActive = true">
            <font-awesome-icon icon="fas fa-pencil" />
          </button>
        </div>
      </label>

      <label>
        <h4 class="cabinet__title__h4">Адрес электронной почты</h4>
        <input type="email" class="cabinet__input" placeholder="Адрес электронной почты" />
      </label>

      <button class="contacts__button" type="submit">Сохранить</button>
    </form>

    <template v-if="entranceActive">
      <TheRegistration @entrance="entrance"></TheRegistration>
    </template>
  </section>
</template>

<script>
import TheRegistration from '@/components/TheRegistration.vue'
export default {
  data() {
    return {
      ArrMonth: [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
      ],
      entranceActive: TheRegistration.active,
      active: '',
    }
  },

  computed: {
    dateArray() {
      let dateObj = []
      let today = new Date()
      let year = today.getFullYear()
      for (let i = year; i >= 1900; --i) {
        dateObj.push(i)
      }
      return dateObj
    },
  },

  components: {
    TheRegistration,
  },

  methods: {
    entrance(active) {
      this.entranceActive = active
      console.log((this.entranceActive = active))
    },
  },
}
</script>
