import Link from "next/link";

function Home() {
    return (
        <div>
            <h1>Hello World!</h1>
            <Link href="/about">
                <a>
                    <h3>go to about page</h3>
                </a>
            </Link>
            <Link href="/profile">
                <a>
                    <h3>go to profile page</h3>
                </a>
            </Link>
            <Link href="/blog">
                <a>
                    <h3>go to Blog page</h3>
                </a>
            </Link>
        </div>
    )
}


export default Home;