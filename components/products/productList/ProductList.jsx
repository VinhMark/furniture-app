import { View, Text, ActivityIndicator } from 'react-native';
import styles from './productList.style';
import useFetch from '../../../hook/useFetch';
import { COLORS, SIZES } from '../../../constants';
import { FlatList } from 'react-native-gesture-handler';
import ProductCartView from '../productCartView/ProductCartView';

const ProductList = () => {
  const { data, isLoading, error } = useFetch();

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({ item }) => <ProductCartView product={item} />}
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default ProductList;
