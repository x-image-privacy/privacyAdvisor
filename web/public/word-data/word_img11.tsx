import { Word } from './word-cloud-data'

export const img11: { category: string; words: Word[] }[] = [
  {
    category: 'job',
    words: [{ id: 'word-1', text: 'administration', coef: 1.0 }],
  },
  {
    category: 'social status',
    words: [
      { id: 'word-1', text: 'leader', coef: 0.9992 },
      { id: 'word-2', text: 'authority', coef: 0.6672 },
    ],
  },
  {
    category: 'political opinion',
    words: [
      { id: 'word-1', text: 'politician', coef: 0.9908 },
      { id: 'word-2', text: 'democracy', coef: 0.9457 },
      { id: 'word-3', text: 'presidential', coef: 0.9273 },
      { id: 'word-4', text: 'parliament', coef: 0.7909 },
      { id: 'word-5', text: 'diplomacy', coef: 0.7571 },
      { id: 'word-6', text: 'legislature', coef: 0.6242 },
      { id: 'word-7', text: 'candidate', coef: 0.5626 },
      { id: 'word-8', text: 'law', coef: 0.5275 },
      { id: 'word-9', text: 'public forum', coef: 0.9531 },
    ],
  },
  {
    category: 'activities',
    words: [
      { id: 'word-1', text: 'meeting', coef: 0.9766 },
      { id: 'word-2', text: 'cooperation', coef: 0.5 },
    ],
  },
  {
    category: 'other',
    words: [{ id: 'word-1', text: 'chair', coef: 0.9613 }],
  },
  {
    category: 'identity',
    words: [
      { id: 'word-1', text: 'man', coef: 0.8783 },
      { id: 'word-2', text: 'two', coef: 0.8415 },
      { id: 'word-3', text: 'adult', coef: 0.7471 },
      { id: 'word-4', text: 'International', coef: 0.6902 },
    ],
  },
  {
    category: 'location',
    words: [
      { id: 'word-1', text: 'press conference', coef: 0.8499 },
      { id: 'word-2', text: 'indoors', coef: 0.702 },
    ],
  },
]
