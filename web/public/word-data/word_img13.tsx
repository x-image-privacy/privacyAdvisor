import { Word } from './word-cloud-data'

export const img13: { category: string; words: Word[] }[] = [
  {
    category: 'identity',
    words: [
      { id: 'word-1', text: 'two', coef: 1.0 },
      { id: 'word-2', text: 'woman', coef: 0.9887 },
      { id: 'word-3', text: 'man', coef: 0.9641 },
      { id: 'word-4', text: 'adult', coef: 0.9055 },
      { id: 'word-5', text: 'young', coef: 0.6325 },
      { id: 'word-6', text: 'group', coef: 0.6169 },
    ],
  },
  {
    category: 'sexual orientation',
    words: [{ id: 'word-1', text: 'couple', coef: 0.9794 }],
  },
  {
    category: 'location',
    words: [
      { id: 'word-1', text: 'street', coef: 0.9755 },
      { id: 'word-2', text: 'outdoors', coef: 0.8588 },
      { id: 'word-3', text: 'urban', coef: 0.6889 },
      { id: 'word-4', text: 'city', coef: 0.5449 },
    ],
  },
  {
    category: 'emotions',
    words: [
      { id: 'word-1', text: 'love', coef: 0.9468 },
      { id: 'word-2', text: 'romance', coef: 0.6824 },
      { id: 'word-3', text: 'facial expression', coef: 0.6701 },
      { id: 'word-4', text: 'affection', coef: 0.6153 },
      { id: 'word-5', text: 'casual', coef: 0.6152 },
    ],
  },
  {
    category: 'wealth',
    words: [
      { id: 'word-1', text: 'fashion', coef: 0.9196 },
      { id: 'word-2', text: 'shirt', coef: 0.5 },
    ],
  },
  {
    category: 'other',
    words: [
      { id: 'word-1', text: 'retro', coef: 0.6987 },
      { id: 'word-2', text: 'alcohol', coef: 0.9633 },
    ],
  },
  {
    category: 'activities',
    words: [
      { id: 'word-1', text: 'walk', coef: 0.683 },
      { id: 'word-2', text: 'beer', coef: 0.9633 },
    ],
  },
]
