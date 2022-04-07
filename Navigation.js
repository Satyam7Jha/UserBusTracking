import React, { useContext } from 'react'
import {
  View,
  SafeAreaView,
  StatusBar,
  Platform,
  StyleSheet,
} from 'react-native'
import BusLoc from './Screens/BusLoc'
import Info from './Screens/Info'
import Home from './Screens/Home'
import Ecom from './Screens/Ecom'
import { blue, DarkAppColor, MainAppColor } from './assets/Color'
import { BottomNavigation, Text } from 'react-native-paper'
import { GlobalContext } from './Auth/GlobalContext'
import LoginSignup from './Auth/LoginSignup'

function HomeScreen() {
  return <Home />
}

function BusLocation() {
  return <BusLoc />
}

function Information() {
  return <Info />
}

function ecom() {
  return <Ecom />
}

const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  </View>
)

const App = () => {
  const { status, setStatus } = useContext(GlobalContext)
  const [todayCount, setTodayCount] = React.useState(0)
  const [loding, setLoading] = React.useState(false)

  var today = new Date()
  var dd = String(today.getDate()).padStart(2, '0')
  var mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
  var yyyy = today.getFullYear()

  today = dd + '_' + mm + '_' + yyyy
  const URL = `https://userapp-12ba6-default-rtdb.asia-southeast1.firebasedatabase.app/Static/${today}.json`

  React.useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => setTodayCount(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(true))
  }, [])

  if (loding) {
    fetch(URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todayCount + 1),
    })
  }

  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'bus', title: 'Tracking', icon: 'bus' },
    { key: 'info', title: 'info', icon: 'information' },
    { key: 'ecommers', title: 'E-com', icon: 'shopping' },
  ])

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    bus: BusLocation,
    info: Information,
    ecommers: ecom,
  })
  console.log('App')

  if (status) {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <MyStatusBar
            backgroundColor={DarkAppColor}
            barStyle="light-content"
          />

          <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
            activeColor="#02abde"
            barStyle={{
              backgroundColor: DarkAppColor,
              borderTopWidth: 1,
              borderTopColor: MainAppColor,
            }}
          />
        </View>
      </View>
    )
  } else {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <LoginSignup />
        </View>
      </View>
    )
  }
}

const STATUSBAR_HEIGHT = StatusBar.currentHeight
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor: DarkAppColor,
    height: APPBAR_HEIGHT,
  },
  content: {
    flex: 1,
    backgroundColor: DarkAppColor,
  },
})

export default App
