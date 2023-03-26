import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Rajkumar Khatua',
      status: 'Just a beginer and do not know about the \ncoding what should he do!',
      imageUrl: 'https://images.unsplash.com/photo-1486002113024-43b2ce358eb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1196&q=80',

    },
    {
      uid: 2,
      name: 'Jone Doe',
      status: 'He is very happy with his Own coding ',
      imageUrl: 'https://images.unsplash.com/photo-1651613543604-195861551d15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',

    },
    {
      uid: 3,
      name: 'Raima Shya',
      status: 'She is Now student!  ',
      imageUrl: 'https://images.unsplash.com/photo-1514355315815-2b64b0216b14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',

    },
    {
      uid: 4,
      name: 'Raj Khatua',
      status: 'Its Raj Me i am learning Coding',
      imageUrl: 'https://images.unsplash.com/photo-1613151096599-b234757eb4d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',

    },
  ];
  return (
    <View>
      <Text style={ styles.headingText }>ContactList</Text>
      <ScrollView style={ styles.container } scrollEnabled={ true }>
        { contacts.map(({ uid, name, status, imageUrl }) => (
          <View key={ uid } style={ styles.userCard }>
            <Image
              source={ {
                uri: imageUrl
              } }
              style={ styles.userImage }
            />

            <View>
              <Text style={ styles.Name }>{ name }</Text>
              <Text style={ styles.Status }>{ status }</Text>
            </View>

          </View>
        )) }
      </ScrollView>
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
  container: {
    // backgroundColor:'#fff',
    paddingHorizontal: 16,
    marginBottom: 5,
    paddingTop: 10
  },
  userCard: {
    flex: 1,
    // justifyContent:'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    backgroundColor: 'grey',
    padding: 8,
    borderRadius: 12
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    resizeMode: 'cover',
    marginRight: 14
  },
  Name: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff'
  },
  Status: {
    fontSize: 13,
    color: '#141823',
    // capHeight: 10.496,
    // ascender: 14.624,
    // descender: 4,
    // width: 28.224,
    // height: 18.624,
    // xHeight: 6.048,
    // x: 0,
    // y: 0
  }
})