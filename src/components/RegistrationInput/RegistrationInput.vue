<script setup lang="ts">
import { computed, reactive, toRefs } from 'vue';

import { valdiateRegistrationNumber } from './helpers';
import Input from '../Input.vue';

const emit = defineEmits(['submit']);

const state = reactive({
  isValid: false,
  registrationNumber: '',
});

const { isValid, registrationNumber } = toRefs(state);

const validateInput = (value: string) => {
  const validReg = valdiateRegistrationNumber(value);
  isValid.value = validReg;

  return validReg;
};

const className = computed(() => {
  return {
    'registration-input-container': true,
    'registration-input-container--invalid':
      registrationNumber.value && !isValid.value,
  };
});

const onChange = (event: Event) => {
  const target = event.target as HTMLInputElement;

  registrationNumber.value = target.value;
};

const onSubmit = ($event: SubmitEvent) => {
  $event.preventDefault();

  // if (validateInput(registrationNumber.value)) {
  emit('submit', registrationNumber.value);
  // }
};
</script>

<template>
  <form @submit="onSubmit">
    <div :class="className">
      <div class="country-ident">
        <img src="/uk-flag.svg" alt="" class="country-ident__flag" />
        <div class="country-ident__iso">GB</div>
      </div>

      <Input
        :value="registrationNumber"
        @input="onChange"
        class="registration-input"
        placeholder="AA71 AAA"
        maxlength="8"
      />
    </div>
  </form>
</template>

<style scoped lang="scss">
@use 'sass:color';
@import url('//fonts.cdnfonts.com/css/uk-number-plate');

$background: hsla(46, 100%, 60%, 1);
$ident-background: hsla(217, 49%, 46%, 100);
$color-white: hsla(0, 0%, 100%, 1);
$color-black: hsla(0, 0%, 0%, 1);
$color-error: hsla(0, 70%, 40%, 1);

.registration-input-container {
  background-color: $background;
  border-radius: 10px;
  border: 4px solid $color-black;
  height: 95px;
  display: flex;
  overflow: hidden;
  position: relative;
  width: 500px;
}

.registration-input-container--invalid {
  border-color: $color-error;
}

.country-ident {
  background-color: $ident-background;
  height: 100%;
  position: relative;
  width: 70px;
}

.country-ident__flag {
  left: 6px;
  position: absolute;
  top: 15px;
  width: 58px;
}

.country-ident__iso {
  color: $color-white;
  font-family: 'UKNumberPlate', sans-serif;
  font-size: 1.5em;
  position: absolute;
  text-align: center;
  top: 58px;
  width: 100%;
}

.registration-input {
  background-color: transparent;
  color: $color-black;
  flex: 1;
  font-family: 'UKNumberPlate', sans-serif;
  font-size: 5em;
  outline: 0;
  text-align: center;
  text-transform: uppercase;
  width: 100%;

  &::placeholder {
    color: color.adjust($background, $lightness: -30%);
    opacity: 1;
  }
}
</style>
