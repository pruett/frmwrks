import { h, app } from "hyperapp";

app({
  state: {
    title: "hello!"
  },
  view: (state, { reverse }) => h("h1", { onclick: reverse }, state.title),
  actions: {
    reverse(state) {
      return {
        title: state.title
          .split("")
          .reverse()
          .join("")
      };
    }
  }
});
