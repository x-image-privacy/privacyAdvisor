import { Word } from './word-cloud-data'

export const img2: { category: string; words: Word[] }[] = [
  {
    category: 'identity',
    words: [
      { id: 'word-1', text: 'woman', coef: 1.0 },
      { id: 'word-2', text: 'man', coef: 0.9581 },
      { id: 'word-3', text: 'people', coef: 0.9237 },
      { id: 'word-4', text: 'two', coef: 0.6435 },
      { id: 'word-5', text: 'adult', coef: 0.5715 },
    ],
  },
  {
    category: 'location',
    words: [{ id: 'word-1', text: 'indoors', coef: 0.9224 }],
  },
  {
    category: 'activities',
    words: [{ id: 'word-1', text: 'togetherness', coef: 0.8375 }],
  },
  {
    category: 'wealth',
    words: [{ id: 'word-1', text: 'wear', coef: 0.7703 }],
  },
  {
    category: 'religion',
    words: [
      { id: 'word-1', text: 'service', coef: 0.564 },
      { id: 'word-2', text: 'church', coef: 0.8887 },
      { id: 'word-3', text: 'religion', coef: 0.8887 },
      { id: 'word-4', text: 'prayer', coef: 0.8887 },
      { id: 'word-5', text: 'blessing', coef: 0.8887 },
      { id: 'word-6', text: 'priest', coef: 0.8887 },
    ],
  },
  {
    category: 'other',
    words: [{ id: 'word-1', text: 'wine', coef: 0.8 }],
  },
]
