import { View, FlatList } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"
import styles from "./styles"
import { productsData } from "../../../assets/data/products"
import Header from "../../../components/header/Header"
import FavouriteItem from "../../../components/favouriteItem/FavouriteItem"

const FavouritesScreen = () => {
  // for flatlist: render each product item as component, get item from FlatList
  const renderFavouriteItem = ({item}) => {
    return(
      <FavouriteItem {...item} />
    )
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header title="Favourites" />
        {/* supply FlatList a list */}
        <FlatList
          data={productsData}
          keyExtractor={(item) => String(item.id)}
          renderItem={renderFavouriteItem}
          style={styles.flatList}
          ListFooterComponent={<View style={{height: 80}} />} // add footer to flatlist for spacing
        />
      </View>
    </SafeAreaView>
  )
}

export default FavouritesScreen