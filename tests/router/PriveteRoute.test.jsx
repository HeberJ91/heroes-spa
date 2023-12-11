import { render, screen } from "@testing-library/react"
import { PrivateRoute } from '../../src/router/PrivateRoute'
import { AuthContext } from '../../src/auth/context/AuthContext'
import { MemoryRouter } from "react-router-dom";


describe('Pruebas en PriveteRoute', () => { 

    test('debe de mostrar el children si no esta utenticado', () => { 

        Storage.prototype.setItem = jest.fn();

        const contextValue ={
            logged: true,
            user: {
                id: 'abc',
                name: 'Jese'
            }
        };

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <PrivateRoute>
                        <h1>Ruta Privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        
       expect(screen.getByText('Ruta Privada')).toBeTruthy();
       expect(localStorage.setItem).toHaveBeenCalledWith("lastPath","/marvel")

     });
 })