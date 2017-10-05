export default function ( state={open: false, html: '', scrolled: false}, action ) {
  switch(action.type) {
    case 'OPEN_MODAL':
      return {...state, open: true, html: action.payload, scrolled: false};
    case 'CLOSE_MODAL':
      return {...state, open: false, scrolled: false};
    case 'SHOW_BUTTON_TEXT':
      return {...state, scrolled: true};
    case 'HIDE_BUTTON_TEXT':
      return {...state, scrolled: false};
    default:
      return {...state}
  }
}
