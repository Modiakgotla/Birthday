import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';


const img = require('./assets/b2.jpg')
const cake = require('./assets/CK.png');
export default function App() {
  return (
    <View style={[styles.container,{
      transform: [
        { rotateY: "25deg" },
        { rotateZ: "1deg" }
      ]}]}> 
       
      <View style={{
      width: 600, height: 460, position: 'absolute', margin: 'auto', left: 0,
      right: 0, top: 0, bottom: 0, WebkitPerspective: 1200, perspective: 1200, transition: '1s',width:'90%',boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)',backgroundColor: 'lightgrey',
        display:'flex'}}>
      <ImageBackground source={img} style={{size:'cover',width:'100%',height:'100%'}}>
      <View style={{width:'50%', height:'100%', borderRightWidth:2,borderRightColor:'blue'}}>
            <Image source={cake} style={{width: '60%', height: '80%',marginLeft:'17%',marginTop:'5%' 
                              }}/>
        </View>   
        {/*<View style={{height:'100%',marginLeft:'50%',borderColor:'blue',borderLeftWidth:2}}>*/}
      <View style={{alignContent:'center',margin:'auto', width:'50%',marginLeft:'55%', position:'absolute', marginTop:'15%'/*,marginLeft:'40%'*/}}>
        <View style={{color:'rgb(180, 100, 10)',marginTop:0,fontSize:20, alignItems:'center'}} >
          <Text style={{color:'black',fontSize:20,fontStyle:'italic' }}>Happy Birthday Jeffrey{'\n'}
          Remember Retha loves you. Chin Up{'\n'}
          </Text>
          {/*<Text style={{color:'black',fontSize:20,marginLeft:'1%'}}> be confident,</Text>
          <Text style={{color:'black',fontSize:20,}}>and embark on a future of limitless possibilities </Text>
  <Text style={{color:'black',fontSize:20,marginLeft:'-1%'}}>and opportunities.Have a blissful day </Text>*/}
        </View>

        <marquee style={{color:'rgb(252, 70, 0)',fontSize:60}} behavior="slide" direction="left">I Love You </marquee>
      </View>
      {/*</View>*/}
       </ImageBackground> 
    </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});