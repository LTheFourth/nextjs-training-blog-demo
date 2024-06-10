import { Blog, PostComment } from "@/type/blog";
import axios from "axios";

export class BlogService {
  public static DEFAULT_SEARCH = { limit: 0, skip: 0 };

  static async getBlogs(request?: {
    limit: number;
    skip: number;
  }): Promise<Blog[]> {
    const searchRequest = request || BlogService.DEFAULT_SEARCH;

    const response = await axios
      .get(`https://dummyjson.com/posts`, {
        params: {
          limit: searchRequest.limit,
          skip: searchRequest.skip,
        },
      })
      .catch((err) => {
        throw new Error("Failed to search blogs");
      });
    return response.data?.posts;
  }

  static async getBlogDetail(postId: number) : Promise<Blog>{
    const response = await axios
      .get(`https://dummyjson.com/posts/${postId}`)
      .catch((err) => {
        throw new Error("Failed to search posts");
      });
    return response.data;
  }

  static async getBlogComment(postId : number): Promise<PostComment[]>{
    const response = await axios
      .get(`https://dummyjson.com/posts/${postId}/comments`)
      .catch((err) => {
        throw new Error("Failed to search comments");
      });
    return response.data?.comments;
  }
}
