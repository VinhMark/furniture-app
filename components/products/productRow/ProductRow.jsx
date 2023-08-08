import { View, FlatList, Text, ActivityIndicator } from 'react-native';
import styles from './productRow.style';
import { COLORS, SIZES } from '../../../constants';
import ProductCartView from './../productCartView/ProductCartView';
import useFetch from '../../../hook/useFetch';

const ProductRow = () => {
  const { data, isLoading, error } = useFetch();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={SIZES.large} color={COLORS.primary} />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : (
        <FlatList
          horizontal
          data={data}
          renderItem={({ item }) => <ProductCartView product={item} />}
          contentContainerStyle={{
            columnGap: SIZES.medium,
          }}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default ProductRow;
