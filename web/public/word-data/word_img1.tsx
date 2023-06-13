import { Word } from './word-cloud-data'

export const img1: { category: string; words: Word[] }[] = [
  {
    category: 'identity',
    words: [
      { id: 'word-1', text: 'people', coef: 0.974 },
      { id: 'word-2', text: 'adult', coef: 0.9726 },
      { id: 'word-3', text: 'man', coef: 0.9864 },
      { id: 'word-4', text: 'two', coef: 0.9592 },
    ],
  },
  {
    category: 'location',
    words: [
      { id: 'word-1', text: 'bed', coef: 1.0 },
      { id: 'word-2', text: 'location', coef: 0.9763 },
      { id: 'word-3', text: 'indoors', coef: 0.8424 },
      { id: 'word-4', text: 'hotel room', coef: 0.6367 },
    ],
  },
  {
    category: 'social status',
    words: [{ id: 'word-1', text: 'relationship', coef: 0.5827 }],
  },
  {
    category: 'activities',
    words: [
      { id: 'word-1', text: 'togetherness', coef: 0.9185 },
      { id: 'word-2', text: 'relaxation', coef: 0.8739 },
      { id: 'word-3', text: 'barefoot', coef: 0.7821 },
      { id: 'word-4', text: 'connection', coef: 0.5773 },
    ],
  },
  {
    category: 'other',
    words: [
      { id: 'word-1', text: 'pajamas', coef: 0.9769 },
      { id: 'word-2', text: 'pillow', coef: 0.6959 },
      { id: 'word-3', text: 'blanket', coef: 0.6887 },
      { id: 'word-4', text: 'bedtime', coef: 0.5874 },
      { id: 'word-5', text: 'double bed', coef: 0.5856 },
    ],
  },
  {
    category: 'sexual orientation',
    words: [{ id: 'word-1', text: 'couple', coef: 0.8094 }],
  },
  {
    category: 'emotions',
    words: [
      { id: 'word-1', text: 'happiness', coef: 0.7951 },
      { id: 'word-2', text: 'love', coef: 0.9303 },
      { id: 'word-3', text: 'joy', coef: 0.5 },
      { id: 'word-4', text: 'romance', coef: 0.7053 },
      { id: 'word-5', text: 'affection', coef: 0.7217 },
      { id: 'word-6', text: 'comfort', coef: 0.5567 },
    ],
  },
]
