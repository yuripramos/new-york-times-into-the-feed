import createBrowserHistory from "history/createBrowserHistory";
let history;

if (typeof window === "object") {
  history = createBrowserHistory();
} else {
  history = {};
}

export default history;
