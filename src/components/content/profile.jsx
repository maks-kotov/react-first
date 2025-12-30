import styles from "./profile.module.css"
function Profile() {
    return (
        <main className={styles.main}>
            <header>
                <img className={styles.main__img} src="./src/assets/images/ostrov.jpg" alt="main img"></img>
            </header>
            <section className={styles.main__content}>
                <section className={styles.user}>
                    <div>
                        <img src="./src/assets/images/avatar.jpg" className={styles.user__avatar} alt="avatar"></img>
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

                <section className={styles.posts}>
                    <form className={styles.posts__form}>
                        <label className={styles.posts__title}>My posts</label>
                        <textarea className={styles.posts__textarea} type="text" placeholder="Your news..."></textarea>
                        <input className={styles.posts__button} type="submit"></input>
                    </form>

                    <div className={styles.posts__post}>
                        <div className={styles.posts__circle}></div>
                        <div className={styles.posts__message}>Hey, why nobody love me?</div>
                    </div>
                </section>

            </section>
        </main>
    )
}
export default Profile