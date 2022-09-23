import Link from "next/link";

function Error() {
    return(
        <div>
            <h3>Error</h3>
            <Link href={"/"} >
                <a>
                    <h5>Go to home</h5>
                </a>
            </Link>
        </div>
    )
}

export default Error;