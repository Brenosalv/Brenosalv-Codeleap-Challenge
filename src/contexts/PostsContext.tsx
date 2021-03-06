import {
  createContext,
  ReactNode,
  SetStateAction,
  useState,
  Dispatch,
  useEffect,
} from "react";
import axios from "axios";

import { PostProps } from "../types/interfaces";

import { POSTS_KEY, savePostsInfo } from '../services/auth';

interface PostsContextData {
  allPosts: PostProps[];
  setAllPosts: Dispatch<SetStateAction<PostProps[]>>;
  setNewPost: Dispatch<SetStateAction<boolean>>;
  setPostDeleted: Dispatch<SetStateAction<boolean>>;
  setPostEdited: Dispatch<SetStateAction<boolean>>;
  setPostsCount: Dispatch<SetStateAction<number>>;
}

interface PostsContextProviderProps {
  children: ReactNode;
}

export const PostsContext = createContext({} as PostsContextData)

export const PostsContextProvider = (props: PostsContextProviderProps) => {
  const [allPosts, setAllPosts] = useState<PostProps[]>(JSON.parse(localStorage.getItem(POSTS_KEY)!));
  const [newPost, setNewPost] = useState(false);
  const [postDeleted, setPostDeleted] = useState(false);
  const [postEdited, setPostEdited] = useState(false);
  const [postsCount, setPostsCount] = useState(10);

  useEffect(() => {
    axios.get(`https://dev.codeleap.co.uk/careers/?limit=${postsCount}`)
      .then(response => {
        setAllPosts(response.data.results);
        savePostsInfo(JSON.stringify(response.data.results));
      })
      .catch(error => {
        console.error(error);
      });

    setNewPost(false);
    setPostDeleted(false);
    setPostEdited(false);
  }, [newPost, postDeleted, postEdited, postsCount]);

  return (
    <PostsContext.Provider
      value={{
        allPosts,
        setAllPosts,
        setNewPost,
        setPostDeleted,
        setPostEdited,
        setPostsCount
      }}>
      {props.children}
    </PostsContext.Provider>
  )
}