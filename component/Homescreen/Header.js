import React, { useState } from 'react';
import {
    View,
    Image,
} from 'react-native';

// npm i react-native-swiper
import Swiper from 'react-native-swiper';

export default function App() {

    const [userData] = useState([
       
       
        {
            img:'https://wallpapercave.com/wp/wp9112898.jpg',
            name:"satyam"
        },
        {
            img: 'https://wallpapercave.com/fwp/wp8142824.jpg',
            name: 'Jennie Barnett',
        },
        {
            img: 'https://wallpapercave.com/fwp/wp10224226.png',
            name: 'Matthew Wagner',
        },
        {
            img: 'https://wallpapercave.com/fwp/wp8872178.jpg',
            name: 'Christian Wilson',
        },
        {
            img: 'https://wallpapercave.com/fwp/wp7334668.jpg',
            name: 'Sophia Fernandez',
        },
       
    ]);

    return (
        <View style={{ height: 200, marginTop: 5 }}>
            <Swiper loop={true} style={{ height: 350 }} autoplay={true} autoplayTimeout={4}>
                {userData.map((user) => (
                    <View key={user} style={{ alignItems: 'center' }}>
                        <Image
                            style={{ width: "95%", height: 200, borderRadius: 10, marginRight: 5, marginLeft: 5 }}
                            source={{ uri: user.img }}
                        />
                    </View>
                ))}
            </Swiper>
        </View>
    )
}