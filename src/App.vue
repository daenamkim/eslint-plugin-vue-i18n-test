<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <main>
    <!-- ================================ TEST ================================ -->
    <!-- OK -->
    <div>RAW TEXT</div>
    <!-- DOES NOT WORK -->
    <div>{{ t('unknown') }}</div>
    <!-- DOES NOT WORK -->
    <div>{{ t('kebab-case') }}</div>
    <!-- DOES NOT WORK -->
    <div>{{ t('snake_case') }}</div>
    <!-- ================================ TEST ================================ -->
  </main>
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>
