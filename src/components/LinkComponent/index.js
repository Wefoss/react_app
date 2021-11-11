import { Component } from "react";
import styles from './Link.module.css'

class Link extends Component {
    render() {
        const {text, className, href} = this.props
        return ( 
            <>
            <div className={styles.test}>text1</div>
            <a className={styles[className]} href={href}>{text}</a>
            </>
        )
    }
}

export default Link