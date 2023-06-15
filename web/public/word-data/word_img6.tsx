import { Word } from './word-cloud-data'

export const img6: { category: string; words: Word[] }[] = [
  {
    category: 'identity',
    words: [
      { id: 'word-1', text: 'people', coef: 1.0 },
      { id: 'word-2', text: 'woman', coef: 0.976 },
      { id: 'word-3', text: 'adult', coef: 0.9587 },
      { id: 'word-4', text: 'child', coef: 0.9391 },
      { id: 'word-5', text: 'family', coef: 0.86 },
      { id: 'word-6', text: 'boy', coef: 0.846 },
      { id: 'word-7', text: 'son', coef: 0.7876 },
      { id: 'word-8', text: 'two', coef: 0.7701 },
      { id: 'word-9', text: 'young', coef: 0.6652 },
    ],
  },
  {
    category: 'location',
    words: [
      { id: 'word-1', text: 'street', coef: 0.9977 },
      { id: 'word-2', text: 'nature', coef: 0.9103 },
      { id: 'word-3', text: 'outdoors', coef: 0.8858 },
      { id: 'word-4', text: 'summer', coef: 0.881 },
      { id: 'word-5', text: 'outside', coef: 0.7898 },
    ],
  },
  {
    category: 'ethnicity',
    words: [
      { id: 'word-1', text: 'culture', coef: 0.9833 },
      { id: 'word-2', text: 'traditional', coef: 0.9431 },
    ],
  },
  {
    category: 'wealth',
    words: [
      { id: 'word-1', text: 'wear', coef: 0.9028 },
      { id: 'word-2', text: 'lifestyle', coef: 0.8977 },
      { id: 'word-3', text: 'dress', coef: 0.8311 },
    ],
  },
  {
    category: 'emotions',
    words: [{ id: 'word-1', text: 'love', coef: 0.7821 }],
  },
  {
    category: 'activities',
    words: [{ id: 'word-1', text: 'sit', coef: 0.7689 }],
  },
  {
    category: 'other',
    words: [{ id: 'word-1', text: 'daylight', coef: 0.7643 }],
  },
  {
    category: 'social status',
    words: [{ id: 'word-1', text: 'mother', coef: 0.5 }],
  },
]
