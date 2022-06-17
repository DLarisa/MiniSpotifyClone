import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useContext, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { View } from './Themed';

var nr = '6';

export default function EditScreenInfo() {
  const [text, setText] = useState('');

  const add = async () => {
    await fetch('http://192.168.1.7:8000/AlbumList/1'), {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        id: nr,
        imageUri: 'https://play-lh.googleusercontent.com/tRkbdD6Uzswddw6x_yUcCZwadfM1AXgg2PxykzgNUfPPdOYYoUkIpVXHDqrds4UdaL8',
        artistHeadline: text }),
    }

    nr = nr + 1;
  }

  return (
    <View>
      <TextInput
        onChangeText={newText => setText(newText)}
        style={{ height: 60, width: 300, backgroundColor: 'white', color: 'black' }}
        placeholder="Artist of the Album" />
      <TouchableOpacity onPress={add}>
        <AntDesign name="pluscircle" size={24} color="white" style={{ marginTop: 20, marginLeft: 140 }} />
      </TouchableOpacity>
    </View>
  );
}
