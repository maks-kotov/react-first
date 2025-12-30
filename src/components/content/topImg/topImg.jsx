import styles from "./topImg.module.css"
function TopImg() {
    return (
        <header>
                <img className={styles.img} src="./src/assets/images/ostrov.jpg" alt="main img"></img>
        </header>
    )
}
export default TopImg
