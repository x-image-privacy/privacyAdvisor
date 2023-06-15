import { Word } from './word-cloud-data'

export const img7: { category: string; words: Word[] }[] = [
  {
    category: 'identity',
    words: [
      { id: 'word-1', text: 'people', coef: 1.0 },
      { id: 'word-2', text: 'woman', coef: 0.9977 },
      { id: 'word-3', text: 'adult', coef: 0.976 },
      { id: 'word-4', text: 'two', coef: 0.9431 },
      { id: 'word-5', text: 'family', coef: 0.8858 },
    ],
  },
  {
    category: 'emotions',
    words: [
      { id: 'word-1', text: 'fun', coef: 0.9833 },
      { id: 'word-2', text: 'facial expression', coef: 0.9587 },
      { id: 'word-3', text: 'enjoyment', coef: 0.9028 },
      { id: 'word-4', text: 'smile', coef: 0.881 },
      { id: 'word-5', text: 'joy', coef: 0.7898 },
    ],
  },
  {
    category: 'activities',
    words: [
      { id: 'word-1', text: 'music', coef: 0.9391 },
      { id: 'word-2', text: 'group together', coef: 0.7701 },
      { id: 'word-3', text: 'dancing', coef: 0.7689 },
      { id: 'word-4', text: 'party', coef: 0.7643 },
      { id: 'word-5', text: 'celebration', coef: 0.6652 },
      { id: 'word-6', text: 'pose', coef: 0.5 },
    ],
  },
  {
    category: 'location',
    words: [
      { id: 'word-1', text: 'bar', coef: 0.9103 },
      { id: 'word-2', text: 'restaurant', coef: 0.8977 },
      { id: 'word-3', text: 'indoors', coef: 0.86 },
      { id: 'word-4', text: 'club', coef: 0.846 },
      { id: 'word-5', text: 'summer', coef: 0.8311 },
      { id: 'word-6', text: 'evening', coef: 0.7876 },
    ],
  },
  {
    category: 'wealth',
    words: [{ id: 'word-1', text: 'dress', coef: 0.7821 }],
  },
]
