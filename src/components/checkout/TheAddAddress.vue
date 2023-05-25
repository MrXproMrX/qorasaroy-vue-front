<template>
  <div class="registration">
    <section class="container">
      <div class="registration__cart">
        <div class="registration__list">
          <template v-if="addActive">
            <div class="registration__item registration__checkout">
              <h2 class="registration__title__h2">Добавить адрес</h2>
              <form action="#!" class="registration__form">
                <sec tion class="cabinet__addAddress__list">
                  <div class="cabinet__addAddress__item">
                    <section class="cabinet__addAddress__cart">
                      <h4 class="cabinet__title__h4">Область</h4>
                      <label>
                        <select class="cabinet__select">
                          <option v-for="item in areas" :key="item">
                            {{ item }}
                          </option>
                        </select>
                      </label>
                    </section>

                    <section class="cabinet__addAddress__cart">
                      <h4 class="cabinet__title__h4">Район</h4>
                      <label>
                        <select class="cabinet__select">
                          <option v-for="item in area" :key="item">
                            {{ item }}
                          </option>
                        </select>
                      </label>
                    </section>

                    <section class="cabinet__addAddress__cart">
                      <h4 class="cabinet__title__h4">Ориентир</h4>
                      <label>
                        <select class="cabinet__select">
                          <option v-for="item in area" :key="item">
                            {{ item }}
                          </option>
                        </select>
                      </label>
                    </section>

                    <section class="cabinet__addAddress__cart">
                      <h4 class="cabinet__title__h4">Улица</h4>
                      <input
                        class="cabinet__input"
                        type="text"
                        placeholder="Введите название улицы и номер дома"
                      />
                    </section>
                  </div>
                  <div class="cabinet__addAddress__item">
                    <section class="cabinet__addAddress__cart">
                      <h4 class="cabinet__title__h4">ФИО</h4>
                      <input class="cabinet__input" type="text" placeholder="ФИО" />
                    </section>

                    <section class="cabinet__addAddress__cart">
                      <h4 class="cabinet__title__h4">Телефон</h4>
                      <input class="cabinet__input" type="tel" placeholder="00 000 00 00" />
                    </section>

                    <section class="cabinet__addAddress__cart">
                      <h4 class="cabinet__title__h4">Примечание</h4>
                      <textarea
                        class="cabinet__textarea"
                        placeholder="Например номер квартиры, подъезд, код двери"
                      ></textarea>
                    </section>
                  </div>
                </sec>
                <button type="button" @click="addAddressActive" class="registration__button">
                  Добавить
                </button>
              </form>
            </div>
          </template>
        </div>
      </div>
    </section>
  </div>
  <div class="modal-overlay" :class="{ registrationFon: addActive }" @click="addAddressActive" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  emits: ['addAddress'],
  data() {
    return {
      addActive: true,
      areas: [
        'Андижанская область',
        'Бухарская область',
        'Джизакская область',
        'Кашкадарьинская область',
        'Наманганская область',
        'Навоийская область',
        'Самаркандская область',
        'Сурхандарьинская область',
        'Сырдарьинская область',
        'Ташкентская область',
        'Ферганская область',
        'Хорезмская область',
        'Республика Каракалпакстан',
      ],

      area: [
        'Алатский район',
        'Бухарский район',
        'Вабкентский район',
        'Гиждуванский район',
        'Жондорский район',
        'Каганский район',
        'Каракульский район',
        'Караулбазарский район',
        'Пешкунский район',
        'Ромитанский район',
        'Шафирканский район',
      ],
    }
  },

  methods: {
    addAddressActive() {
      this.$emit('addAddress', (this.addActive = !this.addActive))
    },
  },
})
</script>
