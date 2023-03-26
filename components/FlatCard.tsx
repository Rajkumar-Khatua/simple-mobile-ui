import { StyleSheet, Text, View, Image, useColorScheme, Button, Alert } from 'react-native'
import HorizontalCard from './HorizontalCard';
import GradientButton from 'react-native-gradient-buttons';
export default function FlatCard(): JSX.Element {
    // const darkMode = useColorScheme() === 'dark';
    return (
        <View>
            <Text style={ styles.headingText }>FlatCard</Text>
            {/* // card container */ }
            <View style={ [styles.cardContainer] }>
                {/* // individual card! */ }
                <View style={ [styles.card, styles.card1] }>
                    <Text >1 Box</Text>
                </View>
                <View style={ [styles.card, styles.card2] }>
                    <Text>1 Box</Text>
                </View>
                <View style={ [styles.card, styles.card3] }>
                    <Text>1 Box</Text>
                </View>
            </View>
           
            {/* <View>
                <View style={ [styles.Cardcontainer2] }>
                    <View style={ [styles.cards, styles.conCard, styles.darkMode ? styles.whiteColor : styles.DarkColor] }>
                        <Image
                            style={ styles.image }
                            resizeMode='cover'
                            source={ { uri: "https://images.unsplash.com/photo-1679076671078-d58d9cbcaef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" } }
                        />
                        <Text style={ [styles.text, styles.darkMode ? styles.whiteColor : styles.DarkColor] }>Hello Raj i'm First Card</Text>
                        <Button
                            title="button pressed"
                            onPress={ () => Alert.alert('Left button pressed') }
                        />
                    </View>
                    <View style={ [styles.cards, styles.conCard2, styles.darkMode ? styles.whiteColor : styles.DarkColor] }>
                        <Image
                            style={ styles.image }
                            resizeMode='cover'
                            source={ { uri: "https://images.unsplash.com/photo-1679076671078-d58d9cbcaef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" } }
                        />
                        <Text style={ [styles.text, styles.darkMode ? styles.whiteColor : styles.DarkColor] }>Hello Raj i'm First Card</Text>
                        <Button
                            title="button pressed"
                            onPress={ () => Alert.alert('Left button pressed') }
                        />
                    </View>
                    <View style={ [styles.cards, styles.conCard3, styles.darkMode ? styles.whiteColor : styles.DarkColor] }>
                        <Image
                            style={ styles.image }
                            resizeMode='cover'
                            source={ { uri: "https://images.unsplash.com/photo-1679076671078-d58d9cbcaef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" } }
                        />
                        <Text style={ [styles.text, styles.darkMode ? styles.whiteColor : styles.DarkColor] }>Hello Raj i'm First Card</Text>
                        <Button
                            title="button pressed"
                            onPress={ () => Alert.alert('Left button pressed') }
                        />
                    </View>
                </View>
            </View> */}
        </View>
    )
}
const styles = StyleSheet.create({
    headingText: {
        fontSize: 25,
        color: '#6d6e75',
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },
    cardContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 8,
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 5,
        margin: 5,

    },
    card1: {
        backgroundColor: '#23db8f'
    },
    card2: {
        backgroundColor: '#992b5e'
    },
    card3: {
        backgroundColor: '#ed3621'
    },


    Cardcontainer2: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        marginTop: 20,
    },
    cards: {
        height: 400,
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 8,

    },
    conCard: {
        backgroundColor: '#cc21eb',
    },
    conCard1: {
        backgroundColor: '#cc21eb',
    },
    conCard2: {
        backgroundColor: '#cc21eb',
    },
    conCard3: {
        backgroundColor: '#cc21eb',
    },
    image: {
        height: '80%',
        width: '100%',
        // marginTop: -70,
        marginTop: -28,
        borderRadius: 8,
    },
    whiteColor: {
        color: '#000',
        backgroundColor: '#2f4866'
    },
    DarkColor: {
        color: '#fff',
        backgroundColor: '#060214'
    },
    text: {
        marginTop: 5,
        fontSize: 20,
        fontWeight: 500,
        marginBottom:5
    },
    Button: {
        width: '100%',
        marginTop: 5
    }
})