import {
  Form as VeeForm, Field as VeeField, defineRule, ErrorMessage, configure,
} from 'vee-validate';
import {
  required, min, max, alpha_spaces as alphaSpaces, email,
  min_value as minVal, max_value as maxVal, confirmed,
  not_one_of as excluded,
} from '@vee-validate/rules';

export default {
  install(app) {
    app.component('VeeForm', VeeForm);
    app.component('VeeField', VeeField);
    app.component('ErrorMessage', ErrorMessage);

    defineRule('required', required);
    defineRule('min', min);
    defineRule('max', max);
    defineRule('alpha_spaces', alphaSpaces);
    defineRule('email', email);
    defineRule('min_value', minVal);
    defineRule('max_value', maxVal);
    defineRule('confirmed', confirmed);
    defineRule('excluded', excluded);

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `the field ${ctx.field} is required.`,
          min: `the field ${ctx.field} is too short.`,
          max: `the field ${ctx.field} is too long.`,
          alpha_spaces: `the field ${ctx.field} may only contain alphabetical characters and spaces.`,
          email: `the field ${ctx.field} must be a valid email.`,
          min_value: `the field ${ctx.field} is too low.`,
          max_value: `the field ${ctx.field} is too high.`,
        }
      }
    });
  },
};
