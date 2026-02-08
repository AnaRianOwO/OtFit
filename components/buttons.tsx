import { Pressable, Text } from "react-native"

export function OutfitButton () {
    return (
        <Pressable
            onPress = {() => console.log('Outfit Button Pressed')}
            style = {({ pressed }) => [
                {
                    backgroundColor: pressed ? '#dddddd' : '#969a9e',
                    padding: 10,
                    width: 150,
                    height: 150,
                    borderRadius: 75,
                    alignItems: 'center',
                    alignSelf: 'center',
                    marginVertical: 30
                }
            ]}
        >
            <Text style = {{ color: 'white', fontWeight: 'bold'}}> Boton Outfit</Text>
        </Pressable>
    );
}