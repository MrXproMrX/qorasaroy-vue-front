<script setup lang="ts">
const pages = 3
const active = 1
</script>
<template>
  <section>
    <ul class="pagination__list">
      <li class="pagination__item">
        <a class="pagination__next" href="#!">
          <font-awesome-icon icon="fas fa-angle-double-left" />
        </a>
      </li>

      <li class="pagination__item">
        <a class="pagination__next" href="#!">
          <font-awesome-icon icon="fas fa-angle-left" />
        </a>
      </li>

      <li class="pagination__item" v-for="pageNumber in pages" :key="pageNumber">
        <a
          href="#!"
          class="pagination__link"
          :class="{ pagination__active: active == pageNumber }"
          @click="active == pageNumber"
        >
          {{ pageNumber }}
        </a>
      </li>
      <li class="pagination__item">
        <a class="pagination__next" href="#!">
          <font-awesome-icon icon="fas fa-angle-right" />
        </a>
      </li>

      <li class="pagination__item">
        <a class="pagination__next" href="#!">
          <i class="fas"></i>
          <font-awesome-icon icon="fas fa-angle-double-right" />
        </a>
      </li>
    </ul>
  </section>
</template>
