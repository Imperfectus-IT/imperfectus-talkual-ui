<template>
  <InputNumber
      v-model="props.modelValue"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      v-bind="props"
      :prefix="props.prefix"
  >
    <slot v-if="slots.default" name="default" />
    <template v-if="slots.incrementbuttonicon" v-slot:incrementbuttonicon="scope">
      <slot name="incrementbuttonicon" v-bind="scope" />
    </template>
    <template v-if="slots.decrementbuttonicon" v-slot:decrementbuttonicon="scope">
      <slot name="decrementbuttonicon" v-bind="scope" />
    </template>
  </InputNumber>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import InputNumber from 'primevue/inputnumber';
import {TKInputNumberProps, TKInputNumberSlots} from './TKInputNumber'

const props = defineProps<TKInputNumberProps>();
const emit = defineEmits(['update:modelValue']);

const state = ref({
  d_modelValue: props.modelValue || 0,
  focused: false,
});

const slots = defineSlots<TKInputNumberSlots>()

const updateModelValue = (value) => {
  state.value.d_modelValue = value;
  emit('update:modelValue', value);
};

const handleInput = (event) => {
  updateModelValue(event.value);
  emit('input', event);
};

const handleFocus = (event) => {
  state.value.focused = true;
  emit('focus', event);
};

const handleBlur = (event) => {
  state.value.focused = false;
  emit('blur', event);
};
</script>
