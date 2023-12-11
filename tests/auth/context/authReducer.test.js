import { act } from "react-dom/test-utils";
import { authReducer } from "../../../src/auth/context/authReducer"
import { types } from "../../../src/auth/types/types";

describe('Pruebas en el authReducer', () => { 

    test('debe de retornar el estado por defecto', () => { 

        const state = authReducer({ logged: false }, {});
        expect( state).toEqual({logged: false})
     })

     
    test('debe hacer login  llamar al login y establecer el usuario', () => { 

        const action = {
            type: types.login,
            payload: {
                name: 'Jose',
                id: 123
            }
        }

        const state =authReducer({logged: false}, action);
        expect(state).toEqual({
            logged: true,
            user: action.payload
        })

        
    })

    
    test('debe de logout borrar el usuario  y logged en false', () => { 
        
        const state = {
            logged: true,
            user: {id:'123',name:'Jose'}
        }

        const action = {
            type : types.logout
        }

        const newState =authReducer(state, action);

        expect(newState).toEqual({ logged: false });
        
    })
 })