export interface Question {
  question: string;
  answer: string;
}

export interface Category {
  id: string;
  title: string;
  emoji: string;
  description: string;
  questions: Question[];
}

export interface InterviewData {
  categories: Category[];
}
