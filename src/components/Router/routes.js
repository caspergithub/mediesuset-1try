import Home from '../Pages/Home/Home';

/**
 * Array til at styre routes med
 * @name String Navn som bliver vist i navbar
 * @path String Sti
 * @exact Bool Grad af match
 * @display Bool Angiver om punktet skal vises i navbar
 * @component Object Komponent som skal afvikles 
 */

const routes = [
    {
        name: 'Home',
        path: '/',
        exact: true,
        display: true,
        component: Home
    }];

export default routes;