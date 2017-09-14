export default function ( state={sticky: false}, action ) {
  switch(action.type) {
    case 'SET_STICKY_HEADER':
      return {...state, sticky: action.payload};
    default:
      return {...state}
  }
}
