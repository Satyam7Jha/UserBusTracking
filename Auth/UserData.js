import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    Dimensions,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';
import { Icon } from 'react-native-elements';


import AsyncStorage from '@react-native-async-storage/async-storage';




const storeData = async (value) => {
    try {
        await AsyncStorage.setItem('@status', value)
    } catch (e) {
    }
}

export default function LoginScreen1() {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <View style={styles.bigCircle}></View>
                <View style={styles.smallCircle}></View>
                <View style={styles.centerizedView}>
                    <View style={styles.authBox}>
                        <View style={styles.logoBox}>
                            <Icon
                                color='#fff'
                                name='comments'
                                type='font-awesome'
                                size={50}
                            />
                        </View>
                        <Text style={styles.loginTitleText}>User Data</Text>
                        <View style={styles.hr}></View>
                        <View style={styles.inputBox}>
                            <Text style={styles.inputLabel}>Name</Text>
                            <TextInput
                                style={styles.input}

                                textContentType='password'
                            />
                        </View>
                        <View style={styles.inputBox}>
                            <Text style={styles.inputLabel}>Email</Text>
                            <TextInput
                                style={styles.input}

                                keyboardType='email-address'
                                textContentType='emailAddress'
                            />
                        </View>
                        <View style={styles.inputBox}>
                            <Text style={styles.inputLabel}>Mobile</Text>
                            <TextInput
                                style={styles.input}
                                keyboardType="number-pad"

                                textContentType='number'
                            />
                        </View>
                        <TouchableOpacity style={styles.loginButton} onPress={() => storeData('false')}>
                            <Text style={styles.loginButtonText}>Enter</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    bigCircle: {
        width: Dimensions.get('window').height * 0.7,
        height: Dimensions.get('window').height * 0.7,
        backgroundColor: 'blue',
        borderRadius: 1000,
        position: 'absolute',
        right: Dimensions.get('window').width * 0.25,
        top: -50,
    },
    smallCircle: {
        width: Dimensions.get('window').height * 0.4,
        height: Dimensions.get('window').height * 0.4,
        backgroundColor: 'blue',
        borderRadius: 1000,
        position: 'absolute',
        bottom: Dimensions.get('window').width * -0.2,
        right: Dimensions.get('window').width * -0.3,
    },
    centerizedView: {
        width: '100%',
        top: '15%',
    },
    authBox: {
        width: '80%',
        backgroundColor: '#fafafa',
        borderRadius: 20,
        alignSelf: 'center',
        paddingHorizontal: 14,
        paddingBottom: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    logoBox: {
        width: 100,
        height: 100,
        backgroundColor: 'skyblue',
        borderRadius: 1000,
        alignSelf: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        top: -50,
        marginBottom: -50,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    loginTitleText: {
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 10,
    },
    hr: {
        width: '100%',
        height: 0.5,
        backgroundColor: 'blue',
        marginTop: 6,
    },
    inputBox: {
        marginTop: 10,
    },
    inputLabel: {
        fontSize: 18,
        marginBottom: 6,
    },
    input: {
        width: '100%',
        height: 40,
        backgroundColor: '#dfe4ea',
        borderRadius: 4,
        paddingHorizontal: 10,
    },
    loginButton: {
        backgroundColor: 'blue',
        marginTop: 10,
        paddingVertical: 10,
        borderRadius: 4,
    },
    loginButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
});