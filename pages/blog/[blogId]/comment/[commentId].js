import {useRouter} from "next/router";

function CommentDetails() {
    const router = useRouter();
    const {blogId, commentId} = router.query;
    // const blogId = router.query.blogId;
    // const commentId = router.query.commentId;
    return(
        <div>
            <h2>{blogId} Comment page {commentId}</h2>
        </div>
    )
}
export default CommentDetails;