import { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './productDetails.style';
import SafeAreaView from '../../components/layout/SafeAreaView';
import { Fontisto, Ionicons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../../constants';

const ProductDetails = ({ route, navigation }) => {
  const [count, setCount] = useState(1);
  const product = route.params.product;
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View style={styles.upperRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name='chevron-back-circle' size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name='heart' size={30} color={COLORS.primary} />
          </TouchableOpacity>
        </View>

        <Image
          source={{
            uri: product.imageUrl,
          }}
          style={styles.image}
        />

        <View style={styles.details}>
          <View style={styles.titleRow}>
            <Text numberOfLines={2} style={styles.title}>
              {product.title}
            </Text>

            <View style={styles.priceWrapper}>
              <Text style={styles.price}>${product.price}</Text>
            </View>
          </View>

          <View style={styles.ratingRow}>
            <View style={styles.rating}>
              {[1, 2, 3, 4, 5].map((item) => (
                <Ionicons name='star' key={item} size={24} color='gold' />
              ))}
              <Text style={styles.ratingText}> (4.9)</Text>
            </View>

            <View style={styles.rating}>
              <TouchableOpacity onPress={() => increment()}>
                <SimpleLineIcons name='plus' size={20} />
              </TouchableOpacity>
              <Text style={styles.count}>{count}</Text>
              <TouchableOpacity onPress={() => decrement()}>
                <SimpleLineIcons name='minus' size={20} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Description */}
          <View style={styles.descriptionWrapper}>
            <Text style={styles.description}>Description</Text>
            <Text style={styles.descriptionText}>{product.description}</Text>
          </View>

          {/* Shipping */}
          <View style={{ marginBottom: SIZES.small }}>
            <View style={styles.location}>
              <View style={{ flexDirection: 'row', gap: 5 }}>
                <Ionicons name='location-outline' size={20} />
                <Text>{product.product_location}</Text>
              </View>
              <View style={{ flexDirection: 'row', gap: 5 }}>
                <MaterialCommunityIcons name='truck-delivery-outline' size={20} />
                <Text>Free Delivery</Text>
              </View>
            </View>
          </View>

          <View style={styles.cartRow}>
            <TouchableOpacity onPress={() => {}} style={styles.cartBtn}>
              <Text style={styles.cartTitle}>Buy Now</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.addCart}>
              <Fontisto name='shopping-bag' size={24} color={COLORS.lightWhite} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetails;
