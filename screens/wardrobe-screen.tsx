import { SafeScreen } from "../components/safe-screen";
import { Line } from "@/components/line";
import { TitleSection_2 } from "@/components/title-section";
import { Outfit } from "@/core/types";
import { OutfitCard } from "@/components/outfit-card";
import { FlatList } from "react-native";
import { SPACING } from "@/constants/layout";

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

export function WardrobeScreen() {
    return (
        <SafeScreen>
            <TitleSection_2 title="Mi armario" />
            <Line />

            <FlatList
                        data={TRENDING_OUTFITS} // Fuente de datos
                        keyExtractor={(item) => item.id} // ID unico
                        numColumns={2}
                        columnWrapperStyle={{
                            paddingHorizontal: SPACING.md,
                            gap: SPACING.md,
                        }}
                        renderItem={({ item }) => ( // cada card se renderiza aqui
                            <OutfitCard 
                                name = {item.name}
                                color = {item.color}
                                description={`${item.items.length} prendas`}
                                onPress={() => console.log('Outfit: ', item.id)}
                                previewColor={`${item.color}20`}
                            />
                        )}
                        contentContainerStyle={{ paddingBottom: 100 }}
                        showsVerticalScrollIndicator = {false}
                        />
            
        </SafeScreen>
    );
}