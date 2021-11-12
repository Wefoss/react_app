import { Component } from "react";
import styles from './Link.module.css'

class Link extends Component {
    render() {
        const {text, className, href} = this.props
        return ( 
                      
            <a className={styles[className]} href={href}>{text}</a>
            
        )
    }
}

export default Link
