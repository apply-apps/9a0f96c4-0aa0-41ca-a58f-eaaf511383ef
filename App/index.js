// Filename: index.js
// Combined code from all files

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet, Text, Button, View, Image, ScrollView } from 'react-native';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={stylesHome.container}>
            <Image 
                source={{ uri: 'https://picsum.photos/200/300' }} 
                style={stylesHome.image} 
            />
            <Text style={stylesHome.title}>Welcome to the Fairy Tale World!</Text>
            <View style={stylesHome.buttonContainer}>
                <Button
                    title="Start the Story"
                    onPress={() => navigation.navigate('Story')}
                    color="#8E44AD"
                />
            </View>
        </SafeAreaView>
    );
};

const StoryScreen = () => {
    return (
        <SafeAreaView style={stylesStory.container}>
            <ScrollView style={stylesStory.scrollView}>
                <Text style={stylesStory.text}>{fairyTaleText}</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

const fairyTaleText = `
Once upon a time, in a land far, far away, there lived a young princess named Lily. She was known for her kindness and her love for nature. One day, Lily decided to venture into the enchanted forest, despite the warnings from the villagers. 

As she walked deeper into the forest, she came across a tiny, sparkling fairy named Elara. Elara was in distress because the magical stream that gave life to the forest was drying up. Lily, determined to help, followed Elara to the source of the stream.

Together, they discovered that an evil sorcerer had cast a spell to stop the flow of water. Lily, with her pure heart, confronted the sorcerer and pleaded for the stream to be restored. The sorcerer, moved by her bravery and sincerity, reversed the spell and the water started to flow again.

The forest flourished, and Lily returned to her kingdom as a hero. From that day on, she was celebrated not just as a princess, but as a savior of the enchanted forest.
`;

const stylesHome = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    image: {
        width: 200,
        height: 300,
        borderRadius: 10,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    buttonContainer: {
        marginTop: 20,
        width: '80%',
    },
});

const stylesStory = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    scrollView: {
        padding: 20,
    },
    text: {
        fontSize: 18,
        lineHeight: 30,
    },
});

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Story" component={StoryScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}