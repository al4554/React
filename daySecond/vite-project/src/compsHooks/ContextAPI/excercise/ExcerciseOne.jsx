import UpdateProfile from "./components/UpdateProfile";
import UpdateUser from "./components/UpdateUser";
import { UserProvider } from "./UserContext";
 

const ExcerciseOne = () => {
  return (
    <UserProvider>
      <UpdateProfile />
      <UpdateUser />
    </UserProvider>
  );
};

export default ExcerciseOne ;
