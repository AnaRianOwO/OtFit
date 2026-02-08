import { StyleSheet, Text, View } from 'react-native';

import { ThemedView } from '@/components/themed-view';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Colors } from '@/constants/theme';

export default function OutfitToolScreen() {
  const colorScheme = useColorScheme();

  return (
    <ThemedView style={styles.container}>
      <View style={styles.content}>
        <Text style={[styles.title, { color: Colors[colorScheme ?? 'light'].text }]}>
          Outfit Tool
        </Text>
        <Text style={[styles.description, { color: Colors[colorScheme ?? 'light'].text }]}>
          Crea tus mejores combinaciones
        </Text>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
  },
});
