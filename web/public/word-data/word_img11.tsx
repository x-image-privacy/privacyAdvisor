import { Word } from './word-cloud-data'

export const img11: { category: string; words: Word[] }[] = [
  {
    category: 'identity',
    words: [
      { id: 'word-1', text: 'woman', coef: 1.0 },
      { id: 'word-2', text: 'people', coef: 0.9624 },
      { id: 'word-3', text: 'man', coef: 0.8944 },
      { id: 'word-4', text: 'group', coef: 0.8328 },
      { id: 'word-5', text: 'girl', coef: 0.7959 },
      { id: 'word-6', text: 'adult', coef: 0.7802 },
      { id: 'word-7', text: 'youth', coef: 0.6121 },
    ],
  },
  {
    category: 'other',
    words: [
      { id: 'word-1', text: 'many', coef: 0.874 },
      { id: 'word-2', text: 'chair', coef: 0.6556 },
      { id: 'word-3', text: 'cards', coef: 0.9813 },
      { id: 'word-4', text: 'table', coef: 0.9813 },
      { id: 'word-5', text: 'paper', coef: 0.9813 },
    ],
  },
  {
    category: 'activities',
    words: [
      { id: 'word-1', text: 'competition', coef: 0.8546 },
      { id: 'word-2', text: 'race', coef: 0.7145 },
      { id: 'word-3', text: 'interaction', coef: 0.6932 },
      { id: 'word-4', text: 'spectator', coef: 0.5643 },
      { id: 'word-5', text: 'sit', coef: 0.5008 },
      { id: 'word-6', text: 'cooperation', coef: 0.5 },
      { id: 'word-7', text: 'game', coef: 0.9813 },
      { id: 'word-8', text: 'guess', coef: 0.9813 },
    ],
  },
  {
    category: 'location',
    words: [
      { id: 'word-1', text: 'convention', coef: 0.7424 },
      { id: 'word-2', text: 'room', coef: 0.6832 },
      { id: 'word-3', text: 'indoors', coef: 0.6304 },
    ],
  },
  {
    category: 'emotions',
    words: [
      { id: 'word-1', text: 'fun', coef: 0.5209 },
      { id: 'word-2', text: 'concentration', coef: 0.5145 },
    ],
  },
]
