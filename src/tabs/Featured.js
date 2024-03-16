import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import ViewCourse from '../Screens/ViewCourse';

const FeaturedCourses = [
  {
    title: 'Learn Python in 30 days easily',
    image:
      'https://www.fossmint.com/wp-content/uploads/2019/02/Udemy-Python-Learning-Courses-for-Beginners.png',
    tutor: 'Gaurav Bhardwaraj',
    price: '3999',
    discountPrice: '599',
    rating: '4.1',
    totalRating: '150',
    isBestSeller: true,
  },
  {
    title: 'Java Full Course',
    image: 'https://i.ytimg.com/vi/CylZMxAe2Js/maxresdefault.jpg',
    tutor: 'Khursheed Alam',
    price: '2999',
    discountPrice: '1999',
    rating: '4.3',
    totalRating: '299',
    isBestSeller: true,
  },
  {
    title: 'React js course Zero to Hero',
    image: 'https://i.ytimg.com/vi/bMknfKXIFA8/maxresdefault.jpg',
    tutor: 'Dhananjay Kumar',
    price: '2499',
    discountPrice: '1999',
    rating: '4.6',
    totalRating: '355',
    isBestSeller: true,
  },
  {
    title: 'React Native full course',
    image:
      'https://www.freecodecamp.org/news/content/images/2023/04/reactnative.png',
    tutor: 'Rishabh Sharma',
    price: '2999',
    discountPrice: '999',
    rating: '4.6',
    totalRating: '8949',
    isBestSeller: true,
  },
  {
    title: 'Node Js Full Course',
    image:
      'https://media.geeksforgeeks.org/wp-content/uploads/20230331172641/NodeJS-copy.webp',
    tutor: 'Rohan Sharma',
    price: '999',
    discountPrice: '300',
    rating: '3.6',
    totalRating: '38',
    isBestSeller: false,
  },
];

const Featured = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{flex: 1}}>
        <Image
          source={require('../images/laughing-woman.jpg')}
          style={{width: '100%', height: 200}}
        />
        <Text
          style={{
            fontSize: 27,
            color: 'black',
            fontWeight: 500,
            marginLeft: 20,
            marginRight: 20,
            marginTop: 12,
          }}>
          {'Learn From\nTheir experiences'}
        </Text>

        <Text
          style={{
            fontSize: 20,
            marginLeft: 20,
            marginRight: 20,
            color: '#4d4d4d',
            marginTop: 5,
          }}>
          {
            'It is a long established fact that a reader will be distracted by the readable look like readable English'
          }
        </Text>

        <View
          style={{
            width: '90%',
            height: 60,
            backgroundColor: '#e6e600',
            alignSelf: 'center',
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'black', fontSize: 18}}>Learn from Experts</Text>
          <Text style={{color: 'black', fontSize: 14, fontWeight: '800'}}>
            Ends in 1 Days
          </Text>
        </View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 800,
            color: 'black',
            marginLeft: 20,
            marginTop: 15,
          }}>
          Featured
        </Text>

        <View style={{width: '100%', marginBottom: 150, marginTop: 10}}>
          <FlatList
            data={FeaturedCourses}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{width: 300, marginLeft: 10}}
                  onPress={() => {
                    navigation.navigate('ViewCourse', {
                      data: item,
                    });
                  }}>
                  <View
                    style={{
                      width: '100%',
                      height: '100%',
                    }}>
                    <Image
                      source={{
                        uri: item.image,
                      }}
                      style={{width: '100%', height: 150}}
                    />
                    <Text
                      style={{
                        fontSize: 18,
                        color: '#000',
                        fontWeight: '600',
                        marginLeft: 10,
                        marginTop: 10,
                      }}>
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        color: '#8e8e8e',
                        fontWeight: '600',
                        marginLeft: 10,
                      }}>
                      {item.tutor}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginLeft: 10,
                        alignItems: 'center',
                      }}>
                      <Text style={{marginRight: 5, color: '#0d0c0c'}}>
                        {item.rating}
                      </Text>
                      <Image
                        source={require('../images/color-star.png')}
                        style={{width: 14, height: 14}}
                      />
                      <Image
                        source={require('../images/color-star.png')}
                        style={{width: 14, height: 14}}
                      />
                      <Image
                        source={require('../images/color-star.png')}
                        style={{width: 14, height: 14}}
                      />
                      <Image
                        source={require('../images/color-star.png')}
                        style={{width: 14, height: 14}}
                      />
                      <Image
                        source={require('../images/rating.png')}
                        style={{width: 14, height: 14}}
                      />
                      <Text style={{color: '#0d0c0c'}}>
                        {'(' + item.totalRating + ')'}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          fontWeight: '800',
                          fontSize: 20,
                          color: '#000',
                          marginLeft: 10,
                          marginTop: 5,
                        }}>
                        {'₹' + item.price}
                      </Text>
                      <Text
                        style={{
                          textDecorationLine: 'line-through',
                          fontSize: 14,
                          color: '#000',
                          marginLeft: 10,
                          marginTop: 5,
                        }}>
                        {'₹' + item.discountPrice}
                      </Text>
                    </View>
                    {item.isBestSeller ? (
                      <View
                        style={{
                          backgroundColor: '#e6e600',
                          width: 100,
                          height: 30,
                          justifyContent: 'center',
                          alignItems: 'center',
                          marginTop: 8,
                        }}>
                        <Text style={{color: 'black'}}>Best Seller</Text>
                      </View>
                    ) : null}
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <TouchableOpacity
          style={{
            width: '100%',
            height: 50,
            backgroundColor: '#000',
            position: 'absolute',
            bottom: 60,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: '#fff'}}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Featured;
