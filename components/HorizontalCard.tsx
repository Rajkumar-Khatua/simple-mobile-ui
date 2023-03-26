import { ScrollView, StyleSheet, Text, View } from 'react-native'
export default function HorizontalCard() {
  return (
    <View>
      <Text style={ styles.headingText }>Horizontal Card</Text>
      <ScrollView horizontal={true}>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.container}>
        <View style={[styles.card, styles.cards]}>
            <Text>Hello Raj</Text>
        </View>
        <View style={[styles.card, styles.cards]}>
            <Text>Hello Raj</Text>
        </View>
        <View style={[styles.card, styles.cards]}>
            <Text>Hello Raj</Text>
        </View>
        <View style={[styles.card, styles.cards]}>
            <Text>Hello Raj</Text>
        </View>
        <View style={[styles.card, styles.cards]}>
            <Text>Hello Raj</Text>
        </View>
        <View style={[styles.card, styles.cards]}>
            <Text>Hello Raj</Text>
        </View>
        <View style={[styles.card, styles.cards]}>
            <Text>Hello Raj</Text>
        </View>
        <View style={[styles.card, styles.cards]}>
            <Text>Hello Raj</Text>
        </View>
        <View style={[styles.card, styles.cards]}>
            <Text>Hello Raj</Text>
        </View>
        <View style={[styles.card, styles.cards]}>
            <Text>Hello Raj</Text>
        </View>
        <View style={[styles.card, styles.cards]}>
            <Text>Hello Raj</Text>
        </View>
        <View style={[styles.card, styles.cards]}>
            <Text>Hello Raj</Text>
        </View>
        <View style={[styles.card, styles.cards]}>
            <Text>Hello Raj</Text>
        </View>
        <View style={[styles.card, styles.cards]}>
            <Text>Hello Raj</Text>
        </View>
        <View style={[styles.card, styles.cards]}>
            <Text>Hello Raj</Text>
        </View>
        <View style={[styles.card, styles.cards]}>
            <Text>Hello Raj</Text>
        </View>
        <View style={[styles.card, styles.cards]}>
            <Text>Hello Raj</Text>
        </View>
        <View style={[styles.card, styles.cards]}>
            <Text>Hello Raj</Text>
        </View>
        <View style={[styles.card, styles.cards]}>
            <Text>Hello Raj</Text>
        </View>
        <View style={[styles.card, styles.cards]}>
            <Text>Hello Raj</Text>
        </View>
        <View style={[styles.card, styles.cards]}>
            <Text>Hello Raj</Text>
        </View>
    </ScrollView>
      </ScrollView>
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
    container: {
        padding:8,
        
    },
    card: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height:50,
        width:100,
        margin:5,
        borderRadius: 30,

        
        
    },
    cards: {
       backgroundColor:'#a6b5a3',
       elevation:4,
       shadowOffset:{
        width:1,
        height:1,
       },
       shadowColor:'#0b0829',
       shadowOpacity:0.6,
       shadowRadius:5
        
    }
   

})    