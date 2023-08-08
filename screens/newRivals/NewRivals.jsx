import { View, Text, TouchableOpacity } from 'react-native';
import styles from './newRivals.style';
import SafeAreaView from '../../components/layout/SafeAreaView';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants';
import { ProductList } from '../../components/products';

const NewRivals = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        <View style={styles.upperRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name='chevron-back-circle' size={30} color={COLORS.lightWhite} />
          </TouchableOpacity>

          <Text style={styles.heading}>Products</Text>
        </View>
        <ProductList />
      </View>
    </SafeAreaView>
  );
};

export default NewRivals;
