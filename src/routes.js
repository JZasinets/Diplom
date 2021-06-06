import {LOGIN_ROUTE, HOME_ROUTE} from "./utils/consts";
import { Home } from './pages/Home';
import { SignIn } from "./pages/SignIn.tsx";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: SignIn
    }
]

export const privateRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    }
]

