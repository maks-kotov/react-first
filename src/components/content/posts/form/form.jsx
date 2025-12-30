import styles from "./form.module.css"
function Form() {
    return (
            <form className={styles.form}>
                <label className={styles.title}>My posts</label>
                <textarea className={styles.textarea} type="text" placeholder="Your news..."></textarea>
                <input className={styles.button} type="submit"></input>
            </form>
    )
}
export default Form