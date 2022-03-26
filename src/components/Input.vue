<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import { HTMLInputTypeAttribute } from '../types';

interface PropTypes {
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  value: string;
}

interface Emits {
  input: '';
}

const attrs = useAttrs();
const props = withDefaults(defineProps<PropTypes>(), {
  placeholder: '',
  type: 'text',
});
defineEmits<Emits>();

const className = computed(() => {
  return {
    input: true,
  };
});
</script>

<template>
  <input :class="className" v-bind="{ ...props, ...attrs }" v-model="value" />
</template>

<style scoped lang="scss">
.input {
  border: none;
  margin: 0;
  padding: 0;
}
</style>
