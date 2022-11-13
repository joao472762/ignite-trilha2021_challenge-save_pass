import {HStack, VStack, Text,IconButton} from 'native-base'
import {Feather} from '@expo/vector-icons'
import { useState } from 'react'


export function PasswordCard () {
    const [passwordIsVisible, setPasswordIsVisible] = useState(false)
    return(
        <HStack bg={'gray.200'} padding={14} rounded={'sm'}>
            <IconButton
                
                _icon={{
                    as: Feather, 
                    name: `${passwordIsVisible ? 'eye' : 'eye-off'}`,
                    color: `${passwordIsVisible ? 'blue.500': 'gray.400'}`,
                    size: 'lg'
                }}
                _pressed={{
                    background: 'transparent'
                }}
                onPress={() => setPasswordIsVisible(!passwordIsVisible)}
            />
            <VStack paddingLeft={4}>
                <Text
                    fontSize={'md'}
                    fontWeight={`${passwordIsVisible ? 'medium' : 'bold'}`}
                    color={`${passwordIsVisible ? 'gray.400' : 'gray.700'}`}
                >
                    Plataforma Joe Doe
                </Text>
                <Text
                     fontWeight={`${passwordIsVisible ? 'bold' : 'medium'}`}
                     color={`${passwordIsVisible ? 'blue.500' : 'gray.400'}`}
                > sua senha</Text>
            </VStack>
            
        </HStack>
    )
}