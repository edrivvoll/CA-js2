import { renderPostsWithLoop } from "./renderPostsWithLoop.js";

export function sortPostsByDate() {
    const post = renderPostsWithLoop();
    const postArray = post.data;
    console.log(postArray)
  const posts = [
    { title: "Post 1", date: "2023-12-02" },
    { title: "Post 2", date: "2023-11-25" },
    { title: "Post 3", date: "2023-12-01" },
  ];
  posts.sort((a, b) => new Date(a.date) - new Date(b.date)); // Sort by date
  console.log(posts);
  console.log('S');
    
}
