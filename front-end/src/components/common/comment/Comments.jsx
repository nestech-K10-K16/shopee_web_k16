import React, { useEffect, useMemo, useState } from "react";
import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
} from "utils/dummyData";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import "./index.css";

const Comments = (currentUserId) => {
  const [backedComments, setBackedComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  useEffect(() => {
    getCommentsApi().then((data) => {
      setBackedComments(data);
    });
  }, []);

  const rootComments = useMemo(() => {
    backedComments.filter((backedComment) => backedComment.parentId === null);
  }, [backedComments]);

  const getReplies = (commentId) => {
    return backedComments
      .filter((backedComment) => backedComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  };
  const addComment = (text, parentId) => {
    createCommentApi(text, parentId).then((comment) => {
      setBackedComments([comment, ...backedComments]);
      setActiveComment(null);
    });
  };

  return (
    <div className="Shoppe__comments">
      <CommentForm submitLabel="Write" handleSubmit={addComment} />
      <div className="Shoppe__comments-container">
        {rootComments.map((rootComment) => (
          <Comment
            key={rootComment.id}
            comment={rootComment}
            replies={getReplies(rootComment.id)}
            addComment={addComment}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            currentUserId={currentUserId}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;
