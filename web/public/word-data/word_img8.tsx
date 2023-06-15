import { Word } from './word-cloud-data'

export const img8: { category: string; words: Word[] }[] = [
  {
    category: 'identity',
    words: [
      { id: 'word-1', text: 'woman', coef: 1.0 },
      { id: 'word-2', text: 'group', coef: 0.9839 },
      { id: 'word-3', text: 'adult', coef: 0.9576 },
    ],
  },
  {
    category: 'wealth',
    words: [{ id: 'word-1', text: 'wear', coef: 0.7907 }],
  },
  {
    category: 'location',
    words: [{ id: 'word-1', text: 'exhibition', coef: 0.6953 }],
  },
  {
    category: 'emotions',
    words: [
      { id: 'word-1', text: 'facial expression', coef: 0.5661 },
      { id: 'word-2', text: 'happiness', coef: 0.5012 },
    ],
  },
  {
    category: 'other',
    words: [{ id: 'word-1', text: 'win', coef: 0.5508 }],
  },
  {
    category: 'activities',
    words: [
      { id: 'word-1', text: 'celebration', coef: 0.5193 },
      { id: 'word-2', text: 'birthday', coef: 0.5 },
    ],
  },
]
