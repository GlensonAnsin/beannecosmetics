import React from 'react';
import { ScrollView, View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { horizontalScale, verticalScale, moderateScale } from '../utils/Dimensions';

const HomeScreen = () => {
  const navigation = useNavigation();

  const [wishlistBestSellers, setWishlistBestSellers] = React.useState({});
  const [wishlistTrending, setWishlistTrending] = React.useState({});

  const banners = [
    { id: '1', imageUrl: require('../assets/Images/prom1.png') },
    { id: '2', imageUrl: require('../assets/Images/prom2.png') },
    { id: '3', imageUrl: require('../assets/Images/prom3.png') },
    { id: '4', imageUrl: require('../assets/Images/prom4.png') },
  ];

  const bestSellers = [
    { id: '1', name: 'Matte Lipstick', price: '$19.99', imageUrl: require('../assets/Images/best1.png') },
    { id: '2', name: 'Beach Babe Brow Gel', price: '$29.99', imageUrl: require('../assets/Images/best5.png') },
    { id: '3', name: 'BeanneGlow Cream', price: '$39.99', imageUrl: require('../assets/Images/best2.png') },
    { id: '4', name: 'Revitalizing Blushes', price: '$49.99', imageUrl: require('../assets/Images/best4.png') },
    { id: '5', name: 'All Hours Foundation', price: '$49.99', imageUrl: require('../assets/Images/best3.png') },
  ];

  const trendingProducts = [
    { id: '1', name: 'VelvetTouch Blush', price: '$25.99', imageUrl: require('../assets/Images/tren1.png') },
    { id: '2', name: 'Scarlet Seduction', price: '$30.99', imageUrl: require('../assets/Images/tren2.png') },
    { id: '3', name: 'Midnight Flick Eyeliner', price: '$35.99', imageUrl: require('../assets/Images/tren3.png') },
    { id: '4', name: 'All Hours Foundation', price: '$40.99', imageUrl: require('../assets/Images/tren4.png') },
    { id: '5', name: 'Soft Radiance Foundation', price: '$25.99', imageUrl: require('../assets/Images/tren5.png') },
    { id: '6', name: 'LuxeLips Liquid Lipstick', price: '$30.99', imageUrl: require('../assets/Images/tren6.png') },
    { id: '7', name: 'Perfect Glow Powder', price: '$35.99', imageUrl: require('../assets/Images/tren7.png') },
    { id: '8', name: 'Fierce Flick Mascara', price: '$40.99', imageUrl: require('../assets/Images/tren8.png') },
  ];

  const customerReviews = [
    {
      id: '1',
      name: 'Jane Doe',
      profileImage: require('../assets/Images/customer1.png'),
      rating: 5,
      review: 'This product is amazing! Highly recommend it.'
    },
    {
      id: '2',
      name: 'John Smith',
      profileImage: require('../assets/Images/customer2.png'),
      rating: 4,
      review: 'Great quality and value for money.'
    },
    {
      id: '3',
      name: 'Alice Johnson',
      profileImage: require('../assets/Images/customer3.png'),
      rating: 5,
      review: 'Love it! Will definitely buy again.'
    },
    {
      id: '4',
      name: 'Michael Brown',
      profileImage: require('../assets/Images/customer4.png'),
      rating: 4,
      review: 'Satisfied with the purchase. Worth it!'
    },
  ];

  const handleViewAllProducts = () => {
    console.log("View All Products clicked!");
  };
  const toggleWishlistBestSellers = (id) => {
    setWishlistBestSellers((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const toggleWishlistTrending = (id) => {
    setWishlistTrending((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const renderStars = (rating) => (
    <View style={styles.starsContainer}>
      {[...Array(5)].map((_, index) => (
        <Icon
          key={index}
          name={index < rating ? 'star' : 'star-outline'}
          size={20}
          color={index < rating ? '#FFD700' : '#ccc'}
        />
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.contentContainer}>
        <View style={styles.header}>
          <Text style={styles.brandName}>BéanneGlow</Text>
        </View>

        <View style={styles.searchBar}>
          <Icon name="search" size={20} color="#FF007F" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for your favorite products"
            placeholderTextColor="#888"
          />
          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.bannerScroll}>
          {banners.map((banner) => (
            <View key={banner.id} style={styles.banner}>
              <Image source={banner.imageUrl} style={styles.bannerImage} />
            </View>
          ))}
        </ScrollView>

        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.actionButton}>
            <Image source={require('../assets/Images/ic1.png')} style={styles.icon} />
            <Text style={styles.actionText}>Lippies</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Image source={require('../assets/Images/ic2.png')} style={styles.icon} />
            <Text style={styles.actionText}>Foundation</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Image source={require('../assets/Images/ic3.png')} style={styles.icon} />
            <Text style={styles.actionText}>Mascaras</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Image source={require('../assets/Images/ic4.png')} style={styles.icon} />
            <Text style={styles.actionText}>Blushes</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Best Sellers</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {bestSellers.map((item) => (
              <View key={item.id} style={styles.productCard}>
                <TouchableOpacity
                  style={styles.wishlistIcon}
                  onPress={() => toggleWishlistBestSellers(item.id)}
                >
                  <Icon
                    name={wishlistBestSellers[item.id] ? 'heart' : 'heart-outline'}
                    size={24}
                    color={wishlistBestSellers[item.id] ? '#FF007F' : '#ccc'}
                  />
                </TouchableOpacity>
                <Image source={item.imageUrl} style={styles.fullImage} />
                <View style={styles.textOverlay}>
                  <Text style={styles.productName}>{item.name}</Text>
                  <Text style={styles.productPrice}>{item.price}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Trending Now</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {trendingProducts.map((item) => (
              <View key={item.id} style={styles.productCard}>
                <TouchableOpacity
                  style={styles.wishlistIcon}
                  onPress={() => toggleWishlistTrending(item.id)}
                >
                  <Icon
                    name={wishlistTrending[item.id] ? 'heart' : 'heart-outline'}
                    size={24}
                    color={wishlistTrending[item.id] ? '#FF007F' : '#ccc'}
                  />
                </TouchableOpacity>
                <Image source={item.imageUrl} style={styles.fullImage} />
                <View style={styles.textOverlay}>
                  <Text style={styles.productName}>{item.name}</Text>
                  <Text style={styles.productPrice}>{item.price}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

     {/* View All Products Button */}
            <TouchableOpacity style={styles.viewAllButton} onPress={handleViewAllProducts}>
              <Text style={styles.viewAllText}>View All Products</Text>
            </TouchableOpacity>
    
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Customer Service</Text>
              <View style={styles.customerServiceContainer}>
                {customerReviews.map((review) => (
                  <View key={review.id} style={styles.customerBox}>
                    <Image source={review.profileImage} style={styles.profileImage} />
                    <Text style={styles.customerName}>{review.name}</Text>
                    {renderStars(review.rating)}
                    <Text style={styles.reviewText}>{review.review}</Text>
                  </View>
                ))}
              </View>
            </View>
          </ScrollView>
    
      <View style={styles.lowerBar}>
        <TouchableOpacity style={styles.lowerBarItem}>
          <Icon name="home" size={30} color="#fff" />
          <Text style={styles.lowerBarText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.lowerBarItem}>
          <Icon name="search" size={30} color="#fff" />
          <Text style={styles.lowerBarText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.lowerBarItem}>
          <Icon name="heart" size={30} color="#fff" />
          <Text style={styles.lowerBarText}>Wishlist</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.lowerBarItem}>
          <Icon name="cart" size={30} color="#fff" />
          <Text style={styles.lowerBarText}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.lowerBarItem}>
          <Icon name="person" size={30} color="#fff" />
          <Text style={styles.lowerBarText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
    marginBottom: 60,
  },
  header: {
    padding: moderateScale(10),
    paddingBottom: verticalScale(3),
    marginTop: verticalScale(35),
    alignItems: 'flex-start',
  },
  brandName: {
    fontSize: moderateScale(28),
    fontWeight: 'bold',
    color: '#FF007F',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginHorizontal: 15,
    marginVertical: 10,
    marginTop: 3,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 25,
    fontSize: 14,
  },
  searchButton: {
    backgroundColor: '#FF007F',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginLeft: 10,
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    marginBottom: 10,
  },
  actionButton: {
    alignItems: 'center',
    width: 70,
  },
  actionText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  icon: {
    width: 60,
    height: 60,
  },
  section: {
    marginVertical: 20,
    marginHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
  },
  productCard: {
    width: horizontalScale(160),
    marginRight: horizontalScale(10),
    position: 'relative',
  },
  fullImage: {
    width: '100%',
    height: verticalScale(200),
    borderRadius: moderateScale(10),
  },
  textOverlay: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 10,
    padding: 5,
  },
  productName: {
    color: '#fff',
    fontWeight: 'bold',
  },
  productPrice: {
    color: '#fff',
  },
  bannerScroll: {
    marginBottom: 20,
  },
  banner: {
    marginRight: 10,
  },
  bannerImage: {
    width: horizontalScale(350),
    height: verticalScale(250),
    borderRadius: moderateScale(10),
  },
  lowerBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FF007F',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: verticalScale(60),
    paddingVertical: verticalScale(10),
  },
  lowerBarItem: {
    alignItems: 'center',
  },
  lowerBarText: {
    color: '#fff',
    fontSize: 12,
  },
  wishlistIcon: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 15,
    padding: 5,
  },
  customerServiceContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  customerBox: {
    width: '48%',
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  customerName: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 5,
  },
  starsContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  reviewText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#555',
  },
  viewAllButton: {
    backgroundColor: 'black',
    paddingVertical: 15,
    marginHorizontal: 15,
    marginTop: -10, // Adjusted to be closer to the trending products
    borderRadius: 10,
    alignItems: 'center',
  },
  viewAllText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
    viewAllButton: {
      backgroundColor: 'black',
      paddingVertical: 15,
      marginHorizontal: 15,
      marginTop: -10, // Adjusted to be closer to the trending products
      borderRadius: 10,
      alignItems: 'center',
    },
    viewAllText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

  export default HomeScreen;