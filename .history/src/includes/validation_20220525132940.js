import { Form as VeeForm, Field as VeeField, defineRule } from 'vee-validate';
import { required } from '@vee-validate/rules';

export default {
  install(app) {
    app.use('VeeForm', VeeForm);
    app.use('VeeField', VeeField);

    defineRule('required', required);
  },
};
