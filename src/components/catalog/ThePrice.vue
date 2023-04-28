<script lang="ts" setup>
import Slider from '@vueform/slider'
const value = [1000, 6000]
</script>
<template>
  <div class="allProducts__categories">
    <div class="allProducts__categories__cart">
      <h3 class="allProducts__categories__title">Цена</h3>
    </div>
    <Slider
      class="allProducts__slider"
      v-model="value"
      :format="{ thousand: ' ' }"
      :step="50"
      :max="10000"
    />
    <div class="allProducts__price__list">
      <h3 class="allProducts__price__title">1000</h3>
      <h3 class="allProducts__price__title">6000</h3>
    </div>

    <div class="allProducts__price__cart">
      <button class="allProducts__price__apply">Применить</button>
      <button class="allProducts__price__reset">Сбросить</button>
    </div>
  </div>
</template>

<style src="@vueform/slider/themes/default.css"></style>
