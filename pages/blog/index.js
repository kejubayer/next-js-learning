import Link from "next/link";

function Index() {
    return(
        <div>
            <h2>Blog page</h2>
            <Link href={"/blog/1"}>
                <a>
                    <h3>Blog 1</h3>
                </a>
            </Link>
            <Link href={"/blog/2"}>
                <a>
                    <h3>Blog 2</h3>
                </a>
            </Link>
            <Link href={"/blog/3"} replace>
                <a>
                    <h3>Blog 3</h3>
                </a>
            </Link>
        </div>
    )
}
export default Index;