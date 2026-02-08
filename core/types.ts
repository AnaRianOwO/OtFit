export interface Outfit {
    id: string;
    name: string;
    color: string;
    items: OutfitItem[];
    image?: string;
    rating?: number;
    createdAt: string;
}

export interface OutfitItem {
    id: string;
    name: string;
    type: 'top' | 'bottom' | 'shoes' | 'accessory' | 'outerwear';
    color: string;
    imageUrl?: string;
}

export interface ClosetItem {
    id: string;
    name: string;
    type: 'top' | 'bottom' | 'shoes' | 'accessory' | 'outerwear';
    color: string;
    imageUrl?: string;
    userId: string;
    createdAt: string;
}

export interface User {
    id: string;
    email: string;
    name: string;
    profileImage?: string;
    preferences: UserPreferences;
}

export interface UserPreferences {
    favoriteColors: string[];
    preferencesStyle: 'casual' | 'formal' | 'sporty' | 'bohemian' | 'mix';
}
