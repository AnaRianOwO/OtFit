import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function Avatar({ outfit, width = 300, height = 500 }) {
  return (
    <View style={[styles.avatarContainer, { width, height }]}>
      {/* Avatar base */}
      <Image 
        source={require('../assets/images/model-prueba.png')} 
        style={styles.avatarBase} 
      />
      
      {/* Prendas */}
      {outfit.base && (
        <Image source={outfit.base.source} style={styles.clothingItem} />
      )}
      {/* ... más prendas */}
    </View>
  );
}

const styles = StyleSheet.create({
  avatarContainer: {
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#ccc',
    position: 'relative',
    marginBottom: 10,
  },
  avatarBase: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    tintColor: '#ffccaa',
  },
  clothingItem: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'contain',
  },
});
