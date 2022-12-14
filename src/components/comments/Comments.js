import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchComments, selectComments } from "../../redux/commentsSlice";
import { selectStory } from "../../redux/storySlice";
import ErrorMessage from "../error-message/ErrorMessage";
import Comment from "./Comment";

function Comments() {
	const dispatch = useDispatch();
	const { item } = useSelector(selectStory);
	const { items, status } = useSelector(selectComments);
	const { kids, descendants } = item;

	useEffect(() => {
		if (!kids) return;

		dispatch(fetchComments(kids));
	}, [dispatch, kids]);

	const comments = kids ? (
		items.map((item) => <Comment item={item} key={item.id} />)
	) : (
		<span className="fs-6">No comments</span>
	);

	const content =
		status === "loading" ? (
			<span className="loader"></span>
		) : status === "failed" ? (
			<ErrorMessage />
		) : (
			comments
		);

	return (
		<>
			<h3 className="mt-5 pt-5 ms-2 mb-0">Comments: {descendants}</h3>
			<div className="d-flex flex-column w-100 mt-3 wrapper p-3">
				{content}
			</div>
		</>
	);
}

export default Comments;
