import Link from "next/link";
import {useRouter} from "next/router";

function Home() {
    const router = useRouter();
    const handelClick = () => {
        // router.replace("/about");
        router.push("/about");
    }
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
            <button onClick={handelClick}>Form Submit</button>
        </div>
    )
}

export default Home;