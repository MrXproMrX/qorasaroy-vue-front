<template>
  <div class="registration">
    <section class="container">
      <div class="registration__cart">
        <div class="registration__list">
          <template v-if="entranceitem == 'entrance'">
            <div class="registration__item">
              <h2 class="registration__title__h2">Вход</h2>
              <form class="registration__form">
                <section class="registration__form__item">
                  <input type="tel" disabled value="+998 " class="registration__input" />
                  <input
                    type="tel"
                    placeholder="00 000 00 00"
                    maxlength="9"
                    class="registration__input"
                  />
                </section>
                <button
                  type="button"
                  @click="entranceitem = 'entranceitemSms'"
                  class="registration__button"
                >
                  Далее
                </button>
              </form>
            </div>
          </template>

          <template v-else-if="entranceitem == 'entranceitemSms'">
            <div class="registration__item">
              <h2 class="registration__title__h2">Вход</h2>
              <form class="registration__form" @submit.prevent="submitCabinet">
                <input type="password" placeholder="Введите код" class="registration__input" />
                <section class="registration__item__list">
                  <a href="#!" class="registration__link"> Отправить повторно </a>
                </section>
                <button type="submit" class="registration__button">Войти</button>
              </form>
            </div>
          </template>
        </div>
      </div>
    </section>
  </div>
  <div class="modal-overlay" :class="{ registrationFon: active }" @click="entranceActive" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  emits: ['entrance'],
  data() {
    return {
      active: true,
      entranceitem: 'entrance',
    }
  },

  methods: {
    submitCabinet() {
      this.entranceitem = 'entrance'
      this.$router.push('/cabinet')
      this.entranceActive()
    },

    entranceActive() {
      this.$emit('entrance', (this.active = !this.active))
    },
  },
})
</script>
