import { Word } from './word-cloud-data'

export const img16: { category: string; words: Word[] }[] = [
  {
    category: 'identity',
    words: [
      { id: 'word-1', text: 'people', coef: 1.0 },
      { id: 'word-2', text: 'woman', coef: 0.9762 },
      { id: 'word-3', text: 'man', coef: 0.9647 },
      { id: 'word-4', text: 'adult', coef: 0.9381 },
      { id: 'word-5', text: 'wig', coef: 0.9318 },
      { id: 'word-6', text: 'tattoo', coef: 0.9283 },
    ],
  },
  {
    category: 'activities',
    words: [
      { id: 'word-1', text: 'festival', coef: 0.9974 },
      { id: 'word-2', text: 'costume', coef: 0.9724 },
      { id: 'word-3', text: 'party', coef: 0.9396 },
      { id: 'word-4', text: 'performance', coef: 0.9237 },
      { id: 'word-5', text: 'public show', coef: 0.8879 },
      { id: 'word-6', text: 'event', coef: 0.8325 },
    ],
  },
  {
    category: 'job',
    words: [{ id: 'word-1', text: 'model', coef: 0.9634 }],
  },
  {
    category: 'emotions',
    words: [
      { id: 'word-1', text: 'strange', coef: 0.9621 },
      { id: 'word-2', text: 'fun', coef: 0.912 },
    ],
  },
  {
    category: 'wealth',
    words: [
      { id: 'word-1', text: 'fashion', coef: 0.9317 },
      { id: 'word-2', text: 'wear', coef: 0.9032 },
    ],
  },
  {
    category: 'location',
    words: [{ id: 'word-1', text: 'exhibition', coef: 0.8968 }],
  },
  {
    category: 'sexual orientation',
    words: [
      { id: 'word-1', text: 'bikini', coef: 0.7951 },
      { id: 'word-2', text: 'nude', coef: 0.7632 },
    ],
  },
  {
    category: 'other',
    words: [
      { id: 'word-1', text: 'superhero', coef: 0.7681 },
      { id: 'word-2', text: 'anime', coef: 0.979 },
      { id: 'word-3', text: 'comic', coef: 0.5 },
    ],
  },
]
