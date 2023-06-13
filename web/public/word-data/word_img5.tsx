import { Word } from './word-cloud-data'

export const img5: { category: string; words: Word[] }[] = [
  {
    category: 'identity',
    words: [
      { id: 'word-1', text: 'woman', coef: 1.0 },
      { id: 'word-2', text: 'people', coef: 0.9933 },
      { id: 'word-3', text: 'adult', coef: 0.9841 },
      { id: 'word-4', text: 'two', coef: 0.8905 },
      { id: 'word-5', text: 'youth', coef: 0.701 },
    ],
  },
  {
    category: 'job',
    words: [
      { id: 'word-1', text: 'education', coef: 0.9697 },
      { id: 'word-2', text: 'school', coef: 0.9412 },
      { id: 'word-3', text: 'teacher', coef: 0.845 },
      { id: 'word-4', text: 'speaker', coef: 0.6971 },
    ],
  },
  {
    category: 'social status',
    words: [{ id: 'word-1', text: 'leader', coef: 0.9504 }],
  },
  {
    category: 'political opinion',
    words: [{ id: 'word-1', text: 'candidate', coef: 0.9066 }],
  },
  {
    category: 'location',
    words: [
      { id: 'word-1', text: 'room', coef: 0.889 },
      { id: 'word-2', text: 'university', coef: 0.8839 },
      { id: 'word-3', text: 'indoors', coef: 0.8726 },
      { id: 'word-4', text: 'press conference', coef: 0.8443 },
      { id: 'word-5', text: 'convention', coef: 0.7742 },
      { id: 'word-6', text: 'reception', coef: 0.7051 },
      { id: 'word-7', text: 'stage', coef: 0.6174 },
    ],
  },
  {
    category: 'activities',
    words: [
      { id: 'word-1', text: 'meeting', coef: 0.8758 },
      { id: 'word-2', text: 'interview', coef: 0.796 },
      { id: 'word-3', text: 'interaction', coef: 0.7542 },
      { id: 'word-4', text: 'performance', coef: 0.7374 },
      { id: 'word-5', text: 'leadership', coef: 0.7281 },
      { id: 'word-6', text: 'ceremony', coef: 0.7267 },
      { id: 'word-7', text: 'presentation', coef: 0.663 },
    ],
  },
  {
    category: 'other',
    words: [{ id: 'word-1', text: 'microphone', coef: 0.5 }],
  },
]
