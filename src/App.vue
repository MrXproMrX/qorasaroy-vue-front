<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <section class="fixedFooter">
    <TheHeader />
    <section class="pageFixed">
      <RouterView />
    </section>
    <TheFooter />
  </section>
</template>
