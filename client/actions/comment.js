import { getCommentsByBookId, postComment } from '../apis/comments'

export function setComments(comments) {
  return {
    type: 'SET_COMMENTS',
    payload: comments,
  }
}

export function addComments(comments) {
  return {
    type: 'ADD_COMMENTS',
    payload: comments,
  }
}

export function updateComments(comments) {
  return {
    type: 'UPDATE_COMMENTS',
    payload: comments,
  }
}

//thunks for Comments
export function fetchComments(id) {
  return (dispatch) => {
    return getCommentsByBookId(id)
      .then((commentData) => {
        dispatch(setComments(commentData))
      })
      .catch((err) => console.error(err.message))
  }
}

export function submitComments(newComment) {
  return (dispatch) => {
    return postComment(newComment)
      .then((commentData) => {
        dispatch(addComments(commentData))
      })
      .catch((err) => console.error(err.message))
  }
}