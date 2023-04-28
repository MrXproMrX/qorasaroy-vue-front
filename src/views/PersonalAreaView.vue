<template>
  <div class="cabinet">
    <section class="container">
      <div class="cabinet__cart">
        <div class="allProducts__list">
          <aside class="allProducts__aside">
            <div class="allProducts__categories">
              <div class="allProducts__categories__cart">
                <span>
                  <img src="@/assets/img/icons/user.svg" alt="" />
                </span>
                <h3 class="allProducts__categories__title">Личный кабинет</h3>
              </div>

              <ul class="allProducts__categories__menu">
                <li>
                  <button
                    class="allProducts__categories__link"
                    @click="active = 'myProfile'"
                    :class="{ active: active == 'myProfile' }"
                  >
                    Мой профиль
                  </button>
                </li>

                <li>
                  <button
                    class="allProducts__categories__link"
                    @click="active = 'myOrders'"
                    :class="{ active: active == 'myOrders' }"
                  >
                    Мои заказы
                  </button>
                </li>
              </ul>
            </div>
          </aside>

          <section>
            <TheMyProfilevue v-if="active == 'myProfile'"></TheMyProfilevue>
            <TheMyOrdersvue v-if="active == 'myOrders'"></TheMyOrdersvue>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TheMyProfilevue from '@/components/cabinet/TheMyProfile.vue'
import TheMyOrdersvue from '@/components/cabinet/TheMyOrders.vue'
export default {
  data() {
    return {
      active: 'myProfile',
    }
  },

  components: {
    TheMyProfilevue,
    TheMyOrdersvue,
  },
}
</script>
