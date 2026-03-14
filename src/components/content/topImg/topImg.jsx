import styles from "./topImg.module.css"
import ostrov from "../../../images/ostrov.jpg"
function TopImg() {
    return (
        <header>
                <img className={styles.img} src={ostrov} alt="main img"></img>
        </header>
    )
}
export default TopImg
