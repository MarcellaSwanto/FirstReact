import React, { Component, seState, useEffect, useRef } from 'react';
import RoboChart from '@postlight/react-google-sheet-to-chart';
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';
import { CSSTransition } from 'react-transition-group';
import './App.css';
import './index.css'
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react'
import ArrowKeysReact from 'arrow-keys-react';
import SearchBar from '@opuscapita/react-searchbar';
import { slide as Menu } from 'react-burger-menu'



const style = { width: '720px', margin: '0 auto' };

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // content: 'Use arrow keys on your keyboard!'
        };
    }

    //Uncomment for sidebar menu
    // showSettings (event) {
    //     event.preventDefault();
    // }

    render() {
        return (
            <>

                {/*Uncomment for sidebar menu*/}
                {/*<Menu>*/}
                {/*    <a id="home" className="menu-item" href="/">Home</a>*/}
                {/*    <a id="about" className="menu-item" href="/about">About</a>*/}
                {/*    <a id="contact" className="menu-item" href="/contact">Contact</a>*/}
                {/*    <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>*/}
                {/*</Menu>*/}
                <Navbar>
                    <NavItem icon={<BellIcon/>}>
                    </NavItem>
                    <NavItem icon={<CaretIcon/>}>
                    </NavItem>
                </Navbar>
                <SearchBar
                    onSearch={this.handleSearch}
                />
                <div>
                    <RoboChart
                        id="1eaW565Db1ds4OhhIGdMZ0QDj2w8GYpOwrDcsVJGmQWc"
                        sheet="Visitors"
                        token="AIzaSyBwS7UWKl8eel-whIjpIQ_z9uTWbHW_Pjw"
                        title="Visitors per date"
                    />
                </div>
                <div>
                    <RoboChart
                        title="Social media mentions"
                        id="1eaW565Db1ds4OhhIGdMZ0QDj2w8GYpOwrDcsVJGmQWc"
                        sheet="SocMediaMentions"
                        token="AIzaSyBwS7UWKl8eel-whIjpIQ_z9uTWbHW_Pjw"
                        type="horizontalBar"
                    />
                </div>
                <div>
                    <RoboChart
                        id="1eaW565Db1ds4OhhIGdMZ0QDj2w8GYpOwrDcsVJGmQWc"
                        sheet="UKFlights"
                        token="AIzaSyBwS7UWKl8eel-whIjpIQ_z9uTWbHW_Pjw"
                        title="Flights to the UK"
                        type="line"
                        xsuffix=" first half"
                    />
                </div>
                <div {...ArrowKeysReact.events} tabIndex="1">
                    {this.state.content}
                </div>
            </>
        );
    }
}

// Navbar Functions - to be used

function Navbar(props) {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">{props.children}</ul>
        </nav>
    );
}

function NavItem(props) {
    const [open, setOpen] = React.useState(false);

    return (
        <li className="nav-item">
            <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </a>

            {open && props.children}
        </li>
    );
}

// Dropdown with primary and secondary selections
function DropdownMenu() {
    const [activeMenu, setActiveMenu] = React.useState('main');
    const [menuHeight, setMenuHeight] = React.useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props) {
        return (
            <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </a>
        );
    }
}

export default App;

///////////////IGNORE -  Navbar with secondary menu

// import React, { Component, seState, useEffect, useRef } from 'react';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";
//
// import './App.css';
// import './index.css';
// import visitors from './visitors.js'
//
// import { CSSTransition } from 'react-transition-group';
//
// import { ReactComponent as BellIcon } from './icons/bell.svg';
// import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
// import { ReactComponent as CaretIcon } from './icons/caret.svg';
// import { ReactComponent as PlusIcon } from './icons/plus.svg';
// import { ReactComponent as CogIcon } from './icons/cog.svg';
// import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
// import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
// import { ReactComponent as BoltIcon } from './icons/bolt.svg';
//
// // const style = { width: '1200px', margin: '0 auto' }; //Horizontally scrollable
//
// function App() {
//     return (
//         <Navbar>
//                 <NavItem icon={<CaretIcon />}>
//                 <DropdownMenu>
//                 </DropdownMenu>
//             </NavItem>
//         </Navbar>
//     );
// }
// function Visitor() {
//     return (
//         <div>
//             <h2>Home</h2>
//         </div>
//     );
// }
//
// function Navbar(props) {
//     return (
//         <nav className="navbar">
//             <ul className="navbar-nav">{props.children}</ul>
//         </nav>
//     );
// }
//
// function NavItem(props) {
//     const [open, setOpen] = React.useState(false);
//
//     return (
//         <li className="nav-item">
//             <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
//                 {props.icon}
//             </a>
//
//             {open && props.children}
//         </li>
//     );
// }
//
// function DropdownMenu() {
//     const [activeMenu, setActiveMenu] = React.useState('main');
//     const [menuHeight, setMenuHeight] = React.useState(null);
//     const dropdownRef = useRef(null);
//
//     useEffect(() => {
//         setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
//     }, [])
//
//     function calcHeight(el) {
//         const height = el.offsetHeight;
//         setMenuHeight(height);
//     }
//
//     function DropdownItem(props) {
//         return (
//             <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
//                 <span className="icon-button">{props.leftIcon}</span>
//                 {props.children}
//                 <span className="icon-right">{props.rightIcon}</span>
//             </a>
//         );
//     }
//
// return (
//     <Router>
//     <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
//
//         <CSSTransition
//             in={activeMenu === 'main'}
//             timeout={500}
//             classNames="menu-primary"
//             unmountOnExit
//             onEnter={calcHeight}>
//             <div className="menu">
//                 <DropdownItem>My Profile</DropdownItem>
//                 <DropdownItem
//                     leftIcon={<CogIcon />}
//                     rightIcon={<ChevronIcon />}
//                     goToMenu="settings">
//                     Settings
//                 </DropdownItem>
//                 <DropdownItem
//                     leftIcon="🦧"
//                     rightIcon={<ChevronIcon />}
//                     goToMenu="animals">
//                     Animals
//                 </DropdownItem>
//                 <Link to="/visitor">Visitor</Link>
//             </div>
//         </CSSTransition>
//         <Switch>
//             <Route path="/visitor">
//                 <Visitor />
//             </Route>
//         </Switch>
//
//
//         <CSSTransition
//             in={activeMenu === 'settings'}
//             timeout={500}
//             classNames="menu-secondary"
//             unmountOnExit
//             onEnter={calcHeight}>
//             <div className="menu">
//                 <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
//                     <h2>My Tutorial</h2>
//                 </DropdownItem>
//                 <DropdownItem leftIcon={<BoltIcon />}>HTML</DropdownItem>
//                 <DropdownItem leftIcon={<BoltIcon />}>CSS</DropdownItem>
//                 <DropdownItem leftIcon={<BoltIcon />}>JavaScript</DropdownItem>
//                 <DropdownItem leftIcon={<BoltIcon />}>Awesome!</DropdownItem>
//             </div>
//         </CSSTransition>
//
//         <CSSTransition
//             in={activeMenu === 'animals'}
//             timeout={500}
//             classNames="menu-secondary"
//             unmountOnExit
//             onEnter={calcHeight}>
//             <div className="menu">
//                 <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
//                     <h2>Animals</h2>
//                 </DropdownItem>
//                 <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
//                 <DropdownItem leftIcon="🐸">Frog</DropdownItem>
//                 <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
//                 <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
//             </div>
//         </CSSTransition>
//     </div>
//     </Router>
// );
// }
//
//
// export default App;
//