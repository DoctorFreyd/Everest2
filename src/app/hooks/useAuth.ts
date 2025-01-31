import { useSelector, UseSelector } from "react-redux";
import { RootState } from "@/store/store";

export function useAuth() {
    const user = useSelector((state: RootState) => state.auth.user);
    return {user};
}