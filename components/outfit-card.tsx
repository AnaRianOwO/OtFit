import { BORDER_RADIUS, SHADOWS, SPACING } from '@/constants/layout';
import { useColorScheme } from '@/hooks/use-color-scheme';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

interface OutfitCardProps {
    name: string;
    color: string;
    description?: string;
    onPress?: () => void;
    previewColor?: string;
}

export function OutfitCard({
    name,
    color,
    description,
    onPress,
    previewColor = '#E0E0E0',
}: OutfitCardProps) {
    const colorScheme = useColorScheme();
    const isDark = colorScheme === 'dark';

    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={{ flex: 1 }}>
            <ThemedView style={[styles.card, isDark ? styles.cardDark : styles.cardLight]}>
                {/* Preview Avatar Area */}
                <View
                style={[
                    styles.previewContainer,
                    { backgroundColor: previewColor },
                ]}
                >
                <View
                    style={[
                    styles.avatarPlaceholder,
                    { backgroundColor: color },
                    ]}
                />
                <ThemedText type="defaultSemiBold" style={styles.colorLabel}>
                    {color}
                </ThemedText>
                </View>

                {/* Outfit Info */}
                <View style={styles.infoContainer}>
                <ThemedText type="subtitle" numberOfLines={1}>
                    {name}
                </ThemedText>
                {description && (
                    <ThemedText
                    type="default"
                    numberOfLines={2}
                    style={styles.description}
                    >
                    {description}
                    </ThemedText>
                )}
                </View>

                {/* Rating or Badge */}
                <View style={styles.footer}>
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>⭐ Trending</Text>
                </View>
                </View>
            </ThemedView>
        </TouchableOpacity>
    );
}

    const styles = StyleSheet.create({
    card: {
        flex: 1,
        marginVertical: SPACING.md,
        borderRadius: BORDER_RADIUS.lg,
        overflow: 'hidden',
        ...SHADOWS.medium,
    },
    cardLight: {
        backgroundColor: '#FFFFFF',
    },
    cardDark: {
        // backgroundColor: '#2A2A2A',
        backgroundColor: '#f8f8f8',
    },
    previewContainer: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    avatarPlaceholder: {
        width: 80,
        height: 80,
        borderRadius: BORDER_RADIUS.md,
        opacity: 0.8,
    },
    colorLabel: {
        position: 'absolute',
        bottom: SPACING.md,
        right: SPACING.md,
        backgroundColor: 'rgba(0,0,0,0.6)',
        color: '#FFFFFF',
        paddingHorizontal: SPACING.md,
        paddingVertical: SPACING.sm,
        borderRadius: BORDER_RADIUS.sm,
        fontSize: 12,
    },
    infoContainer: {
        padding: SPACING.lg,
        gap: SPACING.sm,
    },
    description: {
        fontSize: 13,
        opacity: 0.7,
    },
    footer: {
        paddingHorizontal: SPACING.lg,
        paddingBottom: SPACING.lg,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    badge: {
        backgroundColor: '#FFD700',
        paddingHorizontal: SPACING.md,
        paddingVertical: SPACING.sm,
        borderRadius: BORDER_RADIUS.sm,
    },
    badgeText: {
        fontSize: 12,
        fontWeight: '600',
        color: '#000',
    },
});
