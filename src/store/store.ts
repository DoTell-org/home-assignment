import { create } from 'zustand';
import { BoardInterface } from './types';

interface BoardState {
  board: BoardInterface | Record<string, never>;
  // Add actions here as needed
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useBoardStore = create<BoardState>((_set) => ({
  board: {},
  // Actions will go here
}));