import { Action } from "../actions/actionTypes";

interface ConnectedState {
  state: boolean;
}

export default function switcher(
  state: ConnectedState["state"] = true,
  action: Action<string>
) {
  switch (action.type) {
    default:
      return state;
  }
}
