import styles from "./description.module.css"
import avatar from "../../../images/avatar.jpg"
function Description() {
    return (
        <section className={styles.user}>
            <div>
                <img src={avatar} className={styles.user__avatar} alt="avatar"></img>
            </div>
            <div className={styles.user__data}>
                <div className={styles.user__name}>makson</div>
                <div>
                    <ul className={styles.user__resume}>
                        <li>Date of birth: 23 april</li>
                        <li>City: budyonovka</li>
                        <li>Education: school</li>
                        <li>Web-site: no</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default Description
