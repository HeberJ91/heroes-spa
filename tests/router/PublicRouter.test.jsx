import { render, screen } from "@testing-library/react"
import { PublicRoute } from '../../src/router/PublicRouter'
import { AuthContext } from '../../src/auth/context/AuthContext'
import { MemoryRouter, Route, Routes } from "react-router-dom";


describe('Pruebas en <PublicRoute/>', () => { 

    test('debe de mostrar el children si no esta utenticado', () => { 

        const contextValue ={
            logged: false
        };

        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Ruta Publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Ruta Publica')).toBeTruthy();

     });


     test('debe de navegar si esta utenticado', () => { 
        const contextValue ={
            logged: true,
            user: {
                name:'Strider',
                id:'ABC123'
            }
        };

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path="login" element={
                             <PublicRoute>
                                <h1>Ruta Publica</h1>
                            </PublicRoute>
                        }/>
                        <Route path='marvel' element={ <h1>Pagina de marvel</h1>}/>
                    </Routes>
                   
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Pagina de marvel')).toBeTruthy();   
            
        
     })

 })