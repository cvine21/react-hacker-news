import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "../redux/newsSlice";
import storyReducer from "../redux/storySlice";
import commentsReducer from "../redux/commentsSlice";

export const store = configureStore({
	reducer: {
		news: newsReducer,
		story: storyReducer,
		comments: commentsReducer,
	},
});
