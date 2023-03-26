import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCard from './components/FlatCard'
import FancyCard from './components/FancyCard'
import HorizontalCard from './components/HorizontalCard'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'
const App = () => {
  return (
    <SafeAreaView>
        <ScrollView>
          {/* <Text>Hello</Text> */}
          <FlatCard />
          <HorizontalCard/>
          <FancyCard />
          <ActionCard />
          <ContactList />
        </ScrollView>
    </SafeAreaView>
  )
}

export default App