function Index(data) {
    return (
        <div>
            <h3>Post</h3>
            {/*<h2>{data.title}</h2>*/}
            {/*<p>{data.body}</p>*/}
        </div>
    )
}

export async function getStaticProps(ctx) {
    const {params} = ctx;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogId}`);
    const data = await res.json();
    return {
        props: {
            data: data,
        },
    };
}

export async function getStaticPaths() {
    return {
        paths: [
            {params: {blogId: "1"}},
            {params: {blogId: "2"}},
            {params: {blogId: "3"}},
        ],
        fallback: false, // can also be true or 'blocking'
    }
}




export default Index;