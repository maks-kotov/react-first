import Description from "./description/description"
import Posts from "./posts/posts"
import styles from "./profile.module.css"
import TopImg from "./topImg/topImg"
function Profile() {
    return (
        <main className={styles.main}>
            <TopImg />
            <section className={styles.main__content}>
                <Description />
                <Posts />
            </section>
        </main>
    )
}
export default Profile