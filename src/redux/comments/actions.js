import {
  FETCH_COMMENTS,
  FETCH_COMMENTS_FAILURE,
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
} from './types';

const fetchCommentsSuccess = (comment) => {
  return {
    type: FETCH_COMMENTS_SUCCESS,
    payload: comment,
  };
};
const fetchCommentsRequet = () => {
  return {
    type: FETCH_COMMENTS_REQUEST,
  };
};
const fetchCommentsFailure = (error) => {
  return {
    type: FETCH_COMMENTS_FAILURE,
    payload: error,
  };
};

export const fetchComments = () => {
  // thunk 덕분에 action에서 dispatch를 사용할 수 있게 되었다.
  return (dispatch) => {
    dispatch(fetchCommentsRequet());
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((comments) => dispatch(fetchCommentsSuccess(comments)))
      .catch((error) => dispatch(fetchCommentsFailure(error)));
  };
};
