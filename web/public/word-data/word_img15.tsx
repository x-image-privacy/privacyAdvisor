import { Word } from './word-cloud-data'

export const img15: { category: string; words: Word[] }[] = [
  {
    category: 'wealth',
    words: [
      { id: 'word-1', text: 'wear', coef: 0.7157 },
      { id: 'word-2', text: 'glamour', coef: 0.594 },
      { id: 'word-3', text: 'luxury', coef: 0.5931 },
      { id: 'word-4', text: 'fashion', coef: 0.9312 },
    ],
  },
  {
    category: 'emotions',
    words: [
      { id: 'word-1', text: 'smile', coef: 0.6664 },
      { id: 'word-2', text: 'romance', coef: 0.5874 },
      { id: 'word-3', text: 'facial expression', coef: 0.5007 },
      { id: 'word-4', text: 'love', coef: 0.94 },
    ],
  },
  {
    category: 'activities',
    words: [
      { id: 'word-1', text: 'party', coef: 0.6103 },
      { id: 'word-2', text: 'celebration', coef: 0.6384 },
    ],
  },
  {
    category: 'other',
    words: [{ id: 'word-1', text: 'flower', coef: 0.5176 }],
  },
  {
    category: 'identity',
    words: [
      { id: 'word-1', text: 'young', coef: 0.5 },
      { id: 'word-2', text: 'woman', coef: 0.9913 },
      { id: 'word-3', text: 'man', coef: 0.9884 },
      { id: 'word-4', text: 'two', coef: 0.8814 },
      { id: 'word-5', text: 'adult', coef: 0.8022 },
    ],
  },
  {
    category: 'sexual orientation',
    words: [{ id: 'word-1', text: 'couple', coef: 1.0 }],
  },
  {
    category: 'job',
    words: [{ id: 'word-1', text: 'model', coef: 0.9133 }],
  },
  {
    category: 'location',
    words: [
      { id: 'word-1', text: 'indoors', coef: 0.9287 },
      { id: 'word-2', text: 'hotel', coef: 0.9197 },
    ],
  },
]
