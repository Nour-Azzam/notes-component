export interface Note {
    author: string;
    date: string;
    text: string;
    updates: {
      author: string;
      date: string;
      text: string;
    }[];
  }