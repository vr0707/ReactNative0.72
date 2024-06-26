import {PermissionsAndroid, Platform} from 'react-native';
// import Geolocation from 'react-native-geolocation-service';
// import Snackbar from 'react-native-snackbar';
// import {request, PERMISSIONS} from 'react-native-permissions';
import Toast from 'react-native-toast-message';



export const infoBox = (message: string) => {
  Toast.show({
    type: 'successMsg',
    text1: message,
    topOffset: 150,
    bottomOffset: 110,
    position: 'bottom',
    visibilityTime: 4000,
    props: {
      text1NumberOfLines: 3,
    },
  });
  // Snackbar.show({
  //   text: message,
  //   duration: Snackbar.LENGTH_LONG,
  //   backgroundColor: '#219653',
  //   action: {
  //     text: 'OK',
  //     textColor: 'white',
  //     onPress: () => {},
  //   },
  // });
};

export const errorBox = (message: string) => {
  Toast.show({
    type: 'errorMsg',
    text1: `${message}`,
    topOffset: 150,
    bottomOffset: 110,
    position: 'bottom',
    visibilityTime: 4000,
    props: {
      text1NumberOfLines: 3,
    },
  });
  // Snackbar.show({
  //   text: message,
  //   duration: Snackbar.LENGTH_LONG,
  //   backgroundColor: 'red',
  //   action: {
  //     text: 'OK',
  //     textColor: 'white',
  //     onPress: () => {},
  //   },
  // });
};


export const isValidImageURL = (url: any) => {
  if (url != '' || url != null) {
    return url;
  } else {
    return 'https://i.pinimg.com/originals/1e/34/5b/1e345bc4e0692b0ba3bad2e73a0a815c.jpg';
  }
};
