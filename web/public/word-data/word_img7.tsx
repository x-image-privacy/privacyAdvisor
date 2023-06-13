import { Word } from './word-cloud-data'

export const img7: { category: string; words: Word[] }[] = [
  {
    category: 'identity',
    words: [
      { id: 'word-1', text: 'people', coef: 1.0 },
      { id: 'word-2', text: 'child', coef: 0.9265 },
      { id: 'word-3', text: 'family', coef: 0.8781 },
      { id: 'word-4', text: 'girl', coef: 0.9607 },
      { id: 'word-5', text: 'two', coef: 0.9708 },
    ],
  },
  {
    category: 'wealth',
    words: [{ id: 'word-1', text: 'wear', coef: 0.9835 }],
  },
  {
    category: 'emotions',
    words: [{ id: 'word-1', text: 'happiness', coef: 0.625 }],
  },
  {
    category: 'activities',
    words: [
      { id: 'word-1', text: 'celebration', coef: 0.6549 },
      { id: 'word-2', text: 'togetherness', coef: 0.6203 },
      { id: 'word-3', text: 'party', coef: 0.5 },
      { id: 'word-4', text: 'preparation', coef: 0.6191 },
    ],
  },
  {
    category: 'location',
    words: [
      { id: 'word-1', text: 'room', coef: 0.9511 },
      { id: 'word-2', text: 'indoors', coef: 0.9604 },
      { id: 'word-3', text: 'home', coef: 0.8061 },
      { id: 'word-4', text: 'window', coef: 0.6495 },
    ],
  },
  {
    category: 'other',
    words: [
      { id: 'word-1', text: 'furniture', coef: 0.9285 },
      { id: 'word-2', text: 'blur', coef: 0.8432 },
      { id: 'word-3', text: 'meal', coef: 0.7298 },
      { id: 'word-4', text: 'table', coef: 0.7268 },
      { id: 'word-5', text: 'vintage', coef: 0.6754 },
    ],
  },
]
