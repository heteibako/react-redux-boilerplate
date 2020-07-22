import { LOG_EVENTS } from './types';

export const logEvents = () => (dispatch) => {
  dispatch({
    type: LOG_EVENTS,
    payload: 'Logged',
  });
};
