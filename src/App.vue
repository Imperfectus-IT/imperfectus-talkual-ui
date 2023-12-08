<script setup lang="ts">
import TKAutocomplete from "./components/primevue/TKAutocomplete/TKAutocomplete.vue";
import { ref } from "vue";

const value = ref("");
const items = ref([]);

const search = (event) => {
  items.value = [...Array(10).keys()].map((item) => event.query + '-' + item);
}

</script>

<template>
  <TKAutocomplete v-model="value" :suggestions="items" @complete="search" />
</template>

<style scoped>

</style>
