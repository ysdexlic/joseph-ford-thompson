export default function ( state={open: false, title: '', body: ''}, action ) {
  switch(action.type) {
    case 'OPEN_MODAL':
      return {...state, open: true, title: action.payload.title, body: action.payload.body};
    case 'CLOSE_MODAL':
      return {...state, open: false};
    default:
      return {...state}
  }
}
