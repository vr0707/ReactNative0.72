import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import tailwind from '@tailwind';
import {useDispatch} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
import {TopBar} from '@sharedComponents';
import {useQuery} from 'react-query';
import {getAxiosTest, getCategoryRemote, getCheckBranchRemote} from '../../remote/userRemote';
import {AddressIcon} from '../../assets/icons';
import {infoBox} from '../../workers/utils';
// @ts-ignore
import Icon from 'react-native-vector-icons/Ionicons';

const log = console.log;

export default function HomeScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const [val, setValue] = useState('');

  const categoryData = useQuery(['getAxiosTest', 1], getAxiosTest);
  // const checkBranchData = useQuery(
  //   ['getCheckBranchRemote'],
  //   getCheckBranchRemote,
  // );
  // console.log("fffff",category.data)

  console.log('category--------',categoryData?.data)

  return (
    <View style={tailwind('bg-white h-full p-3')}>
      <TopBar title="Hello" />
      {/* {categoryData.data?.status ? (
        <View>
          <Text style={[tailwind('text-red')]}>Run categoory</Text>
          <AddressIcon />
        </View>
      ) : null} */}
      <Button
        title="Show toast"
        onPress={() => infoBox('This is test')}
      />
      <Icon name="arrow-down" color={"red"} size={25} />
      {/* <Image
        source={assets.react_logo}
        resizeMode="contain"
        style={[tailwind('w-full h-60')]}
      /> */}
    </View>
  );
}
