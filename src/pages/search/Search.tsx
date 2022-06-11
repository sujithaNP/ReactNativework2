import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Modal from "react-native-modal";
import { styles } from './SearchStyle'
import SearchImage from '../../asset/Search2.svg'
import FilterImage from '../../asset/filter.svg'
import SearchBar from '../../components/SearchBar'
import SearchRecent from '../../components/SearchRecent'
import RecentCancelImg from '../../asset/cross.svg'
import Label from '../../components/Label';
import Slider from '@react-native-community/slider';
import { Switch } from 'react-native-switch';
import CustomButton from '../../components/Button';
import ButtonWhite from '../../components/ButtonWhite';
import { KeyboardAvoidingContainer, KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view'


const FilterData = [{
  id: 1,
  title: 'Distance',
  isSelected: false,
},
{
  id: 2,
  title: 'Slots Available',
  isSelected: false,
},
{
  id: 3,
  title: 'Lower Price',
  isSelected: false,
}
]


const Search = ({ navigation }) => {

  const [filterData, setFilterData] = useState(FilterData)
  const [isEnabled, setIsEnabled] = useState(false);
  const [distance,setDistance] = useState(0);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [isVisible, setIsVisible] = useState(false);
  const handleIsModalVisible = () => {
    setIsVisible(true)
  }
  const handleIsModalInvisible = () => {
    setIsVisible(false)


  }
  const handleOnpress = (id) => {
    setFilterData(filterData.map((item) => item.id === id ? { ...item, isSelected: !item.isSelected } : item))
    // setFilterData(data)
    // console.log(data)

  }
  const handleReset = () => {
    setFilterData(FilterData)
    setIsEnabled(false)
    setDistance(0)
    // setIsEnabled({0})
    // minimumValue={0}
  }
  console.log(distance)


  return (
    <KeyboardAvoidingScrollView style={{ backgroundColor: '#fff', padding: 10 }}>
      <Modal style={{ margin: 0 }}
        swipeDirection={['down']}
        onSwipeComplete={handleIsModalInvisible}

        isVisible={isVisible}
      >

        <View style={{ backgroundColor: '#ffffff', borderRadius: 10, marginTop: 230, flex: 1 ,borderTopLeftRadius:40,borderTopRightRadius:40}}>
          <Text style={styles.filterText}>Filter</Text>
          <View style={styles.bottomLineStyle} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.sortText}>Sort by</Text>
            <Text style={styles.seeAllText} onPress={handleIsModalInvisible}>See All</Text>

          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            {filterData.map((item) => (
              <Label isSelected={item.isSelected} key={item.id} title={item.title} onPress={() => { handleOnpress(item.id) }} />
            ))}

          </View>
          <View>
            <Text style={styles.distanceText}>Distance</Text>
          </View>
          <Slider
            style={{ width: 400, height: 40, alignSelf: 'center', borderWidth: 4, borderRadius: 100 }}
            minimumValue={0}
            maximumValue={1000}
            minimumTrackTintColor="#EEEEEE"
            maximumTrackTintColor="#4448AE"
            thumbTintColor="#4448AE"
            value={distance}
          onValueChange={value => setDistance(value)}

          />

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 15 }}>
            <Text style={styles.parkingText}>Valet Parking</Text>
            <Switch
              onValueChange={toggleSwitch}
              value={isEnabled}

              // onValueChange={(val) => console.log(val)}
              activeText={''}
              backgroundActive={'#4448AE'}
              circleInActiveColor={'white'}

            />

          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20, }}>
            <ButtonWhite buttonStyle={{ width: '40%', height: '47%', }} placetext={'Reset'} onPress={handleReset} />
            <CustomButton buttonConatinerStyle={{ width: '35%', height: '47%', }} placetext={'Apply Filter'} onPress={handleIsModalInvisible} />
          </View>




        </View>

      </Modal>


      <View>
        <SearchBar onPress={handleIsModalVisible} image={<FilterImage />} img={<SearchImage />} />
        <View style={styles.bottomLineStyle} />
      </View>
      <View>
        <Text style={styles.recentText} >Recent</Text>
        {/* <FlatList
          data={ }
          renderItem={ }
        >


        </FlatList> */}

        <SearchRecent img={<RecentCancelImg />} recentText={'Campion Cottages'} />
        <SearchRecent img={<RecentCancelImg />} recentText={'Willow Brae'} />
        <SearchRecent img={<RecentCancelImg />} recentText={'Orchard Park'} />
        <SearchRecent img={<RecentCancelImg />} recentText={'Chaucer Ridings'} />
        <SearchRecent img={<RecentCancelImg />} recentText={'Bondhouse Lane'} />
        <SearchRecent img={<RecentCancelImg />} recentText={'Portley Lane'} />
        <SearchRecent img={<RecentCancelImg />} recentText={'Broughton Woods'} />
      </View>




    </KeyboardAvoidingScrollView>
  )
}

export default Search

