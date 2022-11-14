import {VStack,Stack, HStack, Box,useTheme,Text,Heading, IconButton, Icon} from 'native-base'
import {Feather} from '@expo/vector-icons'
import { Avatar } from '../../../components/Avatar'
import {SafeAreaView} from 'react-native-safe-area-context'
export function Header(){
    const {colors}  = useTheme()
    return(
        <SafeAreaView style={{
            backgroundColor: colors.blue['500'],
            paddingTop: 20,
            paddingHorizontal: 24, 
            height: 200}}
        >
            <HStack alignItems={'center'}>
                <Avatar />
                <VStack flex={1} paddingX={5}>
                    <HStack >
                        <Heading  color='gray.100' fontWeight={'normal'}>Olá, </Heading>
                        <Heading color='gray.100' fontWeight={'medium'}>João Souza</Heading>
                    </HStack>
                    <Text color='gray.300' fontWeight={'normal'}>Sinta-se seguro aqui</Text>
                </VStack>

                <IconButton

                    borderColor={'gray.200'}
                    borderWidth={1}
                    height={12}
                    width={12}
                    _icon={{as: Feather, name:'plus', color: 'white'}}
                    _pressed={{
                        borderColor: 'red.100',
                        opacity: 0.7,
                        
                    }}
                />

            </HStack>

        </SafeAreaView>
            
    )
}