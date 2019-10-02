import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Vue from "vue";

// register these components globally
Vue.component("font-awesome-icon", FontAwesomeIcon);

import {
  faListAlt
} from '@fortawesome/free-regular-svg-icons'

import {
  faColumns,
  faExternalLinkAlt,
  faStar
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faColumns,
  faExternalLinkAlt,
  faListAlt,
  faStar
);
