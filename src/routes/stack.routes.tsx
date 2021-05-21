import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import colors from "../styles/colors";
import { Welcome } from "../pages/Welcome";
import { Register } from "../pages/Register";
import { CompleteRegister } from "../pages/CompleteRegister";
import { BottomNavigationRoutes } from "./bottomNav.routes";

const StackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <StackRoutes.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: colors.white,
      },
    }}
  >
    <StackRoutes.Screen name="Welcome" component={Welcome} />
    <StackRoutes.Screen name="Register" component={Register} />
    <StackRoutes.Screen name="CompleteRegister" component={CompleteRegister} />
    <StackRoutes.Screen name="Home" component={BottomNavigationRoutes} />
  </StackRoutes.Navigator>
);

export default AppRoutes;
