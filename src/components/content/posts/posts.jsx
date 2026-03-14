import Post from "./post/post"
import Form from "./form/form"
function Posts() {
    return (
        <section>
            <Form />
            <Post title={'Hey, why nobody love me?'} />
            <Post title={'Lifealive...'}/>
            <Post title={'Who are you?'}/>
            <Post title={'Dont look at me'}/>
            <Post title={'Now 01.01.2026'}/>
        </section>
    )
}
export default Posts
