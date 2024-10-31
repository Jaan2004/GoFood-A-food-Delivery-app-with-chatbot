import React,{createContext,useContext,useReducer} from 'react'

const cartstatecontext= createContext();
const cartdispatchcontext=createContext();

const reducer =  (state,action)=>{
  switch(action.type){
    case "ADD":
      return [...state,{id:action.id,name:action.name,qty:action.qty,size:action.size,price:action.price,img:action.img}]

        case "REMOVE":
          let newarr = [...state]
          newarr.splice(action.index,1);
          return newarr;

        case "UPDATE":
          let arr = [...state]
          arr.find((food,index)=>{
            if(food.id===action.id){
              arr[index]= {...food,qty:parseInt(action.qty)+ food.qty, price:action.price+ food.price}
          }
          return arr;
  })
  return arr;

  case "DROP":
    let emptyarr=[];
    return emptyarr

  
  default:
    console.log("Error in Reducer");
  }
  


}

export const Cartprovider=({children})=> {

  const [state,dispatch]= useReducer(reducer,[])
  return (
   
    <cartstatecontext.Provider value={state}  >
      <cartdispatchcontext.Provider value={dispatch}>
        {children}
      </cartdispatchcontext.Provider>
</cartstatecontext.Provider>
  )
}

export const useCart = ()=> useContext(cartstatecontext);
export const useDispatchCart= ()=> useContext(cartdispatchcontext)
