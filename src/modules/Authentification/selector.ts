import { StoreState } from "@/store/store";

export const getUsername = ({ loginReducer }: StoreState): string => loginReducer.username;