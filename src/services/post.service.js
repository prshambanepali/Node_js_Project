import { prisma } from "../db/index.js";

export const getAllPostsService = async () => {
  const posts = await prisma.post.findMany();
  return posts;
};
export const createPostService = async (postData, userId) => {
  const userAndPosts = await prisma.post.create({
    data: {
      content: postData.content,
      authorId: userId,
    },
  });
  return userAndPosts;
};
export const getPostByIdService = async (user) => {
  console.log(user);
  const userAndPosts = await prisma.post.findUnique({
    where: { id: user.postId },
  });
  return userAndPosts;
};
export const UpdatePostService = async (user) => {
  const userAndPosts = await prisma.post.update({
    where: { id: user.postId },
    data: {
      content: user.content,
    },
  });
  return userAndPosts;
};
export const DeletePostService = async (user) => {
  const Posts = await prisma.post.delete({
    where: { id: user.id },
  });
  return Posts;
};
