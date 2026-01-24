import { View, Text } from 'react-native';

export function TitleSection_1 ({ title }: { title: string }) {
    return (
        <View style={{ marginVertical: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', alignSelf: 'flex-end' }}>{title}</Text>
        </View>
    );
}

export function TitleSection_2 ({ title }: { title: string }) {
    return (
        <View style={{ marginVertical: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', alignSelf: 'flex-start' }}>{title}</Text>
        </View>
    );
}