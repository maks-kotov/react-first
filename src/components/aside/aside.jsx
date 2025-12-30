import styles from "./aside.module.css"
function Aside() {
    return (
        <aside className={styles.aside}>
            <nav>
                <ul>
                    <a href="#a">
                        <li>Profile</li>
                    </a>
                    <a href="#a">
                        <li>Messages</li>
                    </a>
                    <a href="#a">
                        <li>News</li>
                    </a>
                    <a href="#a">
                        <li>Music</li>
                    </a>
                    <a href="#a">
                        <li>Settings</li>
                    </a>
                </ul>
            </nav>
        </aside>
    )
}
export default Aside