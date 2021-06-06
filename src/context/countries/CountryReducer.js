import {
    GET_COUNTRY,
   SEARCH_COUNTRY
   
   } from '../types';


   export default (state,action) =>{
       switch(action.type){
           case GET_COUNTRY:
               return{
                ...state,
                countries:action.payload,
                loading:false
               };
           case SEARCH_COUNTRY:
               return{
                   ...state,
                  countries:action.payload
               };    
           
          default:
              return state;         
       }
   };