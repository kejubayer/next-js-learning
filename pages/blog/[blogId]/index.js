import Link from "next/link";

function Index(data) {
    return (
        <div>
            <h3>Post</h3>
            <h2>{data.data.title}</h2>
            <p>{data.data.body}</p>
            <hr/>
            <Link href="/blog">
                <a>
                    <h3>go to Blog page</h3>
                </a>
            </Link>
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
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    const paths = posts.map(post=>{
        return{
            params:{blogId: `${post.id}`},
        }
    })

    return {
        paths: paths,
        fallback: false,
    };
}



export default Index;