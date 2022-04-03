import React, { useState } from 'react'

import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native'
import {
  MainAppColor,
  MainFontColor,
  DarkAppColor,
  blue,
} from '../../../assets/Color'
import * as WebBrowser from 'expo-web-browser'

export default function NewsInfo({ data, selectedTopic }) {
  const [result, setResult] = useState(null)

  const _handlePressButtonAsync = async (linkUrl) => {
    let result = await WebBrowser.openBrowserAsync(linkUrl)
    setResult(result)
  }
  return (
    <View style={styles.newsview}>
      <ScrollView>
        <View
          style={{
            backgroundColor: DarkAppColor,
            paddingLeft: 10,
          }}
        >
          <Text
            style={{
              color: 'white',
              fontStyle: 'italic',
              fontWeight: 'bold',
              fontSize: 25,
            }}
          >
            {selectedTopic}
          </Text>
        </View>
        {data.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                marginTop: 10,
              }}
            >
              <TouchableOpacity
                key={item['title']}
                onPress={() => {
                  _handlePressButtonAsync(item['link'])
                }}
              >
                <Card item={item} />
              </TouchableOpacity>
            </View>
          )
        })}
      </ScrollView>
    </View>
  )
}

const Card = ({ item }) => {
  return (
    <View>
      <Text style={styles.newsmedia}>{item['media']}</Text>

      <View style={styles.cardkeandar}>
        <Image
          source={{
            uri: item['img'],
          }}
          style={styles.sideimage}
        />
        <View style={{ flex: 1, marginHorizontal: 10 }}>
          <Text style={styles.newskafont}>{item['title']}</Text>

          <Text style={styles.newsketimekafont}>{item['date']}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  newsview: {
    backgroundColor: DarkAppColor,
    paddingBottom: 100,
  },
  cardkeandar: {
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    backgroundColor: MainAppColor,
    borderRadius: Platform.OS === 'ios' ? 16 : 7,
    padding: 14,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
  },
  sideimage: {
    width: 90,
    height: 80,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
  },
  newskafont: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  newsketimekafont: {
    marginTop: 3,
    color: MainFontColor,
  },
  newsmedia: {
    fontSize: 15,
    fontWeight: 'bold',
    color: MainFontColor,
    marginLeft: 20,
  },
})
