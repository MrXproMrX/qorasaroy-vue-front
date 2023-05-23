<template>
  <header>
    <div class="header">
      <section class="container">
        <div class="header__cart">
          <div class="header__list">
            <div class="header__list__item">
              <div class="header__logo">
                <RouterLink to="/">
                  <img src="@/assets/img/logo.svg" alt="logo" />
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

              <button @click="entranceActive = !entranceActive" class="header__user">
                <img src="@/assets/img/icons/user.svg" alt="user" />
              </button>

              <button class="header__burger" @click="burgerMenu">
                <font-awesome-icon icon="fas fa-bars" />
              </button>
            </div>
          </div>

          <ul class="header__menu" :class="{ burgerMenuActive: burger }">
            <li @click="burger = false">
              <RouterLink to="/" class="header__menu__link"> Главная </RouterLink>
            </li>

            <li @click="burger = false">
              <RouterLink to="/about" class="header__menu__link"> О Нас </RouterLink>
            </li>

            <li @click="burger = false">
              <RouterLink to="/catalog" class="header__menu__link"> Каталог </RouterLink>
            </li>

            <li @click="burger = false">
              <RouterLink to="/buy" class="header__menu__link"> Где купить </RouterLink>
            </li>

            <li @click="burger = false">
              <RouterLink to="/blog" class="header__menu__link"> Блог </RouterLink>
            </li>

            <li @click="burger = false">
              <RouterLink to="/contacts" class="header__menu__link"> Контакты </RouterLink>
            </li>
          </ul>
        </div>
      </section>
    </div>

    <!-- entrance start -->

    <template v-if="entranceActive">
      <TheRegistration @entrance="entrance"></TheRegistration>
    </template>

    <!-- entrance end -->

    <div class="sidenav-overlay" :class="{ burgerActiveFon: burger }" @click="burgerMenu" />
    <div class="modal-overlay" :class="{ searchActiveFon: search }" @click="searchActive" />
  </header>
</template>

<script>
import { defineComponent } from 'vue'
import TheRegistration from '@/components/TheRegistration.vue'
export default defineComponent({
  data() {
    return {
      burger: false,
      search: false,
      entranceActive: TheRegistration.active,
    }
  },

  components: {
    TheRegistration,
  },

  methods: {
    burgerMenu() {
      this.burger = !this.burger
    },
    searchActive() {
      this.search = !this.search
    },

    entrance(active) {
      this.entranceActive = active
    },
  },
})
</script>
