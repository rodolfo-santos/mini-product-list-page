import {
  ZAlert,
  ZText,
  ZTitle,
  ZButton,
  ZDivider,
  ZLogo,
  ZInput,
  ZInputField,
  ZIcon,
  ZCard,
  ZStepperBar,
  ZCheckbox,
  ZLink,
  ZModal,
  ZDropdownInput,
  ZBadgeText,
  ZLoading,
  ZProgressBar,
  ZChoice,
  ZButtonSocial
} from '@quero/zilla-vue';

export const zilla = {
  install(app) {
    app.component('ZAlert', ZAlert);
    app.component('ZText', ZText);
    app.component('ZTitle', ZTitle);
    app.component('ZButton', ZButton);
    app.component('ZLogo', ZLogo);
    app.component('ZInput', ZInput);
    app.component('ZInputField', ZInputField);
    app.component('ZIcon', ZIcon);
    app.component('ZCard', ZCard);
    app.component('ZStepperBar', ZStepperBar);
    app.component('ZCheckbox', ZCheckbox);
    app.component('ZLink', ZLink);
    app.component('ZDivider', ZDivider);
    app.component('ZModal', ZModal);
    app.component('ZDropdownInput', ZDropdownInput);
    app.component('ZBadgeText', ZBadgeText);
    app.component('ZLoading', ZLoading);
    app.component('ZProgressBar', ZProgressBar);
    app.component('ZChoice', ZChoice);
    app.component('ZButtonSocial', ZButtonSocial);
  }
};
