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

                <li>
                  <button
                    class="allProducts__categories__link"
                    @click="active = 'theAddressBook'"
                    :class="{ active: active == 'theAddressBook' || active == addActive }"
                  >
                    Адресная книга
                  </button>
                </li>
              </ul>
            </div>
          </aside>

          <section>
            <TheMyProfilevue v-if="active == 'myProfile'"></TheMyProfilevue>
            <TheMyOrdersvue v-else-if="active == 'myOrders'"></TheMyOrdersvue>
            <TheAddressBook
              v-else-if="active == 'theAddressBook'"
              @addaddress="addaddress"
            ></TheAddressBook>
            <TheAddAddress v-else-if="active == addActive"></TheAddAddress>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TheMyProfilevue from '@/components/cabinet/TheMyProfile.vue'
import TheMyOrdersvue from '@/components/cabinet/TheMyOrders.vue'
import TheAddressBook from '@/components/cabinet/TheAddressBook.vue'
import TheAddAddress from '@/components/cabinet/TheAddAddress.vue'
export default {
  data() {
    return {
      active: 'myProfile',
      addActive: TheAddressBook.add,
    }
  },

  components: {
    TheMyProfilevue,
    TheMyOrdersvue,
    TheAddressBook,
    TheAddAddress,
  },

  methods: {
    addaddress(add) {
      this.addActive = add
      this.active = add
    },
  },
}
</script>
