import React from 'react'
import { View, FlatList } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"
import Header from "../../../components/header/Header"
import styles from "../favourites/styles"
import { productsData } from "../../../assets/data/products"
import FavouriteItem from "../../../components/ListItem/FavouriteItem/FavouriteItem"

const MyListingsScreen = ({navigation}) => {
    
    // logout
    const logout = () => {
        console.log("log out")
    }

    // go back
    const goBack = () => {
        navigation.goBack()
    }

    // render each item from FlatList
    const renderMyListings = ({item}) => { // more than one expression use {}
        // 1st arg: link to ProductDetails screen, 2nd arg: pass product obj item as params for route (renamed as product)
        const onProductPress = () => (
            navigation.navigate("ProductDetails", { product: item })
        )

         // multiline use ()
        return (
            // show close icon if icon, spread all item props instead passing indivdually
            <FavouriteItem icon={require("../../../assets/icons/trash.png")} {...item} onPressCb={onProductPress} />
        )
    }

    return (
        <SafeAreaView>
            <Header title="My Listings" showBackBtn onPressCb={goBack} logout onLogoutCb={logout} />
            {/* supply FlatList a list */}
            <FlatList
                data={productsData} 
                keyExtractor={(item) => String(item.id)}
                renderItem={renderMyListings} // render component
                style={styles.flatList}
                ListFooterComponent={<View style={{height: 160}} />}
            />
        </SafeAreaView>
    )
}

export default React.memo(MyListingsScreen)