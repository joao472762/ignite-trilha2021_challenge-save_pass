import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Home } from '../screens/Home'
import { RegisterLogin } from '../screens/RegisterLogin'

export type stackScreensProps = {
    Home: undefined,
    RegisterLogin: undefined
}

const {Navigator, Screen} = createNativeStackNavigator<stackScreensProps>()


export function StackRoutes(){
    return (
        <Navigator screenOptions={{headerShown:false}}>
            <Screen name='Home' component={Home}/>
            <Screen name='RegisterLogin' component={RegisterLogin}/>
        </Navigator>
    )
}