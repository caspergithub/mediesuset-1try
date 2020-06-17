import React from 'react';
import Styles from './Nav.module.scss';
import routes from '../Router/routes';
import { NavLink } from 'react-router-dom';
import Image from '../../assets/mediehuset-logo.png';

// const Li = props => {
//     const {name, exact, path } = props;

//     return (
//         <li>
//             <NavLink to={path} exact={exact}>
//                 {name}
//             </NavLink>
//         </li>
//     )
// }

export default function Nav(props) {
    return (
        <nav className={Styles.sitenav}>
            <ul>
                {/* {routes.map((navelement, i) => {
                    return (
                        <Li key={navelement.name}
                        {...navelement}
                        />
                    );
                })} */}

                <li className={Styles.logolink}><NavLink to={routes[0].path} > <div className={Styles.navgrid}> <img className={Styles.logoimg} src={Image} alt="logo" /> <div className={Styles.linklogo}> <span className={Styles.fwh}>MEDIE</span> SUSET</div> <span className={Styles.logodate}>4 - 5 - 6 - 7. JULI 2020</span> </div> </NavLink></li>
                <li className={Styles.homelink}><NavLink to={routes[0].path} >{routes[0].name}</NavLink></li>
                <li className={Styles.productslink}><NavLink to={routes[3].path} >{routes[3].name}</NavLink></li>
                <li className={Styles.contactlink}><NavLink to={routes[2].path} >{routes[2].name}</NavLink></li>
                <li className={Styles.loginlink}><NavLink to={routes[1].path} >{routes[1].name}</NavLink></li>
            </ul>
            <div className={Styles.dropdown}>
                <button className={Styles.dropbtn}>Dropdown</button>
                <div className={Styles.dropdowncontent}>
                    <NavLink to={routes[0].path}>forside</NavLink>
                    <NavLink to={routes[1].path}>login</NavLink>
                    <NavLink to={routes[2].path}>kontakt</NavLink>
                </div>
            </div>
        </nav>
    );
}