import Link from "next/link";

function Index({data}) {
    console.log(data);
    return (
        <div>
            <h2>Blog List</h2>
            {data.map(post => {
                return (
                    <div key={post.id}>
                        <Link href={`/blog/${post.id}`} passHref>
                            <a>
                                <h3>{post.title}</h3>
                            </a>
                        </Link>
                        <p>{post.body}</p>
                        <hr/>
                    </div>
                )
            })}
        </div>
    )
}

export async function getStaticProps(ctx) {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return {
        props: {
            data: data.slice(0,3),
        },
    };
}

export default Index;