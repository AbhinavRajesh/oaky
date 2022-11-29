import { createStore, createHook, defaults } from "react-sweet-state";

import actions from "./actions";
import initialState from "./initialStates";

defaults.devtools = true;

const Store = createStore({
  name: "oaky_general_" + window.location.origin,
  initialState,
  actions,
});

export const useGeneralStore = createHook(Store, {
  selector: (state) => state,
});