import { LOG_EVENTS } from '../actions/types';

const initialState = [];

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOG_EVENTS:
      return [...state, payload];

    default:
      return state;
  }
}
