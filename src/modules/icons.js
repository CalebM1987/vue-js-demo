import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Vue from "vue";

// register these components globally
Vue.component("font-awesome-icon", FontAwesomeIcon);

import {
  faExternalLink,
  faAlignJustify
} from "@fortawesome/pro-light-svg-icons";

import {
  faSpinner,
  faUserCircle,
  faArrowCircleLeft,
  faPlusCircle,
  faMinusCircle,
  faUsers,
  faUserTimes,
  faStar
} from "@fortawesome/pro-solid-svg-icons";

library.add(
  faExternalLink,
  faAlignJustify,
  faSpinner,
  faUserCircle,
  faArrowCircleLeft,
  faPlusCircle,
  faMinusCircle,
  faUsers,
  faUserTimes,
  faStar
);
