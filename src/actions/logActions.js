import { LOG_EVENTS } from './types';

export const logEvents = () => (dispatch) => {
  dispatch({
    type: LOG_EVENTS,
    payload: 'Logged',
  });
};

// export const get = () => async (dispatch) => {
//   try {
//     const res = await axios.get('');
//     dispatch({
//       type: ,
//       payload: res.data,
//     });
//   } catch (error) {
//     toast.error('error);
//   }
// };
