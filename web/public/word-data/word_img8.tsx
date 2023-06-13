import { Word } from './word-cloud-data'

export const img8: { category: string; words: Word[] }[] = [
  {
    category: 'identity',
    words: [
      { id: 'word-1', text: 'people', coef: 1.0 },
      { id: 'word-2', text: 'woman', coef: 0.969 },
      { id: 'word-3', text: 'adult', coef: 0.9592 },
      { id: 'word-4', text: 'child', coef: 0.9968 },
      { id: 'word-5', text: 'family', coef: 0.9643 },
      { id: 'word-6', text: 'girl', coef: 0.9961 },
      { id: 'word-7', text: 'group', coef: 0.9346 },
      { id: 'word-8', text: 'youth', coef: 0.5905 },
      { id: 'word-9', text: 'tatoo', coef: 0.9563 },
    ],
  },
  {
    category: 'wealth',
    words: [{ id: 'word-1', text: 'wear', coef: 0.9702 }],
  },
  {
    category: 'emotions',
    words: [
      { id: 'word-1', text: 'facial expression', coef: 0.9583 },
      { id: 'word-2', text: 'happiness', coef: 0.8984 },
      { id: 'word-3', text: 'enjoyment', coef: 0.738 },
      { id: 'word-4', text: 'fun', coef: 0.6613 },
    ],
  },
  {
    category: 'activities',
    words: [
      { id: 'word-1', text: 'celebration', coef: 0.9184 },
      { id: 'word-2', text: 'togetherness', coef: 0.704 },
      { id: 'word-3', text: 'party', coef: 0.6851 },
      { id: 'word-4', text: 'recreation', coef: 0.6443 },
    ],
  },
  {
    category: 'location',
    words: [
      { id: 'word-1', text: 'room', coef: 0.8988 },
      { id: 'word-2', text: 'indoors', coef: 0.8128 },
    ],
  },
  {
    category: 'religion',
    words: [
      { id: 'word-1', text: 'Christmas', coef: 0.7871 },
      { id: 'word-2', text: 'santa', coef: 0.9563 },
    ],
  },
  {
    category: 'other',
    words: [{ id: 'word-1', text: 'sweater', coef: 0.5 }],
  },
]
