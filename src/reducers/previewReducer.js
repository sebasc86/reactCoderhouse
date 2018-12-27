export default function (state = [], action) {
  switch (action.type) {
    case 'SET_ITEM':
    state = fetch("http://localhost:3001/products/" + id)                             
    .then(response => response.json())
    .then(response => { return response })
    state = action.item           
    break;
    case 'UNSET_ITEM': 
     state = {}       
      break;    
    }    
      
    return state; 
};


