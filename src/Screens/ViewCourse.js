import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

const ViewCourse = () => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <ScrollView>
      <View style={{flex: 1}}>
        <View
          style={{
            width: '100%',
            height: 200,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Image
            source={{uri: route.params.data.image}}
            style={{
              width: '90%',
              height: 200,
              alignSelf: 'center',
            }}
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              width: '90%',
              height: '100%',
              top: 0,
              backgroundColor: 'rgba(0,0,0,.5)',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              navigation.navigate('VideoScreen');
            }}>
            <Image
              source={require('../images/play-button_fill.png')}
              style={{width: 40, height: 40, tintColor: 'white'}}
            />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 22,
            fontWeight: '500',
            marginLeft: 20,
            marginTop: 10,
            color: 'black',
          }}>
          {route.params.data.title}
        </Text>

        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            marginLeft: 20,
            textAlign: 'justify',
            marginRight: 20,
            marginTop: 6,
            color: '#4d4d4d',
          }}>
          {
            'The point of using Lorem Ipsum is that it has a more-or-less normal  more-or-less normaldistribution of letters, as opposed to using  making it look like readable English.'
          }
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            marginBottom: 8,
            marginLeft: 20,
          }}>
          <Text
            style={{
              fontSize: 20,
              marginRight: 7,
              fontWeight: 'bold',
              color: '#4d4d4d',
            }}>
            {route.params.data.rating}
          </Text>
          <Image source={require('../images/color-star.png')} />
          <Image source={require('../images/color-star.png')} />
          <Image source={require('../images/color-star.png')} />
          <Image source={require('../images/color-star.png')} />
          <Image source={require('../images/rating.png')} />
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontSize: 14, marginLeft: 20, color: '#000'}}>
            {'(15,53 rating) 17,907 students'}
          </Text>
        </View>

        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text style={{marginLeft: 20, color: '#4d4d4d'}}>Posted By</Text>
          <Text style={{fontWeight: 'bold', color: 'purple'}}>
            {' ' + route.params.data.tutor}
          </Text>
        </View>

        <View style={{marginTop: 8}}>
          <FlatList
            data={[
              {
                title: 'Last update 20 aug 2022',
                icon: require('../images/info.png'),
              },
              {
                title: 'English',
                icon: require('../images/world.png'),
              },
              {
                title: 'English',
                icon: require('../images/caption.png'),
              },
            ]}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{flexDirection: 'row', marginLeft: 20, marginTop: 5}}>
                  <Image
                    source={item.icon}
                    style={{width: 16, height: 16, marginRight: 5}}
                  />
                  <Text style={{color: '#4d4d4d'}}>{item.title}</Text>
                </View>
              );
            }}
          />
        </View>
        <Text
          style={{
            marginLeft: 15,
            marginTop: 8,
            fontSize: 24,
            fontWeight: '800',
            color: 'black',
          }}>
          {' ₹ 389.00'}
        </Text>
        <TouchableOpacity
          style={{
            height: 50,
            width: '90%',
            backgroundColor: 'purple',
            alignSelf: 'center',
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 22,
            }}>
            Buy Now
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 50,
            width: '90%',
            borderWidth: 2,
            alignSelf: 'center',
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 22,
              color: 'black',
              fontWeight: 'bold',
            }}>
            Add To Cart
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: '#000',
            fontSize: 24,
            fontWeight: '600',
            marginLeft: 20,
            marginTop: 20,
          }}>
          Curriculum
        </Text>
        <Text style={{marginLeft: 20, marginTop: 7, color: '#4d4d4d'}}>
          {'10 sections, 64 leactures, 9 hours'}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            marginTop: 10,
          }}>
          <Text style={{fontSize: 20, color: '#4d4d4d'}}>
            Section 1 - Getting Started
          </Text>
          <Image source={require('../images/minus.png')} />
        </View>
        <View>
          <FlatList
            data={[1, 1, 1, 1, 1, 1, 1, 1, 1]}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    height: 70,
                    width: '100%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        marginHorizontal: 30,
                        fontWeight: 'bold',
                        fontSize: 18,
                        color: '#4d4d4d',
                      }}>
                      {index + 1}
                    </Text>
                    <View>
                      <Text style={{fontSize: 20, color: '#4d4d4d'}}>
                        {'Video ' + (index + 1)}
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginTop: 10,
                        }}>
                        <Text style={{color: '#4d4d4d'}}>
                          {'Video ' + (index + 1) + ' min'}
                        </Text>
                        <Image
                          source={require('../images/caption.png')}
                          style={{width: 16, height: 16, marginLeft: 10}}
                        />
                      </View>
                    </View>
                  </View>
                  <Image
                    source={require('../images/play-button.png')}
                    style={{marginRight: 20}}
                  />
                </View>
              );
            }}
          />
        </View>
        <View style={{height: 100, width: '100%'}}></View>
      </View>
    </ScrollView>
  );
};

export default ViewCourse;
