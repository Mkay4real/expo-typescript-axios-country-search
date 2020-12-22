import React, { useState } from 'react';
import {  View, ActivityIndicator, Platform } from 'react-native';



export default () => (
  <View style={{flex:1, position:"absolute", backgroundColor:'#fff', opacity:0.5, left:0, bottom:0, top:0, right:0, zIndex:1, justifyContent: 'center'}}>
    <ActivityIndicator
     size={"large"}
     color={Platform.OS==="ios"?"blue": "purple"}/>
  </View>
)