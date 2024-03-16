import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Featured from '../tabs/Featured';
import Search from '../tabs/Search';
import MyLearning from '../tabs/MyLearning';
import WishList from '../tabs/WishList';
import User from '../tabs/User';

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <View style={{flex: 1}}>
      {selectedTab == 0 ? (
        <Featured />
      ) : selectedTab == 1 ? (
        <Search />
      ) : selectedTab == 2 ? (
        <MyLearning />
      ) : selectedTab == 3 ? (
        <WishList />
      ) : selectedTab == 4 ? (
        <User />
      ) : null}
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: '#fff',
          height: 60,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setSelectedTab(0);
          }}>
          <Image
            source={
              selectedTab == 0
                ? require('../images/star_fill.png')
                : require('../images/star.png')
            }
            style={{width: 24, height: 24}}
          />
          <Text style={{color: '#0d0c0c'}}>Featured</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setSelectedTab(1);
          }}>
          <Image
            source={
              selectedTab == 1
                ? require('../images/search_fill.png')
                : require('../images/search.png')
            }
            style={{width: 24, height: 24}}
          />
          <Text style={{color: '#0d0c0c'}}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setSelectedTab(2);
          }}>
          <Image
            source={
              selectedTab == 2
                ? require('../images/play-button_fill.png')
                : require('../images/play-button.png')
            }
            style={{width: 24, height: 24}}
          />
          <Text style={{color: '#0d0c0c'}}>Learning</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setSelectedTab(3);
          }}>
          <Image
            source={
              selectedTab == 3
                ? require('../images/heart_fill.png')
                : require('../images/heart.png')
            }
            style={{width: 24, height: 24}}
          />
          <Text style={{color: '#0d0c0c'}}>Wishlist</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setSelectedTab(4);
          }}>
          <Image
            source={
              selectedTab == 4
                ? require('../images/user_fill.png')
                : require('../images/user.png')
            }
            style={{width: 24, height: 24}}
          />
          <Text style={{color: '#0d0c0c'}}>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
