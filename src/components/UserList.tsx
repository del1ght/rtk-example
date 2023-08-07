import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchUsers } from '../store/reducers/ActionCreators';

export const UserList = () => {
  const { users, error, loading } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      {!!users.length && users.map((user) => <p key={user.id}>{user.name}</p>)}
    </>
  );
};
