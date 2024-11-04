import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { postsData, forums, users } from "@/data/loadData";
import Header from "@/components/Header";
import { FaTrashAlt } from "react-icons/fa";
import styles from "@/styles/ForumPage.module.css";

export default function ForumPage() {
    const router = useRouter();
    const { forum_id } = router.query;
    const forumId = parseInt(forum_id, 10);
   // console.log(postsData);

    const [posts, setPosts] = useState(postsData.filter(post => post.forum_id === forumId));
    const [openComments, setOpenComments] = useState(new Array(postsData.length).fill(false));
    const [newPost, setNewPost] = useState({ title: "", content: "", link: "" });
    const [newComment, setNewComment] = useState({});
    const [userId, setUserId] = useState(null);
    const [userRole, setUserRole] = useState(null);

    console.log("forumId:", forumId);
console.log("postsData:", postsData); 
console.log("Filtered Posts:", postsData.filter(post => post.forum_id === forumId));
console.log(posts);

    useEffect(() => {
        let storedUserId = sessionStorage.getItem("userId");
        let storedUserRole = sessionStorage.getItem("userRole");

        if (!storedUserId) {
            alert("Please login to continue");
            window.location.href = "/login";
        } else {
            setUserId(storedUserId);
            setUserRole(storedUserRole);
        }
    }, []);

    useEffect(() => {
        if (postsData.length > 0) {
          setPosts(postsData.filter(post => post.forum_id === forumId));
        }
      }, [postsData, forumId]);

    const currentUser = users[userId];

    console.log(posts);

    const handleAddPost = (e) => {
        e.preventDefault();
        if (newPost.title.trim() && newPost.content.trim()) {
            const postToAdd = {
                post_id: posts.length + 1,
                posted_by: currentUser.user_name,
                posted_date: new Date().toLocaleDateString(),
                posted_time: new Date().toLocaleTimeString(),
                forum_id: forumId,
                title: newPost.title,
                content: newPost.content,
                link: newPost.link || "",
                comments: []
            };
            setPosts([...posts, postToAdd]);
            setNewPost({ title: "", content: "", link: "" });
        }
    };

    console.log(posts);

    const handleDeletePost = (postId) => {
        const updatedPosts = posts.filter(post => post.post_id !== postId);
        setPosts(updatedPosts);
    };

    const handlePostChange = (e) => {
        const { name, value } = e.target;
        setNewPost({ ...newPost, [name]: value });
    };

    const toggleComments = (index) => {
        const updatedOpenComments = [...openComments];
        updatedOpenComments[index] = !updatedOpenComments[index];
        setOpenComments(updatedOpenComments);
    };

    console.log(posts);

    const handleCommentChange = (index, e) => {
        const { value } = e.target;
        setNewComment((prev) => ({ ...prev, [index]: value }));
    };

    const handleAddComment = (index) => {
        if (newComment[index]?.trim()) {
            const updatedPosts = [...posts];
            updatedPosts[index].comments.push({
                username: "You",
                text: newComment[index],
            });
            setPosts(updatedPosts);
            setNewComment((prev) => ({ ...prev, [index]: "" }));
        }
    };

    console.log(posts);

    console.log(forumId);
    console.log(posts);

    return (
        <>
            <Header />
            <div className={styles.forumPage}>
                <h2 className="pageTitle">{forums[forumId - 1]?.forum_name}</h2>
                <p>{forums[forumId - 1]?.forum_description}</p>

                <h2>Posts</h2>

                <div className={styles.postsSection}>
                    {console.log(posts)}
                    {posts.map((post, index) => (
                        <div key={index} className={styles.postItem}>
                            <div className={styles.postUsername}>{post.posted_by}</div>
                            <div className={styles.postContent}>
                                <div className={styles.postDetails}>
                                    <h4>{post.title}</h4>
                                    <p>{post.content}</p>
                                    {post.link && (
                                        <a className={styles.readMore} href={post.link} target="_blank" rel="noopener noreferrer">Read More</a>
                                    )}
                                </div>
                                <button className={styles.commentsButton} onClick={() => toggleComments(index)}>Comments ({post.comments.length})</button>

                                {userId === post.userId && (
                                    <button
                                        className={styles.deletePostButton}
                                        onClick={() => handleDeletePost(post.post_id)}>
                                        <FaTrashAlt size={15} color="red" />
                                    </button>
                                )}
                            </div>
                            {openComments[index] && (
                                <div className={styles.commentsSection}>
                                    {post.comments.map((comment, commentIndex) => (
                                        <div key={commentIndex} className={styles.comment}>
                                            <span className={styles.commentUsername}>{comment.username}:</span> {comment.text}
                                        </div>
                                    ))}
                                    <div className={styles.newComment}>
                                        <input
                                            type="text"
                                            value={newComment[index] || ""}
                                            onChange={(e) => handleCommentChange(index, e)}
                                            placeholder="Add a comment..."
                                        />
                                        <button onClick={() => handleAddComment(index)}>Add</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                    <hr />
                    <div className={styles.newPostForm}>
                        <form onSubmit={handleAddPost}>
                            <input
                                type="text"
                                name="title"
                                value={newPost.title}
                                onChange={handlePostChange}
                                placeholder="Post Title"
                                required
                            />
                            <textarea
                                name="content"
                                value={newPost.content}
                                onChange={handlePostChange}
                                placeholder="Post Description"
                                required
                            ></textarea>
                            <input
                                type="text"
                                name="link"
                                value={newPost.link}
                                onChange={handlePostChange}
                                placeholder="Post Link (optional)"
                            />
                            <br />
                            <button type="submit">Add Post</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}