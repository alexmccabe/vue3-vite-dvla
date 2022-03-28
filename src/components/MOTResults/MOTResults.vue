<template>
  <div class="mot-results">
    <div class="heading">
      <div class="sub-title">{{ vehicle.registration }}</div>
      <div class="title">{{ vehicle.make }} {{ vehicle.model }}</div>
    </div>

    <div class="vehicle-meta">
      <div class="vehicle-meta__item">
        <div class="vehicle-meta__title">Colour</div>
        <div class="vehicle-meta__value">{{ vehicle.primaryColour }}</div>
      </div>

      <div class="vehicle-meta__item">
        <div class="vehicle-meta__title">Fuel Type</div>
        <div class="vehicle-meta__value">{{ vehicle.fuelType }}</div>
      </div>

      <!-- <div class="vehicle-meta__item">
        <div class="vehicle-meta__title">Date Manufactured</div>
        <div class="vehicle-meta__value">{{ vehicle.manufactureDate }}</div>
      </div> -->

      <div class="vehicle-meta__item">
        <div class="vehicle-meta__title">Date Registered</div>
        <div class="vehicle-meta__value">{{ vehicle.registrationDate }}</div>
      </div>

      <div class="vehicle-meta__item">
        <div class="vehicle-meta__title">Failed MOTs</div>
        <div class="vehicle-meta__value">{{ failedMotCount }}</div>
      </div>
    </div>

    <hr />

    <div class="heading" v-if="vehicle.motTests[0].expiryDate">
      <div class="sub-title">Your MOT Expires</div>
      <div class="title">{{ vehicle.motTests[0].expiryDate }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Vehicle, MotTest } from '../../types';

interface PropTypes {
  results: Vehicle[];
}
const props = defineProps<PropTypes>();

const vehicle = computed(() => props.results[0]);

const failedMotCount = computed(() => {
  return vehicle.value.motTests.filter((test) => test.testResult === 'FAILED')
    .length;
});
</script>

<style scoped>
hr {
  border-top: 1px dotted lightgray;
}

.mot-results {
  margin-top: 50px;
  width: 100%;
}

.title {
  font-size: 2.5em;
  font-weight: bold;
}

.sub-title {
  font-size: 1.5em;
}

.vehicle-meta {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  width: 100%;
}

.vehicle-meta__title {
  font-size: 0.9em;
  text-transform: uppercase;
}

.vehicle-meta__value {
  font-size: 2em;
  font-weight: bold;
}
</style>
