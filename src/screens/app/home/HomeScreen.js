import React from 'react'
import styles from "./styles"
import Header from "../../../components/header/Header"
import { FlatList, ScrollView  } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"// iphone notch
import { categoriesData } from "../../../assets/data/categories" // data file
import CategoryItem from "../../../components/categoriesNav/CategoryItem"


const HomeScreen = () => {
  // for flatlist: render each item as component
  const renderItem = ({ item }) => (
    <CategoryItem title={item.title} image={item.image} />
  );

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Header title="Find all you need" showSearchBtn showLogoutBtn/>
        {/* supply FlatList a list */}
        <FlatList
          data={categoriesData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index } // unique key for renderItem
          horizontal // horizontal flatlist
          showsHorizontalScrollIndicator={false} // hide horizontal scrollbar
          style={styles.flatList}
        />
      </ScrollView>
    </SafeAreaView>
  );
}


export default HomeScreen;