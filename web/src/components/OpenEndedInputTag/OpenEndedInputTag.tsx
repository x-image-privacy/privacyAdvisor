/*

The idea of this implementation of the input field with tags comes 
from: https://codesandbox.io/s/chakra-tag-input-d04s0?file=/src/ChakraTagInput/Tag.tsx

 */

import { KeyboardEvent, ForwardedRef, useCallback } from 'react'

import { Input, InputProps } from '@chakra-ui/input'
import {
  Circle,
  Stack,
  Wrap,
  WrapItem,
  WrapItemProps,
  WrapProps,
  Text,
} from '@chakra-ui/layout'
import { TagCloseButtonProps, TagLabelProps, TagProps } from '@chakra-ui/tag'

import TagInput from '../TagInput/TagInput'

import { maybeCall, MaybeFunc } from './../../maybe'

type MaybeIsInputProps<P> = MaybeFunc<[isInput: boolean, index?: number], P>
type MaybeTagProps<P> = MaybeFunc<[tag: string, index?: number], P>

export type OpenEndedInputTagProps = Omit<InputProps, 'value'> & {
  addKeys?: string[]
  question?: string

  onChange: (newValue: { tags: string[]; input: string }) => void

  placeholder: string
  value: { tags: string[]; input: string }

  wrapProps?: WrapProps
  wrapItemProps?: MaybeIsInputProps<WrapItemProps>
  tagProps?: MaybeTagProps<TagProps>
  tagLabelProps?: MaybeTagProps<TagLabelProps>
  tagCloseButtonProps?: MaybeTagProps<TagCloseButtonProps>
}

const OpenEndedInputTag = (
  {
    addKeys = ['Enter', ' '],
    question,
    onChange,
    placeholder,
    value,
    wrapProps,
    wrapItemProps,
    tagProps,
    tagLabelProps,
    tagCloseButtonProps,
    ...props
  }: OpenEndedInputTagProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const handleRemoveTag = useCallback(
    (index: number) => () => {
      const newValue = {
        ...value,
        tags: [...value.tags.slice(0, index), ...value.tags.slice(index + 1)],
      }

      onChange(newValue)
    },
    [onChange, value]
  )

  const onKeyDown = props.onKeyDown
  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      onKeyDown?.(event)

      if (event.isDefaultPrevented()) return
      if (event.isPropagationStopped()) return

      const { currentTarget, key } = event
      const { selectionStart, selectionEnd } = currentTarget

      if (addKeys.indexOf(key) > -1 && currentTarget.value) {
        const newValue = {
          ...value,
          tags: [...value.tags, currentTarget.value],
        }

        if (!event.isDefaultPrevented()) {
          currentTarget.value = ''
          newValue.input = ''

          onChange(newValue)
        }
        event.preventDefault()
      } else if (
        key === 'Backspace' &&
        value.tags.length > 0 &&
        selectionStart === 0 &&
        selectionEnd === 0
      ) {
        // removeTag(value.tags.length - 1)
        const newValue = {
          ...value,
          tags: [
            ...value.tags.slice(0, value.tags.length - 1),
            ...value.tags.slice(value.tags.length - 1 + 1),
          ],
        }

        onChange(newValue)
      }
    },
    [onKeyDown, addKeys, value, onChange]
  )
  return (
    <Stack alignItems="start" direction="row" gap={2}>
      {question && (
        <Stack alignItems="start" direction="column">
          <Circle size="17px" bg="grayIcon" data-testid="square" />
        </Stack>
      )}
      <Stack alignItems="start" direction="column">
        {question && <Text data-testid="question">{question}</Text>}

        <Wrap align="center" {...wrapProps}>
          {value.tags.map((tag, index) => (
            <WrapItem {...maybeCall(wrapItemProps, false, index)} key={index}>
              <TagInput
                onRemove={handleRemoveTag(index)}
                tagLabelProps={maybeCall(tagLabelProps, tag, index)}
                tagCloseButtonProps={maybeCall(tagCloseButtonProps, tag, index)}
                colorScheme={props.colorScheme}
                size={props.size}
                {...maybeCall(tagProps, tag, index)}
              >
                {tag}
              </TagInput>
            </WrapItem>
          ))}
          <WrapItem
            flexGrow={1}
            {...maybeCall(wrapItemProps, true, value.tags.length)}
          />
        </Wrap>

        <Input
          {...props}
          onKeyDown={handleKeyDown}
          ref={ref}
          placeholder={placeholder}
          size="lg"
        />
      </Stack>
    </Stack>
  )
}

export default React.forwardRef(OpenEndedInputTag)
