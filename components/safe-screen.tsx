import { View, ViewProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Colors } from '@/constants/theme';

interface SafeScreenProps extends ViewProps {
    children: React.ReactNode;
    padding?: number;
}

export function SafeScreen({ 
    children, 
    padding = 10,
    style,
    ...props 
}: SafeScreenProps) {
    const insets = useSafeAreaInsets();
    const colorScheme = useColorScheme() || 'light';
    const backgroundColor = Colors[colorScheme].screenBackground;

    return (
    <View
        style={[
        {
            flex: 1,
            backgroundColor,
            paddingTop: insets.top + padding,
            paddingLeft: insets.left + padding,
            paddingRight: insets.right + padding,
        },
        style,
        ]}
        {...props}
    >
        {children}
    </View>
    );
}