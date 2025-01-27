import { Context, createWrapper } from "next-redux-wrapper";
import { Store, createStore } from "redux";
import { rootReducer, RootState } from "./reducers"; 

// create a makeStore function
const makeStore = (context: Context): Store<RootState> => createStore(rootReducer);

// export an assembled wrapper
export const wrapper = createWrapper<Store<RootState>>(makeStore, { debug: true });
