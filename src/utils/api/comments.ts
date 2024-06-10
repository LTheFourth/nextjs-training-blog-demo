// import axios from "axios";

// export class BlogService {
//   public static DEFAULT_SEARCH = { limit: 0, skip: 0 };

//   static async getComment(request?: {
//     limit: number;
//     skip: number;
//   }): Promise<Blog[]> {
//     const searchRequest = request || BlogService.DEFAULT_SEARCH;

//     const response = await axios
//       .get(`https://dummyjson.com/posts`, {
//         params: {
//           limit: searchRequest.limit,
//           skip: searchRequest.skip,
//         },
//       })
//       .catch((err) => {
//         throw new Error("Failed to search blogs");
//       });
//     return response.data?.posts;
//   }

//   static async getBlogDetail(blogId: number) : Promise<Blog>{
//     const response = await axios
//       .get(`https://dummyjson.com/posts/${blogId}`)
//       .catch((err) => {
//         throw new Error("Failed to search blogs");
//       });
//     return response.data;
//   }
// }
