import { defineComponent, h } from 'vue';

import RegistrationInput from './RegistrationInput.vue';
import { getVehicleMotTests } from '../../services/api';

const RegistrationInputContainer = defineComponent({
  setup(props, context) {
    const onSubmit = async (value: string) => {
      const results = await getVehicleMotTests(value);
      console.log(results);
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
