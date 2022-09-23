import Link from "next/link";

function Users({users}) {
    console.log(users)
    return (
        <div>
            <h2>All Users</h2>
            <hr/>
            {users.map(user => {
                return(
                    <div key={user.id}>
                        <Link href={`users/${user.id}`} passHref>
                            <a>
                                <h2>Name: {user.name}</h2>
                            </a>
                        </Link>
                        <h4>Username: {user.username}</h4>
                        <h4>Email: {user.email}</h4>
                        <h4>Phone: {user.phone}</h4>
                        <h4>Website: {user.website}</h4>
                        <p>Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
                        <hr/>
                    </div>
                )
            })}
        </div>
    )
}
export async function getServerSideProps(ctx) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return {
        props: {
            users: data,
        },
    };
}

export default Users;