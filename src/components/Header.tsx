import {VStack,Stack, HStack, Box,useTheme,Text,Heading} from 'native-base'
import { Avatar } from './Avatar'
import {SafeAreaView} from 'react-native-safe-area-context'
export function Header(){
    const {colors}  = useTheme()
    return(
        <SafeAreaView style={{backgroundColor: colors.blue['500'],flexDirection:'row'}}>
            <Avatar/>
            <VStack>
                <HStack>
                    <Heading>Olá</Heading>
                    <Heading>João Souza</Heading>
                
                </HStack>
            </VStack>

        </SafeAreaView>
            
    )
}