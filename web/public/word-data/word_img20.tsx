import { Word } from './word-cloud-data'

export const img20: { category: string; words: Word[] }[] = [
  {
    category: 'identity',
    words: [
      { id: 'word-1', text: 'girl', coef: 1.0 },
      { id: 'word-2', text: 'baby', coef: 0.9498 },
      { id: 'word-3', text: 'family', coef: 0.9267 },
      { id: 'word-4', text: 'sibling', coef: 0.8246 },
      { id: 'word-5', text: 'boy', coef: 0.8025 },
      { id: 'word-6', text: 'toddler', coef: 0.7257 },
      { id: 'word-7', text: 'two', coef: 0.6561 },
    ],
  },
  {
    category: 'emotions',
    words: [
      { id: 'word-1', text: 'facial expression', coef: 0.7316 },
      { id: 'word-2', text: 'happiness', coef: 0.5 },
      { id: 'word-3', text: 'happy', coef: 0.8834 },
      { id: 'word-4', text: 'pretty', coef: 0.8834 },
    ],
  },
  {
    category: 'other',
    words: [
      { id: 'word-1', text: 'toy', coef: 0.6916 },
      { id: 'word-2', text: 'side view', coef: 0.6916 },
    ],
  },
  {
    category: 'wealth',
    words: [
      { id: 'word-1', text: 'motorbike', coef: 0.8834 },
      { id: 'word-2', text: 'decorations', coef: 0.8834 },
      { id: 'word-3', text: 'dress', coef: 0.8834 },
    ],
  },
  {
    category: 'activities',
    words: [
      { id: 'word-1', text: 'play', coef: 0.8834 },
      { id: 'word-2', text: 'celebration', coef: 0.8834 },
      { id: 'word-3', text: 'birthday', coef: 0.8834 },
      { id: 'word-4', text: 'communicate', coef: 0.8834 },
    ],
  },
  {
    category: 'location',
    words: [
      { id: 'word-1', text: 'outdoors', coef: 0.8834 },
      { id: 'word-2', text: 'tree', coef: 0.8834 },
      { id: 'word-3', text: 'evening', coef: 0.8834 },
      { id: 'word-4', text: 'summer', coef: 0.8834 },
    ],
  },
]
