<script setup lang="ts">
import Button from "primevue/button"
import { TKButtonProps, TKButtonSlots } from "./TKButton";

const props = withDefaults(defineProps<TKButtonProps>(), {
  iconPos: 'left',
  loading: false,
  link: false,
  raised: false,
  rounded: false,
  text: false,
  outlined: false,
  plain: false
})
const slots = defineSlots<TKButtonSlots>()
</script>

<template>
  <Button v-bind="props">
    <slot v-if="slots.default" name="default" />
    <template v-if="slots.icon" v-slot:icon="scope">
      <slot name="icon" v-bind="scope" />
    </template>
    <template v-if="slots.loadingicon" v-slot:loadingicon="scope">
      <slot name="loadingicon" v-bind="scope" />
    </template>
  </Button>
</template>