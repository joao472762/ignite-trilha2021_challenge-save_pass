import {HStack, VStack, Text,IconButton} from 'native-base'
import {Feather} from '@expo/vector-icons'
import { useState } from 'react'

interface PasswordCardProps {
    serviceName: string,
    password: string,
    updateUserAccountVisibleCounter: (action: 'increase' | 'decrease') => void
}

export function PasswordCard ({password,serviceName}: PasswordCardProps) {
    const [passwordIsVisible, setPasswordIsVisible] = useState(false)
    return(
        <HStack bg={'gray.200'} padding={14} rounded={'sm'} marginTop={2}>
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
                    {serviceName}
                </Text>
                <Text
                     fontWeight={`${passwordIsVisible ? 'bold' : 'medium'}`}
                     color={`${passwordIsVisible ? 'blue.500' : 'gray.400'}`}
                > {passwordIsVisible ? password : 'Sua senha'}</Text>
            </VStack>
            
        </HStack>
    )
}