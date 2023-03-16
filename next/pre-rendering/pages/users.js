import User from "../components/user";

const UserList = ({ users }) => {
  return (
    <>
      <h1>List of Users</h1>
      {users.map((user, index) => {
        return (
          <div key={index}>
            <User user={user} />
          </div>
        );
      })}
    </>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
  return {
    props: { users: data },
  };
}

export default UserList;
