export const USER_KEY = "@user";
export const POSTS_KEY = "@posts";

export const savePostsInfo = (posts_info: string) => {
  localStorage.setItem(POSTS_KEY, posts_info);
};