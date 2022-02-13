import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import StackNavigation from "./Screens/StackNavigation";

const App =() => {
   
 
        return(
            <NavigationContainer>
                <StackNavigation/>
            </NavigationContainer>
        );
    

}

export default App;