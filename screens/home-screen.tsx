import {Line} from '@/components/line';
import { SafeScreen } from '@/components/safe-screen';
import { TitleSection_1, TitleSection_2 } from '@/components/title-section';
import { OutfitButton } from '@/components/buttons';
import { Outfit } from '@/core/types';
// import { Colors } from '@/constants/theme';
// import { useColorScheme } from '@/hooks/use-color-scheme';
import { FlatList, View } from 'react-native';
import { OutfitCard } from '@/components/outfit-card';
import { SPACING } from '@/constants/layout';

// Mock data - Reemplazar con datos de Supabase
const TRENDING_OUTFITS: Outfit[] = [
    {
        id: '1',
        name: 'Urban Sensual',
        color: '#2C3E50',
        items: [],
        rating: 4.8,
        createdAt: new Date().toISOString(),
    },
    {
        id: '2',
        name: 'Summer Vibes',
        color: '#F39C12',
        items: [],
        rating: 4.6,
        createdAt: new Date().toISOString(),
    },
    {
        id: '3',
        name: 'Elegant Evening',
        color: '#8E44AD',
        items: [],
        rating: 4.9,
        createdAt: new Date().toISOString(),
    },
    {
        id: '4',
        name: 'Elegant Evening',
        color: '#4460ad',
        items: [],
        rating: 4.9,
        createdAt: new Date().toISOString(),
    },
    {
        id: '5',
        name: 'Elegant Evening',
        color: '#44ad93',
        items: [],
        rating: 4.9,
        createdAt: new Date().toISOString(),
    },
    {
        id: '6',
        name: 'Elegant Evening',
        color: '#ad6044',
        items: [],
        rating: 4.9,
        createdAt: new Date().toISOString(),
    },
    {
        id: '7',
        name: 'Elegant Evening',
        color: '#446ead',
        items: [],
        rating: 4.9,
        createdAt: new Date().toISOString(),
    },
    {
        id: '8',
        name: 'Elegant Evening',
        color: '#9844ad',
        items: [],
        rating: 4.9,
        createdAt: new Date().toISOString(),
    },
];

export function HomeScreen () {
    // const colorScheme = useColorScheme() || 'light';
    // const backgroundColor = Colors[colorScheme].screenBackground;
    const renderHeader = () => (
        <View>
            <TitleSection_1 title="Crear Outfit" />
            <Line />
            <OutfitButton />
            <TitleSection_2 title="Para ti" />
            <Line />
        </View>
    )

    return (
        <SafeScreen>
            <FlatList
            data={TRENDING_OUTFITS} // Fuente de datos
            keyExtractor={(item) => item.id} // ID unico
            numColumns={2}
            columnWrapperStyle={{
                paddingHorizontal: SPACING.md,
                gap: SPACING.md,
            }}
            ListHeaderComponent={renderHeader} // constante creada previamente se carga aquí
            renderItem={({ item }) => ( // cada card se renderiza aqui
                <OutfitCard 
                    name = {item.name}
                    color = {item.color}
                    description={`${item.items.length} prendas`}
                    onPress={() => console.log('Outfit: ', item.id)}
                    previewColor={`${item.color}20`}
                />
            )}
            contentContainerStyle={{ paddingBottom: 20 }}
            showsVerticalScrollIndicator = {false}
            />
        </SafeScreen>
    );
}

