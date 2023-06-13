import { Word } from './word-cloud-data'

export const img3: { category: string; words: Word[] }[] = [
  {
    category: 'activities',
    words: [
      { id: 'word-1', text: 'event', coef: 1.0 },
      { id: 'word-2', text: 'drink', coef: 0.881 },
      { id: 'word-3', text: 'interaction', coef: 0.6844 },
      { id: 'word-4', text: 'beer', coef: 0.9751 },
    ],
  },
  {
    category: 'identity',
    words: [
      { id: 'word-1', text: 'two', coef: 0.978 },
      { id: 'word-2', text: 'brunette', coef: 0.8533 },
      { id: 'word-3', text: 'family', coef: 0.8404 },
      { id: 'word-4', text: 'woman', coef: 0.6977 },
      { id: 'word-5', text: 'adult', coef: 0.6708 },
      { id: 'word-6', text: 'portrait', coef: 0.647 },
      { id: 'word-7', text: 'photos', coef: 0.9751 },
      { id: 'word-8', text: 'glasses', coef: 0.9751 },
    ],
  },
  {
    category: 'other',
    words: [
      { id: 'word-1', text: 'furniture', coef: 0.8548 },
      { id: 'word-2', text: 'chair', coef: 0.6272 },
      { id: 'word-3', text: 'table', coef: 0.5851 },
      { id: 'word-4', text: 'computer', coef: 0.9751 },
      { id: 'word-5', text: 'flower arrangement', coef: 0.573 },
      { id: 'word-6', text: 'telephone', coef: 0.5581 },
      { id: 'word-7', text: 'book', coef: 0.9751 },
      { id: 'word-8', text: 'pants', coef: 0.5127 },
      { id: 'word-9', text: 'alcohol', coef: 0.5 },
    ],
  },
  {
    category: 'location',
    words: [
      { id: 'word-1', text: 'room', coef: 0.8035 },
      { id: 'word-2', text: 'house', coef: 0.7247 },
      { id: 'word-3', text: 'indoors', coef: 0.5983 },
    ],
  },
  {
    category: 'emotions',
    words: [{ id: 'word-1', text: 'facial expression', coef: 0.7318 }],
  },
  {
    category: 'wealth',
    words: [{ id: 'word-1', text: 'necklace', coef: 0.7183 }],
  },
]
