import {
  createContext,
  ReactNode,
  SetStateAction,
  useState,
  Dispatch,
  useEffect,
} from "react";

import { PostProps } from "../types/interfaces";

import { POSTS_KEY, savePostsInfo } from '../services/auth';
import axios from "axios";

interface PostsContextData {
  allPosts: PostProps[];
  setAllPosts: Dispatch<SetStateAction<PostProps[]>>;
  setNewPost: Dispatch<SetStateAction<boolean>>;
  setPostDeleted: Dispatch<SetStateAction<boolean>>;
}

interface PostsContextProviderProps {
  children: ReactNode;
}

export const PostsContext = createContext({} as PostsContextData)

export const PostsContextProvider = (props: PostsContextProviderProps) => {
  const [allPosts, setAllPosts] = useState<PostProps[]>(JSON.parse(localStorage.getItem(POSTS_KEY)!));
  const [newPost, setNewPost] = useState(false);
  const [postDeleted, setPostDeleted] = useState(false);

  useEffect(() => {
    axios.get("https://dev.codeleap.co.uk/careers/")
      .then(response => {
        setAllPosts(response.data.results);
        savePostsInfo(JSON.stringify(response.data.results));
      })
      .catch(error => {
        console.error(error);
      });

    setNewPost(false);
    setPostDeleted(false);
  }, [newPost, postDeleted]);

  return (
    <PostsContext.Provider
      value={{
        allPosts,
        setAllPosts,
        setNewPost,
        setPostDeleted
      }}>
      {props.children}
    </PostsContext.Provider>
  )
}