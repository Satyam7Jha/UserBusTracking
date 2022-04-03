import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native'
import {
  MainAppColor,
  MainFontColor,
  DarkAppColor,
  blue,
} from '../../../assets/Color'

export default function NewsMenu(props) {
  return (
    <View style={styles.container}>
      {Object.keys(props.newsIcon).length != 0 && (
        <ScrollView horizontal={true}>
          <View style={styles.container}>
            {Object.keys(props.newsIcon).map((item, index) => {
              return (
                <IconVews
                  title={item}
                  url={props.newsIcon[item]}
                  setselectedTopic={props.setselectedTopic}
                  selectedTopic={props.selectedTopic}
                />
              )
            })}
          </View>
        </ScrollView>
      )}
    </View>
  )
}

const IconVews = (props) => {
  return (
    <View style={{ padding: 5 }}>
      <TouchableOpacity
        onPress={() => props.setselectedTopic(props.title)}
        style={{ alignItems: 'center', justifyContent: 'center' }}
      >
        <Image
          style={{
            width: 80,
            height: 70,
            borderRadius: 5,
            borderWidth: 2,
            borderColor: MainAppColor,
          }}
          source={{
            uri: props.url,
          }}
        />

        <Text
          style={{
            color: props.selectedTopic == props.title ? blue : 'white',
            fontWeight: 'bold',
            fontStyle: 'normal',
          }}
        >
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: DarkAppColor,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 2,
  },
})
