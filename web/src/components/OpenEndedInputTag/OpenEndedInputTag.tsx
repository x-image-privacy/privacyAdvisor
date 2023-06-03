import {
  ChangeEventHandler,
  ForwardedRef,
  SyntheticEvent,
  useCallback,
} from 'react'

import { Input, InputProps } from '@chakra-ui/input'
import {
  Square,
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

export type OpenEndedInputTagProps = InputProps & {
  tags?: string[]
  onTagsChange?: (event: SyntheticEvent, tags: string[]) => void
  onTagAdd?: (event: SyntheticEvent, value: string) => void
  onTagRemove?: (event: SyntheticEvent, index: number) => void

  addKeys?: string[]
  question?: string

  onChange: ChangeEventHandler<HTMLInputElement>

  placeholder: string
  value: string

  wrapProps?: WrapProps
  wrapItemProps?: MaybeIsInputProps<WrapItemProps>
  tagProps?: MaybeTagProps<TagProps>
  tagLabelProps?: MaybeTagProps<TagLabelProps>
  tagCloseButtonProps?: MaybeTagProps<TagCloseButtonProps>
}

const OpenEndedInputTag = (
  {
    tags = [],
    onTagsChange,
    onTagAdd,
    onTagRemove,
    addKeys = ['Enter'],
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
  const addTag = useCallback(
    (event: SyntheticEvent, tag: string) => {
      onTagAdd?.(event, tag)
      if (event.isDefaultPrevented()) return

      onTagsChange?.(event, tags.concat([tag]))
    },
    [tags, onTagsChange, onTagAdd]
  )

  const removeTag = useCallback(
    (event: SyntheticEvent, index: number) => {
      onTagRemove?.(event, index)
      if (event.isDefaultPrevented()) return
      onTagsChange?.(event, [...tags.slice(0, index), ...tags.slice(index + 1)])
    },
    [tags, onTagsChange, onTagRemove]
  )

  const handleRemoveTag = useCallback(
    (index: number) => (event: SyntheticEvent) => {
      removeTag(event, index)
    },
    [removeTag]
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
        addTag(event, currentTarget.value)
        if (!event.isDefaultPrevented()) {
          currentTarget.value = ''
        }
        event.preventDefault()
      } else if (
        key === 'Backspace' &&
        tags.length > 0 &&
        selectionStart === 0 &&
        selectionEnd === 0
      ) {
        removeTag(event, tags.length - 1)
      }
    },
    [addKeys, tags.length, addTag, removeTag, onKeyDown]
  )
  return (
    <Stack alignItems="start" direction="row" gap={2}>
      {question && (
        <Stack alignItems="start" direction="column">
          <Square size="20px" bg="grayIcon" />
        </Stack>
      )}
      <Stack alignItems="start" direction="column">
        {question && <Text data-testid="question">{question}</Text>}

        <Wrap align="center" {...wrapProps}>
          {tags.map((tag, index) => (
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
            {...maybeCall(wrapItemProps, true, tags.length)}
          />
        </Wrap>

        <Input
          {...props}
          onKeyDown={handleKeyDown}
          ref={ref}
          placeholder={placeholder}
          onChange={onChange}
          size="lg"
          value={value}
        />
      </Stack>
    </Stack>
  )
}

export default React.forwardRef(OpenEndedInputTag)
