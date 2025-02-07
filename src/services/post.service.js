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
  const userAndPosts = await prisma.post.findUnique({
    where: { id: user.postId },
  });
  if (!userAndPosts) {
    throw new Error("Post not found", { cause: "NotFoundCustomError" });
  }
  return userAndPosts;
};
export const getAllPostByIdService = async (user) => {
  const userAndPosts = await prisma.post.findMany({
    where: { authorId: user },
  });
  // if (!userAndPosts) {
  //   throw new Error("Post not found", { cause: "NotFoundCustomError" });
  // }
  return userAndPosts;
};
export const updatePostService = async (postId, loggedInUserId, updateData) => {
  const post = await prisma.post.findUnique({
    where: { id: postId },
  });
  if (!post) {
    throw new Error("Post not found", { cause: "NotFoundCustomError" });
  }
  if (updateData.likeCase == "like") {
    post.likesCount += 1;
  } else if (updateData.likeCase == "unlike") {
    if (post.likesCount > 0) {
      post.likesCount -= 1;
    }
  }
  if (updateData.content) {
    post.content = updateData.content;
  }
  if (post.authorId !== loggedInUserId) {
    throw new Error("You cannot perform this Action", {
      cause: "UnauthorizedCustomError",
    });
  } else {
    const userAndPosts = await prisma.post.update({
      where: { id: postId },
      data: post,
    });
    return userAndPosts;
  }
};
export const DeletePostByIdService = async (postId, loggedInUseruserId) => {
  const post = await prisma.post.findUnique({
    where: { id: postId },
  });
  if (!post) {
    throw new Error("Post not found", { cause: "NotFoundCustomError" });
  }

  if (post.authorId !== loggedInUseruserId) {
    throw new Error("You cannot perform this Action", {
      cause: "UnauthorizedCustomError",
    });
  } else {
    const deletedposts = await prisma.post.delete({
      where: { id: postId },
    });
    return deletedposts;
  }
};
