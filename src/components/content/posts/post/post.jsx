import styles from "./post.module.css"
function Post() {
    return (
            <div className={styles.post}>
                <div className={styles.circle}></div>
                <div className={styles.message}>Hey, why nobody love me?</div>
            </div>
    )
}
export default Post