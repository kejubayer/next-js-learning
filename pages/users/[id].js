import Link from "next/link";

function UserDetails(data) {
    return (
        <div>
            <h3>User Details</h3>
            <h2>Name: {data.data.name}</h2>
            <h4>Username: {data.data.username}</h4>
            <h4>Email: {data.data.email}</h4>
            <h4>Phone: {data.data.phone}</h4>
            <h4>Website: {data.data.website}</h4>
            <p>Address: {data.data.address.street}, {data.data.address.suite}, {data.data.address.city}, {data.data.address.zipcode}</p>
            <hr/>
            <Link href="/users">
                <a>
                    <h3>Go To User List</h3>
                </a>
            </Link>
        </div>
    )
}



export async function getServerSideProps(ctx) {
    const {params} = ctx;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const data = await res.json();
    return {
        props: {
            data,
        },
    };
}


/*export async function getStaticPaths() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    const paths = posts.map(post=>{
        return{
            params:{id: `${post.id}`},
        }
    })

    return {
        paths: paths,
        fallback: false,
    };
}*/



export default UserDetails;