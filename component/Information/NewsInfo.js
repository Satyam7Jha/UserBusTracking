import React from "react";

import {
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
  Linking,
  StyleSheet,
  Platform,
} from "react-native";
import { MainAppColor, MainFontColor , DarkAppColor , blue} from "../../assets/Color";


export default function NewsInfo({ data }) {
  //console.log(data);
  return (
    <View style={styles.newsview}>
      <ScrollView>
        {data.map((item, index) => {
          return (
            <View key={index} style={{ marginTop: 10 }}>
              <Card item={item} />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const Card = ({ item }) => {
  return (
    <TouchableOpacity
      key={item["title"]}
      // onPress={() => {
      //   _handlePressButtonAsync(item["url"]);
      //   setNewsUrl(item["url"]);
      //   // setShowPopover(true);
      // }}
    >
      <Text style={styles.newsmedia}>{item["media"]}</Text>

      <View style={styles.cardkeandar}>
        <Image
          source={{
            uri: item["img"],
          }}
          style={styles.sideimage}
        />
        <View style={{ flex: 1, marginHorizontal: 10 }}>
          <Text style={styles.newskafont}>
            {item["title"]}
          </Text>

          <Text style={styles.newsketimekafont}>
            {item["date"]}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  newsview : { 
  
    backgroundColor : DarkAppColor
  },
  cardkeandar : {
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    backgroundColor: MainAppColor,
    borderRadius: Platform.OS === 'ios' ? 16 : 7,
    padding: 14,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
  },
  sideimage : {
    width: 90,
    height: 80,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "white",
  },
  newskafont :{
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  newsketimekafont : { 
    marginTop: 3, 
    color: MainFontColor 
  },
  newsmedia : {
    fontSize: 15,
    fontWeight: "bold",
    color: MainFontColor,
    marginLeft : 20 ,
    
  }

});