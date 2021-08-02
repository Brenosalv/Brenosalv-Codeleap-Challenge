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
}

interface PostsContextProviderProps {
  children: ReactNode;
}

export const PostsContext = createContext({} as PostsContextData)

export const PostsContextProvider = (props: PostsContextProviderProps) => {
  const [allPosts, setAllPosts] = useState<PostProps[]>(JSON.parse(localStorage.getItem(POSTS_KEY)!));

  useEffect(() => {
    axios.get("https://dev.codeleap.co.uk/careers/")
      .then(response => {
        setAllPosts(response.data.results);
        savePostsInfo(JSON.stringify(response.data.results));
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <PostsContext.Provider
      value={{
        allPosts,
        setAllPosts
      }}>
      {props.children}
    </PostsContext.Provider>
  )
}