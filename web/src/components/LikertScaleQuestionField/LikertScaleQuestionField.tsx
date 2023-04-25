import { Controller, RegisterOptions, useForm } from '@redwoodjs/forms'
import LikertScaleQuestion from '../LikertScaleQuestion/LikertScaleQuestion'
import type { LikertScaleQuestionProps } from '../LikertScaleQuestion/LikertScaleQuestion'

interface LikertScaleQuestionFieldProps extends LikertScaleQuestionProps {
  validation?: RegisterOptions
  errorClassName?: string
}

const LikertScaleQuestionField = (props: LikertScaleQuestionFieldProps) => {
  const { validation, errorClassName, ...propsRest } = props

  // const { className: componentClassName, style: componentStyle } =
  //   useErrorStyles({
  //     errorClassName: errorClassName,
  //     name: 'likertScaleQuestion',
  //   })

  const onSubmit = (data) => {
    console.log(data)
  }

  const methods = useForm()

  return (
    <Controller
      control={methods.control}
      name="likertScaleQuestion"
      rules={validation}
      defaultValue={[]}
      render={({}) => (
        <LikertScaleQuestion
          {...propsRest}
          n={props.n}
          leftHand={props.leftHand}
          rightHand={props.rightHand}
          question={props.question}
        />
      )}
    />
  )
}

export default LikertScaleQuestionField
