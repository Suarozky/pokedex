import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {Home,PokeDetail} from './pages'
import PokemonProvider from './assets/context/PokemonContext'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/:pokeId', element: <PokeDetail />,},
]
)

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <PokemonProvider>
    <RouterProvider router={router} />
  </PokemonProvider>
);
