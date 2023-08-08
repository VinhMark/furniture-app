import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './searchTitle.style';
import { useNavigation } from '@react-navigation/native';

const SearchTitle = ({ product }) => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate('ProductDetails', { product })}
      >
        <View style={styles.image}>
          <Image source={{ uri: product?.imageUrl }} style={styles.productImg} />
        </View>
        <View style={styles.textContainer}>
          <Text numberOfLines={1} style={styles.productTitle}>
            {product.title}
          </Text>
          <Text style={styles.supplier}>{product.supplier}</Text>
          <Text style={styles.supplier}>${product.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SearchTitle;
