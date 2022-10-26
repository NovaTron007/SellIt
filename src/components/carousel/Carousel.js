import React, { useState } from 'react'
import { View, Image, FlatList, Dimensions } from 'react-native'
import styles from "./styles"

// destructure device height, width from window
const { width } = Dimensions.get("window")

const Carousel = ({data}) => {
    // pagination active index
    const [activeIndex, setActiveIndex] = useState(0)
    
    // scroll carousel 
    const handleScroll = (e) => {
        // coordinate of the origin of scrollView's frame relative to the origin of its contentView's frame
        const index = Math.round(e.nativeEvent.contentOffset.x / width ) // divide by device with to get close to whole number
        // set active index ie. 0, 1, 2
        setActiveIndex(index) 
    }

    // for flatlist: render each product item as component, get item from FlatList
    const renderImageItem = ({item}) => (
        <Image style={styles.image} source={{ uri: item}} />
    )

    return (
        <View>
            <FlatList 
                data={data} 
                renderItem={renderImageItem} 
                keyExtractor={(index) => index} 
                horizontal 
                pagingEnabled // allow snap to image
                onMomentumScrollEnd={handleScroll} // detect scroll
            />
            {/* pagination buttons map as many as there are images */}
            <View style={styles.paginateButtonContainer}>
                { data?.map((_item, index) => (
                    <View key={index} style={[styles.paginateButton, index === activeIndex ? styles.activeButton : {}]}></View>
                ))}
            </View>
        </View>

    )
}

export default React.memo(Carousel)