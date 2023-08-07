import './App.css';
import { PostsContainer } from './components/PostsContainer';
import { UserList } from './components/UserList';

function App() {
  return (
    <div>
      <UserList />
      <hr />
      <PostsContainer />
    </div>
  );
}

export default App;
