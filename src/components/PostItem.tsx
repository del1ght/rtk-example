import { FC } from 'react';
import { IPost } from '../models/IPost';
import { postApi } from '../services/PostService';

interface PostItemProps {
  post: IPost;
  remove: (post: IPost) => Promise<void>;
  update: (post: IPost) => Promise<void>;
}

export const PostItem: FC<PostItemProps> = ({ post, update, remove }) => {
  const handleUpdate = () => {
    const newTitle = prompt() || '';

    update({ ...post, title: newTitle });
  };

  const handleDelete = () => {
    remove(post);
  };

  return (
    <div className='post'>
      <p className='post-text' onClick={handleUpdate}>
        {post.id}. <span>{post.title}</span>
      </p>
      <button onClick={handleDelete}>delete</button>
    </div>
  );
};
