import react from "react";
import{NavLink} from "react-router-dom"

const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
}

function NavBar() {
    return (
        <div>
             
            <NavLink
            to="/about"
            exact   
            style={({isActive})=>{
            return ({
            ...linkStyles,
            background: isActive ? 'darkblue' : 'purple'
            })
            }}
            >
                About
            </NavLink>
             
            <NavLink
            to="/login"
            exact   
            style={({isActive})=>{
            return ({
            ...linkStyles,
            background: isActive ? 'darkblue' : 'purple'
            })
            }}
            >
                Login
            </NavLink>

            <NavLink
            to="/"
            exact   
            style={({isActive})=>{
            return ({
            ...linkStyles,
            background: isActive ? 'darkblue' : 'purple'
            })
            }}>
            Home
            </NavLink>
        </div>
    )
}

export default NavBar