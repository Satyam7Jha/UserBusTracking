import React, { useEffect, useState } from "react";
import {
    Text,
    View,
    ActivityIndicator,
    ScrollView,
    Dimensions,
    Image,
    Button,
    Linking,
    StyleSheet,
  } from "react-native";

import * as Firebase from "../../Firebase";

import * as ImagePicker from 'expo-image-picker';
import { WebView } from "react-native-webview";

export default function SellProduct() {
   console.log(typeof storage,"sell",storage);
    const [image, setImage] = useState("");
    const [uploading,setUploading] = useState(false);
   

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const uploadImage = async () =>{
    const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function() {
          resolve(xhr.response);
        };
        xhr.onerror = function() {
          reject(new TypeError('Network request failed'));
        };
        xhr.responseType = 'blob';
        xhr.open('GET', image, true);
        xhr.send(null);
      });

      const ref = storageRef.child(new Data().toISOString);
      const snapshot = ref.put(blob);

      snapshot.on(storageRef.TaskEvent.STATE_CHANGED,() =>{
          setUploading(true)
        },
        (error)=>{
           setUploading(false)
           console.log(error)
           blob.close()
           return 
        },
        ()=>{
            snapshot.snapshot.ref.getDownloadURL().then((url)=>{
                setUploading(false)
                console.log("download url ",url)
                blob.close();
                return url;
            })
        }
      );
  };

    return (
        // <WebView
        //     source={{ uri: "https://docs.google.com/forms/d/e/1FAIpQLSe0t2Ph_h74AFCZ_zYx1LPCLCR2aafVtC3De05skbjqd3c7QA/viewform" }}

        // />
        <View style={styles.container}>
            <Image source={ {uri : image}}
            style ={styles.imageka}/>
            <Button title="choose Image"
            onPress={pickImage}/>
            {!uploading?<Button title="Upload image"
            onPress={uploadImage}/> : 
            <ActivityIndicator size="large" color="#000"/>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor : "#fff",
      alignItems : "center",
      justifyContent : "center",
    },
    imageka:{
        width:300,
        height : 300,
    }
  });
