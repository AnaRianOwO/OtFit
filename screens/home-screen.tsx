import {Line} from '@/components/line';
import { SafeScreen } from '@/components/safe-screen';
import { TitleSection } from '@/components/title-section';
// import { Colors } from '@/constants/theme';
// import { useColorScheme } from '@/hooks/use-color-scheme';
// import { View, Text } from 'react-native';


export function HomeScreen () {
    // const colorScheme = useColorScheme() || 'light';
    // const backgroundColor = Colors[colorScheme].screenBackground;

    return (
        <SafeScreen>
            <TitleSection title="Crear Outfit"/>
            <Line />
        </SafeScreen>
    );
}

