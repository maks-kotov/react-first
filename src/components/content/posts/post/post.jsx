import styles from "./post.module.css"
function Post({title}) {
    return (
            <div className={styles.post}>
                <div className={styles.circle}></div>
                <div className={styles.message}>{title}</div>
            </div>
    )
}
export default Post