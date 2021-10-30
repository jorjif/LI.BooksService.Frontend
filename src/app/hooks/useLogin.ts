import { useAppSelector } from "./hooks";
import { selectCurrentUser } from "../store/slices/auth";
import { useMemo } from "react";

export const useAuth = () => {
  const id = useAppSelector(selectCurrentUser);
  return useMemo(() => ({ id }), [id]);
};
