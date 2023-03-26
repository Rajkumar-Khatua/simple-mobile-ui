import { StyleSheet, Text, View, Image } from 'react-native'
export default function FancyCard() {
    return (
        <View>
            <Text style={ styles.headingText }>Trending Places</Text>
            <View style={ [styles.card, styles.cards] }>
                <Image
                    source={ { uri: 'https://images.unsplash.com/photo-1517713982677-4b66332f98de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' } }
                    style={ styles.cardImage }

                />
                <View style={ styles.cardBody }>
                    <Text style={ styles.cardTitle }>Bridge!</Text>
                    <Text style={ styles.cardLabel }>Mianyang, China</Text>
                    <Text style={ styles.cardDesc }>Walking in the river in Mianyang found this beautiful corner. The beautiful curve attracts me to take this beautiful moment.</Text>
                    <Text style={ styles.cardFooter }>25min away</Text>
                </View>
            </View>
            <View style={ [styles.card, styles.cards] }>
                <Image
                    source={ { uri: 'https://images.unsplash.com/photo-1545126178-862cdb469409?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' } }
                    
                    style={ styles.cardImage }
                    

                />
                <View style={ styles.cardBody }>
                    <Text style={ styles.cardTitle }>Hawa Mahal</Text>
                    <Text style={ styles.cardLabel }>Jaipur, India</Text>
                    <Text style={ styles.cardDesc }>Walking in the river in Mianyang found this beautiful corner. The beautiful curve attracts me to take this beautiful moment.</Text>
                    <Text style={ styles.cardFooter }>12min away</Text>
                </View>
            </View>
            <View style={ [styles.card, styles.cards] }>
                <Image
                    source={ { uri: 'https://images.unsplash.com/photo-1517427677506-ade074eb1432?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80' } }
                    style={ styles.cardImage }

                />
                <View style={ styles.cardBody }>
                    <Text style={ styles.cardTitle }>Amritsar, India</Text>
                    <Text style={ styles.cardLabel }>Amritsar, India</Text>
                    <Text style={ styles.cardDesc }>Walking in the river in Mianyang found this beautiful corner. The beautiful curve attracts me to take this beautiful moment.</Text>
                    <Text style={ styles.cardFooter }>2min away</Text>
                </View>
            </View>
            <View style={ [styles.card, styles.cards] }>
                <Image
                    source={ { uri: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' } }
                    style={ styles.cardImage }

                />
                <View style={ styles.cardBody }>
                    <Text style={ styles.cardTitle }>Kerala Backwaters</Text>
                    <Text style={ styles.cardLabel }> Alappuzha, India!</Text>
                    <Text style={ styles.cardDesc }>I was on a boat travelling down the backwaters of Kerala watching kids playing in the river when I spotted this hard working gentleman. He seemed to be happy as larry.</Text>
                    <Text style={ styles.cardFooter }>10min away</Text>
                </View>
            </View>
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
    card: {
        flex: 1,
        width: 380,
        height: 380,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16

    },
    cards: {

        backgroundColor: '#CAD5E2',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        }
    },
    cardImage: {
        height: 200,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        resizeMode:'cover'
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
    },
    cardTitle: {
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 6

    },
    cardLabel: {

        color: '#9424F0',
        fontSize: 18,
        marginBottom: 4,

    },
    cardDesc: {
        color: '#000000',
        fontSize: 14,
        marginBottom: 12,
        marginTop: 6,
        flexShrink: 1

    },
    cardFooter: {

        color: '#000000'
    }
})