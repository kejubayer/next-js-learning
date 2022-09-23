import {useRouter} from "next/router";
import Link from "next/link";

function Index() {
    const router = useRouter();
    const blogId = router.query.blogId;
    return (
        <div>
            <h2>Details page {blogId}</h2>
            <Link href={"/blog/" + blogId + "/comment/1"}>
                <a>
                    <h3>Comment 1</h3>
                </a>
            </Link>
            <Link href={"/blog/" + blogId + "/comment/2"}>
                <a>
                    <h3>Comment 2</h3>
                </a>
            </Link>

        </div>
    )
}

export default Index;