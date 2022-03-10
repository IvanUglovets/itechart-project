import { useAppSelector } from "./useAppSelector";

export const useAuth = () => {
  const { email, token, name } = useAppSelector((state) => state.userSlice);

  return {
    email,
    name,
    isAuth: !!token,
  };
};
