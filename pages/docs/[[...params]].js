import {useRouter} from "next/router";

function Document() {
    const router = useRouter();
    const params = router.query.params || [];

    if (params.length == 2){
        return (
            <div>
                <h2>{params[0]} and {params[1]}</h2>
            </div>
        )
    }
    if (params.length == 1){
        return (
            <div>
                <h2>{params[0]}</h2>
            </div>
        )
    }
    return(
        <div>
            Document home page
        </div>
    )
}
export default Document;