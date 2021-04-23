import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyAjw70TBOtHx6TD8_ZXnTSsJJ0sSm7jT3o',
  authDomain: 'image-upload-with-react.firebaseapp.com',
  databaseURL: 'https://image-upload-with-react.firebaseio.com',
  projectId: 'image-upload-with-react',
  storageBucket: 'image-upload-with-react.appspot.com',
  appId: '1:281964409838:web:f5b7765318c23d0748d4ff',
  // messagingSenderId: '281964409838',
  // measurementId: 'super secret as;dlkfjal;dskjf',
}

firebase.initializeApp(firebaseConfig)
firebase.analytics()

const storage = firebase.storage()

export { storage, firebase as default }
