import { StyleSheet, Image } from 'react-native';

export default function ImageViewer({PlaceholderImage}) {
  return (
    <Image source={PlaceholderImage} style={styles.image} />
  );
}

const styles = StyleSheet.create({
    image: {
      width: '100%',
      height: '100%', 
      },
});
