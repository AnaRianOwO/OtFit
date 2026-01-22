import { View, Text } from 'react-native';

export function TitleSection ({ title }: { title: string }) {
    return (
        <View style={{ marginVertical: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', alignSelf: 'flex-end' }}>{title}</Text>
        </View>
    );
}