import { defineNuxtPlugin } from '#app';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faYoutube, faTwitter, faInstagram, faTiktok, faFacebook, faTelegram, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(faYoutube, faTwitter, faInstagram, faTiktok, faFacebook, faTelegram, faWhatsapp, faLinkedin);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon);
});
