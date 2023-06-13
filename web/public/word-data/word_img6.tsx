import { Word } from './word-cloud-data'

export const img6: { category: string; words: Word[] }[] = [
  {
    category: 'identity',
    words: [
      { id: 'word-1', text: 'people', coef: 0.8861 },
      { id: 'word-2', text: 'adult', coef: 0.5325 },
      { id: 'word-3', text: 'man', coef: 1.0 },
      { id: 'word-4', text: 'portrait', coef: 0.9381 },
      { id: 'word-5', text: 'fine-looking', coef: 0.9381 },
      { id: 'word-6', text: 'young', coef: 0.812 },
      { id: 'word-7', text: 'two', coef: 0.6879 },
      { id: 'word-8', text: 'attitude', coef: 0.6513 },
      { id: 'word-9', text: 'facial hair', coef: 0.5205 },
    ],
  },
  {
    category: 'emotions',
    words: [
      { id: 'word-1', text: 'enjoyment', coef: 0.6467 },
      { id: 'word-2', text: 'fun', coef: 0.8902 },
      { id: 'word-3', text: 'casual', coef: 0.8083 },
      { id: 'word-4', text: 'joy', coef: 0.7029 },
    ],
  },
  {
    category: 'activities',
    words: [
      { id: 'word-1', text: 'party', coef: 0.5369 },
      { id: 'word-2', text: 'festival', coef: 0.8164 },
      { id: 'word-3', text: 'music', coef: 0.8072 },
      { id: 'word-4', text: 'laughing', coef: 0.7559 },
      { id: 'word-5', text: 'concert', coef: 0.6568 },
      { id: 'word-6', text: 'leisure', coef: 0.5813 },
      { id: 'word-7', text: 'nightlife', coef: 0.5618 },
    ],
  },
  {
    category: 'location',
    words: [
      { id: 'word-1', text: 'indoors', coef: 0.776 },
      { id: 'word-2', text: 'club', coef: 0.5621 },
      { id: 'word-3', text: 'evening', coef: 0.5 },
    ],
  },
  {
    category: 'other',
    words: [{ id: 'word-1', text: 'light', coef: 0.7793 }],
  },
  {
    category: 'social status',
    words: [{ id: 'word-1', text: 'friendship', coef: 0.6437 }],
  },
]
