import React from "react";
import {StyleSheet, Text, Linking, Button, ScrollView, View, 
    Image, TouchableOpacity,} from "react-native";
import AccountSetting from "./AccountSetting";
import { useNavigation, useRoute } from "@react-navigation/native";
import DonationKnowledge from "./DonationKnowledge";
import RequestKnowledge from "./RequestKnowledge";

export default function BorrowerPage() {
  const navigation = useNavigation();
  const route = useRoute();

return (

<ScrollView style={{paddingTop: 50, backgroundColor: "#fff",}}>
    <View style={{paddingHorizontal: 20}}>
        
        {/* Header */}
        <View style={{width: "100%", justifyContent: "space-between", flexDirection: "row"}}>
            <TouchableOpacity>
                <Image style={{ width: 30, height: 30 }}
                source={require("../assets/ProfileIcon.png")}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image style={{ width: 27, height: 27 }}
                source={require("../assets/NotifIcon.png")}/>
            </TouchableOpacity>
        </View>

        <View style={{width:"100%", height: 30}}/>

        {/* Balance */}
        <View style={{width: "100%", height: 170, padding: 15, justifyContent: "center",
                      borderRadius: 5, borderWidth: 0.2}}>
            
            {/* For separation */}
            <View style={{width: "100%", justifyContent: "space-between", flexDirection: "row"}}>
                <View style={{width: "90%", height: 90}}>
                <Text style={[styles.font25, styles.bold]}>Php 7,107</Text>
                <Text style={[styles.font15, styles.gray]}>Account Balance</Text>
                </View>
                <View style={{width: "10%", height: 90}}>
                    <Image style={{ width: 30, height: 30}}
                    source={require("../assets/Eye.png")}/>
                </View>
            </View>

            <View style={{width: "100%", flexDirection: "row"}}>
                <View style={{height: 35, width: 90, borderRadius: 15, alignItems: 'center',
                              justifyContent: 'center',backgroundColor: 'black', marginRight: 10}}>
                <Text style={{color: '#fff'}}>Cash in</Text>
                </View>
                <View style={{height: 35, width: 90, borderRadius: 15, alignItems: 'center',
                              justifyContent: 'center',backgroundColor: '#f8f8f8', marginRight: 10}}>
                <Text style={{color: '#969799'}}>Pay Loan</Text>
                </View>
            </View>

        </View> 
        
        <View style={{width:"100%", height: 20}}/>

        {/* Knowledge Base */}
        <View style={{height: 100}}>
        <ScrollView horizontal={true}> 
            <View style={{width: 250, height: 100, marginRight: 15, padding: 15,
                  backgroundColor: "#F8FCF8", borderWidth: 0.2}}>
                <Text>Educational Content</Text>
            </View>    
            
            <View style={{width: 250, height: 100, marginRight: 10, padding: 15,
                  backgroundColor: "#F8FCF8", borderWidth: 0.2}}>
            </View> 
        </ScrollView>
        </View>
        
        <View style={{width:"100%", height: 20}}/>

        {/* Credit Score */}
        <View style={{width: "100%", height: 250, borderRadius: 10, borderWidth: 0.2, padding: 15}}>
            <View style={{justifyContent: "space-between",flexDirection: "row", paddingTop: 10}}>
                <View style={{width: "60%", height: 40, justifyContent: "center"}}>
                    <Text style={[styles.font20,styles.bold]}>Credit Score</Text>
                </View> 

                <View style={{width: "40%", height: 40, backgroundColor: '#cedff2', borderRadius: 20,
                            alignItems: "center",justifyContent: "center"}}>
                    <TouchableOpacity>
                    <Text style={[styles.font13, {color: '#004479'}]}>Learn more</Text>
                    </TouchableOpacity>
                </View> 
            </View>

            <View style={{width:"100%", height: 40}}/>

            <View style={styles.centerall}>
                <Image style={{ width: 120, height: 120}}
                    source={require("../assets/CreditScoreGauge.png")}/>
            </View>

        </View>


          

        <View style={{width:"100%", height: 70}}/>
    </View>
</ScrollView>);
}

const styles = StyleSheet.create({
    centerall:{justifyContent: "center",alignItems: "center",},

    profcircle:{
        width: 50, 
        height: 50,
        borderRadius: 50/2,
        backgroundColor:"#969799",
    },

    progcircle:{
        width: 60, 
        height: 60,
        borderRadius: 60/2,
        backgroundColor:"#969799",
    },

    oxblue:{color: "#002147",},
    white:{color: "#fff",},
    safetyblue:{color: "#004479",},
    maccheese:{color: "#FFBA6C",},
    lightorange:{color: "#FFDEB8",},    
    gray: {color:"#969799"},

    font5:{fontSize: 5,}, font10:{fontSize: 10,}, font13:{fontSize: 13,},
    font15:{fontSize: 15,}, font20:{fontSize: 20,}, font25:{fontSize: 25,},
    font30:{fontSize: 30,}, bold:{fontWeight: "bold",},
});