import { SyntheticEvent, useCallback, MouseEvent } from 'react'

import {
  Tag,
  TagCloseButton,
  TagCloseButtonProps,
  TagLabel,
  TagLabelProps,
  TagProps,
} from '@chakra-ui/tag'

export type TagInputProps = TagProps & {
  children: string
  onRemove?: (event: SyntheticEvent) => void

  tagLabelProps?: TagLabelProps
  tagCloseButtonProps?: TagCloseButtonProps
}

const TagInput = ({
  children,
  onRemove,
  tagLabelProps,
  tagCloseButtonProps,
  ...props
}: TagInputProps) => {
  const onTagCloseButtonClick = tagCloseButtonProps?.onClick
  const handleClickTagCloseButton = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      onTagCloseButtonClick?.(event)
      if (event.isDefaultPrevented()) return

      onRemove?.(event)
    },
    [onRemove, onTagCloseButtonClick]
  )
  return (
    <Tag {...props}>
      <TagLabel {...tagLabelProps}>{children}</TagLabel>
      <TagCloseButton
        {...tagCloseButtonProps}
        onClick={handleClickTagCloseButton}
      />
    </Tag>
  )
}

export default TagInput
