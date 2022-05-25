import { Form as VeeForm, Field as VeeField } from 'vee-validate';
import { required } from '@vee-validate/rules';

export default {
  install(app) {
    app.use('VeeForm', VeeForm);
    app.use('VeeField', VeeField);
  },
};
