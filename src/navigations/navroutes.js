import Home from '../pages';
import Plans from '../pages/plans';
import Services from '../pages/services'
import Insight from '../pages/Insight';
import About from '../pages/about';
import Contact from '../pages/contact';
import Cart from '../pages/cart';
import Career from '../pages/career';
import Login from '../pages/auth/Login';
import Signup from '../pages/auth/Signup';

export const UnAuthenticateRoutes = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/plans',
        element: <Plans />,
    },
    {
        path: '/insight',
        element: <Insight />,
    },
    {
        path: '/services',
        element: <Services />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/contact',
        element: <Contact />,
    },
    {
        path: '/career',
        element: <Career />,
    },
]

export const AuthenticateRoutes = [
    {
        path: '/cart',
        element: <Cart />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/signup',
        element: <Signup />,
    },
]