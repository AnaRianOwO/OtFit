import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import Avatar from '../components/Avatar';

const { width, height } = Dimensions.get('window');
const isSmallDevice = width === 320 && height === 568;

export default function OutfitCreator() {
  const [outfit, setOutfit] = useState({
    base: null,
    middle: null,
    top: null,
    bottom: null
  });

  const clothingOptions = [
    // Capa base
    { id: 1, type: 'top', layer: 'base', source: require('../assets/images/t-shirt.png'), name: 'T-shirt' },
    { id: 2, type: 'top', layer: 'base', source: require('../assets/images/crop-top.png'), name: 'Crop-Top' },
    { id: 3, type: 'top', layer: 'base', source: require('../assets/images/tank-top.png'), name: 'Tank-Top' },
    
    // Capa intermedia
    { id: 4, type: 'top', layer: 'middle', source: require('../assets/images/hoodie.png'), name: 'Hoodie' },
    { id: 5, type: 'top', layer: 'middle', source: require('../assets/images/sweater.png'), name: 'Sweater' },
    
    // Capa superior
    { id: 6, type: 'top', layer: 'top', source: require('../assets/images/jacket.png'), name: 'Jacket' },
    
    // Bottom
    { id: 7, type: 'bottom', layer: 'base', source: require('../assets/images/mini-skirt.png'), name: 'Mini-skirt' },
    { id: 8, type: 'bottom', layer: 'base', source: require('../assets/images/overall.png'), name: 'Overall' },
    { id: 9, type: 'bottom', layer: 'base', source: require('../assets/images/pants.png'), name: 'Pants' },
    { id: 10, type: 'bottom', layer: 'base', source: require('../assets/images/skirt.png'), name: 'Skirt' },
  ];

  const handleClothingSelect = (item) => {
    setOutfit(prev => ({
      ...prev,
      [item.layer]: item.type === 'top' ? item : prev[item.layer],
      [item.type]: item.type === 'bottom' ? item : prev[item.type]
    }));
  };

  const resetOutfit = () => {
    setOutfit({ base: null, middle: null, top: null, bottom: null });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Creador de OtFit</Text>
      
      {/* Avatar con las prendas */}
      <View style={[styles.avatarContainer, { 
        width: isSmallDevice ? 250 : 300, 
        height: isSmallDevice ? 400 : 500 
      }]}>
        
        {outfit.base && (
          <Image source={outfit.base.source} style={styles.clothingItem} />
        )}
        
        {outfit.middle && (
          <Image source={outfit.middle.source} style={styles.clothingItem} />
        )}
        
        {outfit.top && (
          <Image source={outfit.top.source} style={styles.clothingItem} />
        )}
        
        {outfit.bottom && (
          <Image source={outfit.bottom.source} style={styles.clothingItem} />
        )}
      </View>
      
      {/* Opciones de ropa */}
      <View style={styles.optionsContainer}>
        {clothingOptions.map(item => (
          <TouchableOpacity 
            key={item.id} 
            style={styles.option}
            onPress={() => handleClothingSelect(item)}
          >
            <Image source={item.source} style={styles.optionImage} />
            <Text style={styles.optionText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      
      <TouchableOpacity style={styles.resetButton} onPress={resetOutfit}>
        <Text style={styles.resetText}>Reset Outfit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#A5A5A5',
    alignItems: 'center',
    padding: isSmallDevice ? 10 : 20,
  },
  title: {
    fontSize: isSmallDevice ? 20 : 24,
    fontWeight: 'bold',
    marginBottom: isSmallDevice ? 10 : 20,
    color: '#333',
  },
  avatarContainer: {
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#ccc',
    position: 'relative',
    marginBottom: 20,
  },
  avatarBase: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    tintColor: '#ffccaa',
  },
  clothingItem: {
    width: '100%',
    height: '92%',
    position: 'absolute',
    resizeMode: 'contain',
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: isSmallDevice ? 10 : 20,
  },
  option: {
    width: isSmallDevice ? 70 : 80,
    height: isSmallDevice ? 90 : 100,
    alignItems: 'center',
    margin: isSmallDevice ? 5 : 10,
    backgroundColor: '#fff',
    padding: 4,
    borderRadius: 8,
  },
  optionImage: {
    width: isSmallDevice ? 50 : 60,
    height: isSmallDevice ? 50 : 60,
    resizeMode: 'contain',
  },
  optionText: {
    fontSize: isSmallDevice ? 10 : 12,
    textAlign: 'center',
    marginTop: 4,
  },
  resetButton: {
    backgroundColor: '#ff66b2',
    padding: isSmallDevice ? 10 : 15,
    borderRadius: 8,
    marginTop: isSmallDevice ? 10 : 20,
  },
  resetText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: isSmallDevice ? 14 : 16,
  },
});
