import React from 'react'
import BaseInput from '../base-input'
import { TextInput } from 'react-native'

const AppInput = ({ children, value, onChange, ...props }) => (
  <BaseInput {...props}>
    <TextInput style={style} value={value} onChangeText={onChange} placeholder='hello world!' />
  </BaseInput>
)

const style = { borderRadius: 5, paddingHorizontal: 20, minWidth: 200, height: 40, borderColor: 'gray', borderWidth: 1 }

export default AppInput