import { Word } from './word-cloud-data'

export const img21: { category: string; words: Word[] }[] = [
  {
    category: 'identity',
    words: [
      { id: 'word-1', text: 'family', coef: 1.0 },
      { id: 'word-2', text: 'two', coef: 0.9977 },
      { id: 'word-3', text: 'boy', coef: 0.9928 },
      { id: 'word-4', text: 'man', coef: 0.9928 },
      { id: 'word-5', text: 'son', coef: 0.8997 },
      { id: 'word-6', text: 'adult', coef: 0.8981 },
      { id: 'word-7', text: 'adolescent', coef: 0.857 },
      { id: 'word-8', text: 'young', coef: 0.7675 },
    ],
  },
  {
    category: 'location',
    words: [
      { id: 'word-1', text: 'outdoors', coef: 0.952 },
      { id: 'word-2', text: 'summer', coef: 0.9471 },
      { id: 'word-3', text: 'street', coef: 0.8607 },
      { id: 'word-4', text: 'barn', coef: 0.5 },
      { id: 'word-5', text: 'rural', coef: 0.991 },
    ],
  },
  {
    category: 'activities',
    words: [
      { id: 'word-1', text: 'togetherness', coef: 0.8451 },
      { id: 'word-2', text: 'group together', coef: 0.8079 },
    ],
  },
  {
    category: 'wealth',
    words: [
      { id: 'word-1', text: 'lifestyle', coef: 0.8084 },
      { id: 'word-2', text: 'vehicle', coef: 0.7293 },
    ],
  },
  {
    category: 'other',
    words: [
      { id: 'word-1', text: 'fair weather', coef: 0.7596 },
      { id: 'word-2', text: 'daylight', coef: 0.717 },
    ],
  },
  {
    category: 'emotions',
    words: [{ id: 'word-1', text: 'facial expression', coef: 0.7266 }],
  },
]
