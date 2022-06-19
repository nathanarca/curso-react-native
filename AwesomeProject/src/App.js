import React from 'react'
import { View, Text } from 'react-native'
import estilo from './estilo'
import Mega from './mega/Mega'

export default props => {
  return (
    <View style={estilo.center}>
      <Mega />
    </View>
  )
}
