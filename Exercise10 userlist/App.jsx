
// App.jsx
import Userlist from './UserList';

const App = () => {
  const users = [
    { id: 1, name: 'zaakir', email: 'zaakir@example.com' },
    { id: 2, name: 'tood', email: 'tood@example.com' },
  ];

  return (
    <div>
      <Userlist users={users} />
    </div>
  );
};

export default App;
