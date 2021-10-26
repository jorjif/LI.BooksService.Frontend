import { useField } from 'formik'
import { TextField } from '@material-ui/core'

interface IProps {
  name: string
  label: string
}

const TextInput: React.FC<IProps> = props => {
  const [field, meta] = useField(props)

  return (
    <TextField
      error={meta.touched && !!meta.error}
      helperText={meta.touched && !!meta.error ? meta.error : ' '}
      {...field}
      {...props}
    />
  )
}

export default TextInput
