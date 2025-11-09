function Main() {
    return (
        <main className="main">
            <header>
                <img className="main__img" src="./images/ostrov.jpg" alt="main img"></img>
            </header>
            <section className="main__content">
                <section className="user-card">
                    <div>
                        <img src="./images/avatar.jpg" className="user-card__avatar" alt="avatar"></img>
                    </div>
                    <div className="user-card__data">
                        <div className="user-card__name">makson</div>
                        <div>
                            <ul className="user-card__resume">
                                <li>Date of birth: 23 april</li>
                                <li>City: budyonovka</li>
                                <li>Education: school</li>
                                <li>Web-site: no</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="my-posts">
                    <form className="my-posts__form">
                        <label className="my-posts__title">My posts</label>
                        <textarea className="my-posts__textarea" type="text" placeholder="Your news..."></textarea>
                        <input className="my-posts__button" type="submit"></input>
                    </form>

                    <div className="my-posts__post">
                        <div className="my-posts__circle"></div>
                        <div className="my-posts__message">Hey, why nobody love me?</div>
                    </div>
                </section>

            </section>
        </main>
    )
}
export default Main