import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { Stack } from 'expo-router'

const DetailsPage = () => {
    const { id } = useLocalSearchParams<{ id: string }>()
  return (
    <View>
      <Stack.Screen options={{ title: `Details ${id}` }} />
        <Text>DetailsPage</Text>
    </View>
  )
}

export default DetailsPage