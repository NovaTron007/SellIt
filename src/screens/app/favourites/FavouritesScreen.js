import React from 'react'
import { View, FlatList } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"
import styles from "./styles"
import { productsData } from "../../../assets/data/products"
import Header from "../../../components/header/Header"
import FavouriteItem from "../../../components/favouriteItem/FavouriteItem"

const FavouritesScreen = ({navigation}) => {

  // for flatlist: render each product item as component, get item from FlatList
  const renderFavouriteItem = ({item}) => {
    
    // 1st arg: link to ProductDetails screen, 2nd arg: params go here
    const onProductPress = () => {
      navigation.navigate("ProductDetails", {product: item}) // pass product item as params for the route (renamed as product)
    }
    // return item and pass props such as whole product item to onProductPress
    return(
      <FavouriteItem {...item} onPress={onProductPress} />
    )

  }


  return (
    <SafeAreaView>
      <View>
        <Header title="Favourites" />
        {/* supply FlatList a list */}
        <FlatList
          data={productsData}
          keyExtractor={(item) => String(item.id)}
          renderItem={renderFavouriteItem}
          ListFooterComponent={<View style={{height: 80}} />} // add footer to flatlist for spacing
        />
      </View>
    </SafeAreaView>
  )
}

export default React.memo(FavouritesScreen)