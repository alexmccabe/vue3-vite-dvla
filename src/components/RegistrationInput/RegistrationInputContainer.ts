import { defineComponent, h } from 'vue';

import RegistrationInput from './RegistrationInput.vue';
import { getVehicleMotTests } from '../../services/api';

const RegistrationInputContainer = defineComponent({
  emits: ['results'],

  setup(props, context) {
    const onSubmit = async (value: string) => {
      try {
        const results = await getVehicleMotTests(value);

        context.emit('results', results.data);
      } catch (error) {
        // handle error
      }
    };

    return () =>
      h(RegistrationInput, {
        ...props,
        ...context.attrs,
        onSubmit,
      });
  },
});

export default RegistrationInputContainer;
