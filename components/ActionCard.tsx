import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink)
  }
  return (
    <View>
      <Text style={ styles.headingText }>Know More about this places</Text>
      <View style={ [styles.card, styles.cards] }>
        <View style={ styles.headingContainer }>
          <Text style={ styles.headerText }>
            what's new in this place!
          </Text>
        </View>
        <Image
          source={ { uri: 'https://images.unsplash.com/photo-1496372412473-e8548ffd82bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1614&q=80' } }
          style={ styles.Cardimage }
        />
        <View style={ styles.CardBodyContainer }>
          <Text style={ styles.CardDesc }>
            Kolkata (formerly Calcutta) is the capital of India's West Bengal state. Founded as an East India Company trading post, it was India's capital under the British Raj from 1773–1911. Today it’s known for its grand colonial architecture, art galleries and cultural festivals. It’s also home to Mother House, headquarters of the Missionaries of Charity, founded by Mother Teresa, whose tomb is on site
          </Text>
        </View>
        <View style={ styles.CardFooterContainer }>
          <Text style={ styles.title }>Kolkata (West Bengal)</Text>
          <TouchableOpacity onPress={ () => openWebsite('https://en.wikipedia.org/wiki/Kolkata') }>
            <Text style={ styles.footerText }>Know More...</Text>
          </TouchableOpacity>

        </View>
      </View>

      <View style={ [styles.card, styles.cards] }>
        <View style={ styles.headingContainer }>
          <Text style={ styles.headerText }>
            what's new in this place!
          </Text>
        </View>
        <Image
          source={ { uri: 'https://images.unsplash.com/photo-1636012873375-f77a63af3f9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' } }
          style={ styles.Cardimage }
        />
        <View style={ styles.CardBodyContainer }>
          <Text style={ styles.CardDesc }>
            Jaipur is the capital of India’s Rajasthan state. It evokes the royal family that once ruled the region and that, in 1727, founded what is now called the Old City, or “Pink City” for its trademark building color. At the center of its stately street grid (notable in India) stands the opulent, colonnaded City Palace complex. With gardens, courtyards and museums, part of it is still a royal residence.
          </Text>
        </View>
        <View style={ styles.CardFooterContainer }>
          <Text style={ styles.title }>Jaipur (Rajasthan)</Text>
          <TouchableOpacity onPress={ () => openWebsite('https://en.wikipedia.org/wiki/Jaipur') }>
            <Text style={ styles.footerText }>Know More...</Text>
          </TouchableOpacity>

        </View>
      </View>

      <View style={ [styles.card, styles.cards] }>
        <View style={ styles.headingContainer }>
          <Text style={ styles.headerText }>
            what's new in this place!
          </Text>
        </View>
        <Image
          source={ { uri: 'https://images.unsplash.com/photo-1601961405399-801fb1f34581?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80' } }
          style={ styles.Cardimage }
        />
        <View style={ styles.CardBodyContainer }>
          <Text style={ styles.CardDesc }>
            Mumbai (formerly called Bombay) is a densely populated city on India's west coast. A financial center, it's India's largest city. On the Mumbai Harbour waterfront stands the iconic Gateway of India stone arch, built by the British Raj in 1924. Offshore, nearby Elephanta Island holds ancient cave temples dedicated to the Hindu god Shiva. The city's also famous as the heart of the Bollywood film industry.
          </Text>
        </View>
        <View style={ styles.CardFooterContainer }>
          <Text style={ styles.title }>Mumbai (City in Maharashtra)</Text>
          <TouchableOpacity onPress={ () => openWebsite('https://en.wikipedia.org/wiki/Mumbai') }>
            <Text style={ styles.footerText }>Know More...</Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    color: '#6d6e75',
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  card: {
    width: 380,
    height: 540,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
    margin:8
  },
  cards: {
    backgroundColor: '#e3dce2',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowColor:'#000',
    shadowOpacity:0.6
  },
  headingContainer: {
    height:40,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  headerText: {
    fontSize: 18,
    color: '#050101',
    marginBottom: 6,
    fontWeight:'bold'
  },
  Cardimage: {
    height: 250,
    resizeMode: 'cover',
    borderRadius: 6
  },
  CardBodyContainer: {
    padding: 10
  },
  CardDesc: {
    color: '#403e40',
    fontSize: 14,
    marginTop: 6,
    flexShrink: 1
  },
  CardFooterContainer: {
    padding:8,
    flexDirection:'column',
    justifyContent:'flex-end',
    alignItems:'flex-end'
  },
  title: {
    color: '#233336',
    fontSize: 18,
    marginBottom: 6
  },
  footerText: {
    color: '#030c5c',
    fontSize: 16,
    backgroundColor:'#bdc9c3',
    paddingHorizontal:20,
    paddingVertical:10,
    borderRadius:30
  }
})