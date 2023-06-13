/*

The idea of this implementation of the input field with tags comes
from: https://codesandbox.io/s/chakra-tag-input-d04s0?file=/src/ChakraTagInput/Tag.tsx

 */

import { KeyboardEvent, ForwardedRef, useCallback } from 'react'

import { Input, InputProps } from '@chakra-ui/input'
import { Circle, Stack, Wrap, WrapItem, Text } from '@chakra-ui/layout'
import { Tag, TagCloseButton, TagLabel } from '@chakra-ui/react'

export type OpenEndedInputTagProps = Omit<InputProps, 'value'> & {
  addKeys?: string[]
  question?: string

  onChange: (newValue: { tags: string[]; input: string }) => void

  placeholder: string
  value: { tags: string[]; input: string }
}

const OpenEndedInputTag = (
  {
    addKeys = ['Enter', ' '],
    question,
    onChange,
    placeholder,
    value,
  }: OpenEndedInputTagProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const handleRemoveTag = useCallback(
    (index: number) => {
      onChange({
        ...value,
        tags: [...value.tags.slice(0, index), ...value.tags.slice(index + 1)],
      })
    },
    [onChange, value]
  )

  const validation = (input: string) => {
    if (input == ' ' || input == '') {
      return false
    }
    return true
  }

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.isDefaultPrevented()) return
      if (event.isPropagationStopped()) return

      const { currentTarget, key } = event
      const { selectionStart, selectionEnd } = currentTarget

      if (addKeys.indexOf(key) > -1 && currentTarget.value) {
        if (validation(currentTarget.value)) {
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
        }
      } else if (
        key === 'Backspace' &&
        value.tags.length > 0 &&
        selectionStart === 0 &&
        selectionEnd === 0
      ) {
        handleRemoveTag(value.tags.length - 1)
      }
    },
    [addKeys, value, onChange, handleRemoveTag]
  )
  return (
    <Stack alignItems="start" direction="row" gap={2} w="100%">
      {question && (
        <Stack alignItems="start" direction="column">
          <Circle size="17px" bg="grayIcon" data-testid="square" />
        </Stack>
      )}
      <Stack alignItems="start" direction="column" w="100%">
        {question && <Text data-testid="question">{question}</Text>}

        <Wrap align="center">
          {value.tags.map((tag, index) => (
            <WrapItem key={index}>
              <Tag>
                <TagLabel>{tag}</TagLabel>
                <TagCloseButton onClick={() => handleRemoveTag(index)} />
              </Tag>
            </WrapItem>
          ))}
        </Wrap>

        <Input
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
