import { Word } from './word-cloud-data'

export const img12: { category: string; words: Word[] }[] = [
  {
    category: 'identity',
    words: [
      { id: 'word-1', text: 'people', coef: 0.9931 },
      { id: 'word-2', text: 'man', coef: 0.9913 },
      { id: 'word-3', text: 'adult', coef: 0.9217 },
      { id: 'word-4', text: 'group', coef: 0.8782 },
      { id: 'word-5', text: 'confidence', coef: 0.5521 },
      { id: 'word-6', text: 'formalwear', coef: 0.5 },
    ],
  },
  {
    category: 'social status',
    words: [
      { id: 'word-1', text: 'leader', coef: 1.0 },
      { id: 'word-2', text: 'partnership', coef: 0.7981 },
    ],
  },
  {
    category: 'political opinion',
    words: [
      { id: 'word-1', text: 'politician', coef: 0.9781 },
      { id: 'word-2', text: 'diplomacy', coef: 0.5711 },
    ],
  },
  {
    category: 'job',
    words: [{ id: 'word-1', text: 'business', coef: 0.9565 }],
  },
  {
    category: 'activities',
    words: [
      { id: 'word-1', text: 'meeting', coef: 0.886 },
      { id: 'word-2', text: 'teamwork', coef: 0.712 },
      { id: 'word-3', text: 'coference', coef: 0.979 },
    ],
  },
  {
    category: 'other',
    words: [
      { id: 'word-1', text: 'three', coef: 0.7948 },
      { id: 'word-2', text: 'deal', coef: 0.5335 },
      { id: 'word-3', text: 'official', coef: 0.5282 },
    ],
  },
  {
    category: 'wealth',
    words: [
      { id: 'word-1', text: 'outfit', coef: 0.7536 },
      { id: 'word-2', text: 'suit', coef: 0.979 },
    ],
  },
  {
    category: 'emotions',
    words: [
      { id: 'word-1', text: 'serious', coef: 0.6221 },
      { id: 'word-2', text: 'concentration', coef: 0.5254 },
    ],
  },
]
