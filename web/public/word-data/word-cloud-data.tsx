import { img1 } from './word_img1'
import { img10 } from './word_img10'
import { img11 } from './word_img11'
import { img12 } from './word_img12'
import { img13 } from './word_img13'
import { img14 } from './word_img14'
import { img15 } from './word_img15'
import { img16 } from './word_img16'
import { img17 } from './word_img17'
import { img18 } from './word_img18'
import { img19 } from './word_img19'
import { img2 } from './word_img2'
import { img20 } from './word_img20'
import { img21 } from './word_img21'
import { img3 } from './word_img3'
import { img4 } from './word_img4'
import { img5 } from './word_img5'
import { img6 } from './word_img6'
import { img7 } from './word_img7'
import { img8 } from './word_img8'
import { img9 } from './word_img9'

export type Rectangle = {
  x: number
  y: number
  width: number
  height: number
}

export type Word = {
  id: string
  text: string
  coef: number
  rect?: Rectangle
}

export const getTheWords = (
  index: number
): { category: string; words: Word[] }[] => {
  const words = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
  ]

  return words[index]
}
