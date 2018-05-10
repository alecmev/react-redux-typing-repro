import { Reducer, createStore } from "redux";
import { Provider } from "react-redux";

const reducer: Reducer<
  { foo: number } | undefined, // State
  { type: "foo"; payload: number } // Action
> = state => state;

const store = createStore(reducer);

export const Whatever = () => (
  <Provider store={store}>
    <div>Whatever</div>
  </Provider>
);
