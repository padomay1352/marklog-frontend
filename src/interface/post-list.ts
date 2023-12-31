import { Tag } from "./tag";

export interface PostList {
	postId: number;
	thumbnail: string;
	title: string;
	summary: string;
	createdDate: string;
	commentCount: number;
	likeCount: number;
	picture: string;
	userName: string;
	userId: number;
	tagList: Array<Tag>;
}
