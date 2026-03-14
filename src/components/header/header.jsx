import styles from "./header.module.css"
import logo from "../../images/logo2.png"
//jsx файл - то же самое, что кусок html'я файл. мы подключаем к этому куску html'я стили
//таким образом разным элементам кусков html'я можно давать одинаковые классы и они будут работать только в этом файле
function Header() {
    return (
        <header className={styles.header}>
            <figure>
                <img className={styles.logo} src={logo} />
            </figure>
        </header>
    )
}
export default Header