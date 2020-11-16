import { StoreState } from "@/store/store";
import { BoardType } from "@/types";

export const getBoard = ({ gameReducer }: StoreState): BoardType => gameReducer.board;

export const getSpeed = ({ gameReducer }: StoreState): number => gameReducer.speed;