export default function ( state={open: false, html: ''}, action ) {
  switch(action.type) {
    case 'OPEN_MODAL':
      return {...state, open: true, html: action.payload};
    case 'CLOSE_MODAL':
      return {...state, open: false};
    default:
      return {...state}
  }
}
