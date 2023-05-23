<template>
  <section>
    <h2 class="products__title__h2">Адресная книга</h2>

    <div class="cabinet__address__cart">
      <button class="cabinet__address__add" @click="$emit('addaddress', (this.add = 'addAddress'))">
        Добавить
        <font-awesome-icon icon="fas fa-plus" />
      </button>

      <ul class="cabinet__address__list">
        <li>
          <h4 class="checkout__title__address">Садык Азимов 68</h4>
          <button type="button" class="cabinet__address__delete">
            <font-awesome-icon icon="fas fa-trash-alt" />
          </button>
        </li>

        <li>
          <h4 class="checkout__title__address">Феруза 44</h4>
          <button type="button" class="cabinet__address__delete">
            <font-awesome-icon icon="fas fa-trash-alt" />
          </button>
        </li>

        <li>
          <h4 class="checkout__title__address">Корасув 30</h4>
          <button type="button" class="cabinet__address__delete">
            <font-awesome-icon icon="fas fa-trash-alt" />
          </button>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  emits: ['addaddress'],
  data() {
    return {
      add: '',
    }
  },
}
</script>
