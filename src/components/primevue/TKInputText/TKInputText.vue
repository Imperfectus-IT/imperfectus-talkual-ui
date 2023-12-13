<script setup lang="ts">
import { TKInputTextProps } from "./TKInputText";
import InputText from 'primevue/inputtext';
const props = defineProps<TKInputTextProps>()
const emit = defineEmits(['update:modelValue']);
const updateValue = (value: string | undefined) => {
  emit("update:modelValue", value);
};
</script>
<template>
  <InputText
      :value="props.modelValue"
      :size="props.size"
      :pt="props.pt"
      :ptOptions="props.ptOptions"
      :unstyled="props.unstyled"
      v-bind="$attrs"
      @update:modelValue="updateValue"
  />
</template>