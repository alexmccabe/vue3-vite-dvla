<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref } from 'vue';

import RegistrationInput from './components/RegistrationInput';
import MOTResults from './components/MOTResults';
import { Vehicle } from './types';

const motResults = ref<Vehicle[]>([]);
</script>

<template>
  <RegistrationInput @results="(results) => (motResults = results)" />
  <MOTResults :results="motResults" v-if="motResults.length" />
</template>

<style>
#app {
  color: #2c3e50;
  display: flex;
  flex-wrap: wrap;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
  width: 600px;
}
</style>
