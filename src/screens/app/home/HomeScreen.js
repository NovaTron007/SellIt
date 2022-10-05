import React from 'react'
import styles from "./styles"
import Header from "../../../components/header/Header"
import { FlatList, View  } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"// iphone notch
import { categoriesData } from "../../../assets/data/categories" // data file
import { productsData } from "../../../assets/data/products" // data file
import CategoryItem from "../../../components/categoriesNav/CategoryItem"
import ProductHomeItem from "../../../components/product/ProductHomeItem"

const HomeScreen = () => {
  // for flatlist: render each item as component
  const renderCatItem = ({ item, index }) => (
    <CategoryItem title={item.title} image={item.image} isFirstItem={ index === 0 } />
  )

  const renderProductItem = ({item}) => (
    <ProductHomeItem {...item} />
  )

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header title="Find all you need" showSearchBtn showLogoutBtn/>
        {/* category container: supply FlatList a list */}
        <FlatList
          data={categoriesData}
          renderItem={renderCatItem}
          keyExtractor={(item, index) => index } // unique key for renderItem
          horizontal // horizontal flatlist
          showsHorizontalScrollIndicator={false} // hide horizontal scrollbar
          style={styles.flatList}
        />

        {/* product container: supply FlatList a list */}
        <FlatList
          data={productsData}
          renderItem={renderProductItem}
          keyExtractor={(item, index) => (item.id)}
          numColumns={2}
          style={styles.productsFlatList}
          ListFooterComponent={<View style={{height: 400}} />} // add footer to flatlist
        />
      </View>
    </SafeAreaView>
  );
}


export default HomeScreen;