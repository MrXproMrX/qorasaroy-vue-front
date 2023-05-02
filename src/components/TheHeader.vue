<template>
  <header>
    <div class="header">
      <section class="container">
        <div class="header__cart">
          <div class="header__list">
            <div class="header__list__item">
              <div class="header__logo">
                <RouterLink to="/">
                  <img src="@/assets/img/logo.png" alt="logo" />
                </RouterLink>
              </div>

              <form action="#!" class="header__from" :class="{ searchActive: search }">
                <input type="text" class="header__input" placeholder="Поиск" />
                <button type="submit" class="header__button">
                  <font-awesome-icon icon="fas fa-search" />
                </button>
              </form>
            </div>

            <div class="header__list__icons">
              <!-- language start -->

              <v-menu>
                <template v-slot:activator="{ props }">
                  <div class="header__ru">
                    <button class="header__ru_cart" v-bind="props">
                      <img src="@/assets/img/icons/globe.svg" alt="globe" />
                      <span><font-awesome-icon icon="fas fa-chevron-down" /></span>
                    </button>
                  </div>
                </template>

                <div class="header__ru_none">
                  <div class="header__ru_list active">
                    <a href="#!-1" class="header__en__link">Ru</a>
                  </div>

                  <div class="header__ru_list">
                    <a href="#!-2" class="header__en__link">O’z</a>
                  </div>
                </div>
              </v-menu>

              <!-- language start -->
              <button class="header__search" @click="searchActive">
                <font-awesome-icon icon="fas fa-search" />
              </button>

              <RouterLink to="/basket" class="header__basket">
                <img src="@/assets/img/icons/basket.svg" alt="basket" />
                <span>4</span>
              </RouterLink>

              <button @click="entranceActive" class="header__user">
                <img src="@/assets/img/icons/user.svg" alt="user" />
              </button>

              <button class="header__burger" @click="burgerMenu">
                <font-awesome-icon icon="fas fa-bars" />
              </button>
            </div>
          </div>

          <ul class="header__menu" :class="{ burgerMenuActive: burger }">
            <li>
              <RouterLink to="/" @click="burgerMenu" class="header__menu__link">
                Главная
              </RouterLink>
            </li>

            <li>
              <RouterLink to="/about" @click="burgerMenu" class="header__menu__link">
                О Нас
              </RouterLink>
            </li>

            <li>
              <RouterLink to="/catalog" @click="burgerMenu" class="header__menu__link">
                Каталог
              </RouterLink>
            </li>

            <li>
              <RouterLink to="/buy" @click="burgerMenu" class="header__menu__link">
                Где купить
              </RouterLink>
            </li>

            <li>
              <RouterLink to="/blog" @click="burgerMenu" class="header__menu__link">
                Блог
              </RouterLink>
            </li>

            <li>
              <RouterLink to="/contacts" @click="burgerMenu" class="header__menu__link">
                Контакты
              </RouterLink>
            </li>
          </ul>
        </div>
      </section>
    </div>

    <!-- entrance start -->

    <template v-if="entrance">
      <div class="registration">
        <section class="container">
          <div class="registration__cart">
            <div class="registration__list">
              <div class="registration__item" v-if="!forgotYourPassword && !registration">
                <h2 class="registration__title__h2">Вход</h2>
                <form @submit.prevent="submitCabinet" class="registration__form">
                  <input type="tel" placeholder="Номер телефона" class="registration__input" />
                  <input type="password" placeholder="Пароль" class="registration__input" />
                  <section class="registration__item__list">
                    <a href="#!" class="registration__link" @click="forgotPassword">
                      Забыли пароль?
                    </a>

                    <a href="#!" class="registration__link" @click="registrationActive">
                      Регистрация
                    </a>
                  </section>
                  <button type="submit" class="registration__button">Войти</button>
                </form>
              </div>

              <!-- Forgot your password start -->

              <div class="registration__item" v-if="forgotYourPassword && !smScode">
                <h2 class="registration__title__h2">Восстановление пароля</h2>
                <form class="registration__form">
                  <input type="tel" placeholder="Номер телефона" class="registration__input" />
                  <button @click.prevent="smscodes" class="registration__button">Далее</button>
                </form>
              </div>

              <div class="registration__item" v-if="smScode && !passwordRecovery">
                <h2 class="registration__title__h2">Восстановление пароля</h2>
                <form class="registration__form">
                  <input
                    type="text"
                    placeholder="Код из СМС сообщения"
                    class="registration__input"
                  />
                  <button @click.prevent="passwordNew" class="registration__button">Далее</button>
                </form>
              </div>

              <div class="registration__item" v-if="passwordRecovery">
                <h2 class="registration__title__h2">Восстановление пароля</h2>
                <form class="registration__form">
                  <input type="password" placeholder="Новые пароль" class="registration__input" />
                  <input
                    type="password"
                    placeholder="Повторите парол"
                    class="registration__input"
                  />
                  <button class="registration__button">Далее</button>
                </form>
              </div>

              <!-- Forgot your password end -->

              <!-- Registration start -->

              <div class="registration__item" v-if="registration && !registrationSms">
                <h2 class="registration__title__h2">Регистрация</h2>
                <form class="registration__form">
                  <input type="tel" placeholder="Номер телефона" class="registration__input" />
                  <button @click.prevent="registrationSmsActive" class="registration__button">
                    Далее
                  </button>
                </form>
              </div>

              <div class="registration__item" v-if="registrationSms && !registrationPassword">
                <h2 class="registration__title__h2">Регистрация</h2>
                <form class="registration__form">
                  <input
                    type="text"
                    placeholder="Код из СМС сообщения"
                    class="registration__input"
                  />
                  <button @click.prevent="registrationPasswordActive" class="registration__button">
                    Далее
                  </button>
                </form>
              </div>

              <div class="registration__item" v-if="registrationPassword">
                <h2 class="registration__title__h2">Регистрация</h2>
                <form class="registration__form">
                  <input type="password" placeholder="Новые пароль" class="registration__input" />
                  <input
                    type="password"
                    placeholder="Повторите парол"
                    class="registration__input"
                  />
                  <button class="registration__button">Далее</button>
                </form>
              </div>

              <!-- Registration end -->

              <!-- entrance end -->
            </div>
          </div>
        </section>
      </div>
    </template>

    <!-- Registration end -->

    <div class="sidenav-overlay" :class="{ burgerActiveFon: burger }" @click="burgerMenu" />
    <div class="modal-overlay" :class="{ searchActiveFon: search }" @click="searchActive" />
    <div class="modal-overlay" :class="{ registrationFon: entrance }" @click="entranceActive" />
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      burger: false,
      search: false,
      entrance: false,
      forgotYourPassword: false,
      smScode: false,
      passwordRecovery: false,
      registration: false,
      registrationSms: false,
      registrationPassword: false,
    }
  },

  methods: {
    burgerMenu() {
      this.burger = !this.burger
    },
    searchActive() {
      this.search = !this.search
    },
    entranceActive() {
      this.entrance = !this.entrance
    },
    forgotPassword() {
      this.forgotYourPassword = !this.forgotYourPassword
    },
    smscodes() {
      this.smScode = !this.smScode
    },
    passwordNew() {
      this.passwordRecovery = !this.passwordRecovery
    },

    registrationActive() {
      this.registration = !this.registration
    },

    registrationSmsActive() {
      this.registrationSms = !this.registrationSms
    },

    registrationPasswordActive() {
      this.registrationPassword = !this.registrationPassword
    },

    submitCabinet() {
      this.entrance = !this.entrance
      this.$router.push('/cabinet')
    },
  },
})
</script>
