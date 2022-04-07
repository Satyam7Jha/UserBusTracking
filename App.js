import React from 'react'
import { View, StatusBar, Platform, SafeAreaView } from 'react-native'
import { GlobalData } from './Auth/GlobalContext'
import Navigation from './Navigation'

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        }}
      >
        <GlobalData>
          <Navigation />
        </GlobalData>
      </View>
    </SafeAreaView>
  )
}
