
import { View, Text } from 'react-native'
import React from 'react'
import { useSearchParams } from 'expo-router/build/hooks'
import { Stack } from 'expo-router'

const DetailsPage = () => {
    const { id } = useSearchParams()
  return (
    <View>
      <Stack.Screen options={{ title: `Details ${id}` }} />
        <Text>DetailsPage</Text>
    </View>
  )
}

export default DetailsPage