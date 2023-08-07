import { FC } from 'react';
import { postApi } from '../services/PostService';
import { PostItem } from './PostItem';
import { IPost } from '../models/IPost';

export const PostsContainer: FC = () => {
  const { data: posts, isLoading, error } = postApi.useGetAllPostsQuery(100);
  const [createPost] = postApi.useCreatePostMutation();
  const [updatePost] = postApi.useUpdatePostMutation();
  const [deletePost] = postApi.useDeletePostMutation();

  const handleCreate = async () => {
    const title = prompt();
    await createPost({ title, body: title } as IPost);
  };

  const handleUpdate = async (post: IPost) => {
    await updatePost(post);
  };

  const handleDelete = async (post: IPost) => {
    await deletePost(post);
  };

  if (isLoading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>error when fetching posts</p>;
  }

  return (
    <div className='posts-container'>
      {!!posts?.length && (
        <>
          {posts.map((post) => {
            return (
              <PostItem
                key={post.id}
                post={post}
                update={handleUpdate}
                remove={handleDelete}
              />
            );
          })}
          <button onClick={handleCreate}>add post</button>
        </>
      )}
    </div>
  );
};
