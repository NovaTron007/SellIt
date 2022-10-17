import React, { useState, useEffect} from 'react'
import styles from "./styles"
import Header from "../../../components/header/Header"
import { FlatList, View, Text  } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"// iphone notch
import { categoriesData } from "../../../assets/data/categories" // data file
import { productsData } from "../../../assets/data/products" // data file
import CategoryItem from "../../../components/categoriesNav/CategoryItem"
import ProductHomeItem from "../../../components/product/ProductHomeItem"

const HomeScreen = ({navigation}) => {
  // init selected index for category
  const [selectedCatId, setSelectedCatId] = useState()

  //  filtered products based on selectedCatId
  const [filteredProducts, setFilteredProducts] = useState(productsData)

  // search keywords (controlled input)
  const [keyword, setKeyword] = useState()

  // for flatlist: render each item as component (get item from FlatList)
  const renderCatItem = ({ item, index }) => {
    console.log("item.id: ", item.id)
    return(
      <CategoryItem 
        title={item?.title} 
        image={item?.image} 
        isFirstItem={ index === 0 } 
        selectedCatId={ item?.id  === selectedCatId } // true when item.id equals selectedCatId
        onPress={() => setSelectedCatId(item?.id)} /> // set selectedCatId to items id
    )
  }

  // for flatlist: render each product item as component (get item from FlatList)
  const renderProductItem = ({item}) => {
    // 1st arg: link to ProductDetails screen, 2nd arg: params go here
    const onProductPress = (product) => {
      navigation.navigate("ProductDetails",  {product}) // pass product item as params for the route
    }
    // return item and pass props such as whole product item to onProductPress
    return(
      <ProductHomeItem {...item} onPress={() => onProductPress(item)} />
    )
  }
  

  // listen for selectedCatId change and keyword: setFiltereddProducts & keyword
  useEffect(() => {
    // filter products by category
    if(selectedCatId && !keyword) {
      // filter products where cat equal to selectedCatId
      const products = productsData.filter((product) => product?.category === selectedCatId)
      setFilteredProducts(products) // update products
    } 
      // filter products based on selected category AND keyword
      else if(selectedCatId && keyword) {
        // lowercase product title and search keyword to make match
        const products = productsData.filter((product) => product?.category === selectedCatId && product?.title.toLowerCase().includes(keyword?.toLowerCase()))
        setFilteredProducts(products) // update products
      }
        // filter ALL products based on keyword
        else if(!selectedCatId && keyword) {
          // lowercase product title and search keyword to make match
          const products = productsData.filter((product) => product?.title.toLowerCase().includes(keyword?.toLowerCase()))
          setFilteredProducts(products)
        }
          // if no filters set filteredProducts to show all products
          else {
            setFilteredProducts(productsData)
          }

  },[selectedCatId, keyword])



  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header 
          title="Find all you need" 
          showSearchBtn
          showLogoutBtn
          keyword={keyword}
          setKeyword={setKeyword} // pass to Input component to set value
        />
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
        { filteredProducts.length ? 
          <FlatList
            data={filteredProducts}
            renderItem={renderProductItem}
            keyExtractor={(item, index) => (item.id)}
            numColumns={2}
            style={styles.productsFlatList}
            ListFooterComponent={<View style={{height: 400}} />} // add footer to flatlist for spacing
          />
        : 
        // no products found
        <View><Text style={[styles.title, styles.noProducts]}>No products found!</Text></View> 
        }

      </View>
    </SafeAreaView>
  );
}


export default React.memo(HomeScreen);