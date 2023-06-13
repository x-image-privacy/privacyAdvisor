import { Word } from './word-cloud-data'

export const img14: { category: string; words: Word[] }[] = [
  {
    category: 'identity',
    words: [
      { id: 'word-1', text: 'people', coef: 1.0 },
      { id: 'word-2', text: 'man', coef: 0.9934 },
      { id: 'word-3', text: 'adult', coef: 0.9876 },
      { id: 'word-4', text: 'two', coef: 0.8579 },
      { id: 'word-5', text: 'woman', coef: 0.8017 },
      { id: 'word-6', text: 'profile', coef: 0.6121 },
    ],
  },
  {
    category: 'location',
    words: [
      { id: 'word-1', text: 'street', coef: 0.9585 },
      { id: 'word-2', text: 'urban', coef: 0.8067 },
      { id: 'word-3', text: 'city', coef: 0.6797 },
      { id: 'word-4', text: 'outdoors', coef: 0.644 },
    ],
  },
  {
    category: 'activities',
    words: [
      { id: 'word-1', text: 'music', coef: 0.8917 },
      { id: 'word-2', text: 'art', coef: 0.7166 },
      { id: 'word-3', text: 'sit', coef: 0.7131 },
      { id: 'word-4', text: 'building', coef: 0.5 },
    ],
  },

  {
    category: 'other',
    words: [
      { id: 'word-1', text: 'side view', coef: 0.8774 },
      { id: 'word-2', text: 'shadow', coef: 0.827 },
      { id: 'word-3', text: 'wall', coef: 0.8136 },
      { id: 'word-4', text: 'dark', coef: 0.7177 },
      { id: 'word-5', text: 'flute', coef: 0.6379 },
      { id: 'word-6', text: 'daylight', coef: 0.5376 },
    ],
  },
  {
    category: 'job',
    words: [{ id: 'word-1', text: 'musician', coef: 0.7731 }],
  },
  {
    category: 'emotion',
    words: [
      { id: 'word-1', text: 'concentration', coef: 0.7403 },
      { id: 'word-2', text: 'sadness', coef: 0.6463 },
    ],
  },
]
