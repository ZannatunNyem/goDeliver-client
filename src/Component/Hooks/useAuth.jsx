import { use, useContext } from "react";
import { AuthContext } from "../../Auth/AuthContext";

export default function useAuth() {
  const authInfo = useContext(AuthContext);
  return authInfo;
}
