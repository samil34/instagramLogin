import React, { Component } from 'react'
import {
  Text, View, Image, SafeAreaView, Dimensions,
  TouchableOpacity, ScrollView, TextInput
} from 'react-native';


import {Input, Button, CheckBox } from './src/Components';

const { width } = Dimensions.get('window')

export default class App extends Component {
 
  state = {
    username: '',
    password: '',
    isShowPassword: false
  }



  render() {
   
    const {
      username,
      password,
      isShowPassword   

    } =this.state

    return (
      <SafeAreaView style={{ flex: 1 }}>
        
        <ScrollView contentContainerStyle = {{flex: 1}}>
        
        <View style={[styles.ortala,{ flex: 3 }]}>
              <Image
              source = {require('./src/image/logo.png')}
              style = {styles.logo}
              />
        </View>

      {/* from */ }
        <View style={{ flex: 6, backgroundColor: '', alignItems:'center' }}>
    
        <Input
         placeholder = {'E-mail'}
         keboardType = {'email-address'}
         value = {this.state.username}
         onChangeText = {(username) => this.setState({ username })}

        />

        <Input
         placeholder = {'Password'}
         secureTextEntry = {isShowPassword}
         keboardType = {'numeric'}
         value = {password}
         onChangeText = {(password) => this.setState({ password})}

        />

        <View style = {{
          justifyContent:'space-between',
          flexDirection:'row',
          width: '90%',
           marginBottom: 40,
          marginTop: 10,
          
        }}>

          <CheckBox
           text= 'Hide Password' //yazi
           status = {isShowPassword}
           onPress = {() => this.setState({isShowPassword: !isShowPassword })  }
           
          />
           
           <TouchableOpacity
           onPress = {() =>  
            console.log('forgot password: ' )
         }
           >
             
             <Text> Forgot Password</Text>
           </TouchableOpacity>
        

        </View>
        
        
        <Button
        text = {'login'}
        onPress = {() => 
            console.log('state degerleri: ', username, ' ', password)
        }
          />

         <View style = {{flexDirection:'row',marginTop:15, alignItems:'center' }}>
              
              <View style = {styles.line}></View>
              <Text style = {{fontSize: 20, color:'gray', margin: 20}}>OR</Text>
              <View style = {styles.line}></View>

         </View>
        
  
        </View>

        

      {/* <View style={[styles.ortala, {  }]}> */}
          

          <TouchableOpacity 
          style = {[styles.ortala,{flex: 1.5,flexDirection:'row'}]}
          onPress = {()=> console.log('facebook')}
          >
            <Image
             source = {require('./src/image/facebook.png')}
             style = {styles.facebook}
            />
            <Text style = {styles.blueText}>  Login with Facebook</Text>
          </TouchableOpacity>
        {/* </View> */}


        {/* Bottom */}
        <View style={[styles.ortala, { flex: 1 , borderTopWidth : 1 , borderTopColor: 'gray'}]}>
          <Text style={styles.mainText}  >Don't Have an account?
              
              <Text 
              onPress = {() => console.log('hello')}
              style = {styles.blueText}
              >Sign up</Text>
            

          </Text>
        </View>

        </ScrollView>

      </SafeAreaView>
    )
  }
}


const styles = {
 
  mainText: {color: 'gray'},
  ortala: { alignItems: 'center', justifyContent: 'center', },
  blueText: { color: '#4495cb', fontWeight: 'bold' },
  facebook: {width: 30 , height: 30,},
  logo: { width: 200 , height: 100,},
  line: { width: '35%', height: 0.5, backgroundColor:'gray'  }
  
  

}
