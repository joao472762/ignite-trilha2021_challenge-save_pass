import {HStack, Input,IconButton, Icon} from 'native-base'
import {Feather} from '@expo/vector-icons'



export function Search(){
    return(
        <HStack overflow={'hidden'} rounded='lg'>
            <Input 
                rounded={0}
                height={14}
                flex={1} bgColor='gray.200'
             

            />
            <IconButton
                rounded={0}
                width={14}
                bg={'yellow.500'}
                _icon={{as: Feather,name:'search', color:'gray.700', size:'lg' }}
                _pressed={{
                    
                    background: 'yellow.400'
                }}
                
                
            />
           
        </HStack>
    )
}