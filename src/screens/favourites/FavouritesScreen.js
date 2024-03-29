import React from "react"
import { View, FlatList } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"
import styles from "./styles"
import { productsData } from "../../assets/data/products"
import Header from "../../components/header/Header"
import FavouriteItem from "../../components/ListItem/FavouriteItem/FavouriteItem"

const FavouritesScreen = ({ navigation }) => {
  // go back
  const goBack = () => {
    navigation.goBack()
  }

  // for flatlist: render each product item as component, get item from FlatList
  const renderFavouriteItem = ({ item }) => {
    // 1st arg: link to ProductDetails screen, 2nd arg: pass product obj item as params for route (renamed as product)
    const onProductPress = () => {
      navigation.navigate("ProductDetails", { product: item })
    }
    // return item and pass props such as whole product item to onProductPress
    return (
      <FavouriteItem {...item} onPressCb={onProductPress} />
    )
  }


  return (
    <SafeAreaView>
      <View>
        <Header title="Favourites" showBackBtn onPressCb={goBack} />
        {/* supply FlatList a list */}
        <FlatList
          data={productsData}
          keyExtractor={(item) => String(item.id)}
          renderItem={renderFavouriteItem}
          style={styles.flatList}
          ListFooterComponent={<View style={{ height: 160 }} />} // add footer to flatlist for spacing
        />
      </View>
    </SafeAreaView>
  )
}

export default React.memo(FavouritesScreen)