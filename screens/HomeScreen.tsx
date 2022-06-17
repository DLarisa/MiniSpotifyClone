import { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import AlbumCategory from '../components/AlbumCategory';
import { View } from '../components/Themed';
import { IAlbumCategory, RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [albumCategories, setAlbumCategories] = useState<IAlbumCategory[]>([]);

  useEffect(() => {
    fetch('http://192.168.1.7:8000/AlbumCategories')
      .then(res => {
        return res.json();
      }).then(data => {
        setAlbumCategories(data);
      });
  }, []);
  
  return (
    <View style={styles.container}>
      {albumCategories && <FlatList
        data={ albumCategories }
        renderItem={({ item }) => (
          <AlbumCategory title={ item.title } albums={ item.albums } />
        )}
        keyExtractor={ (item)  => item.id }
        contentContainerStyle={{ paddingBottom: 130 }} />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
