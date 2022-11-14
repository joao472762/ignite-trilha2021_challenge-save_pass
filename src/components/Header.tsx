import {VStack, IconButton, Heading, useTheme} from 'native-base'
import {SafeAreaView} from 'react-native-safe-area-context'
import {Feather} from '@expo/vector-icons'

interface HeaderProps {
    title: string
}
export function Header({title}: HeaderProps){
    const {colors} = useTheme()
    return (
        <SafeAreaView style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 24,
            backgroundColor: colors.white

        }}>
            <IconButton
                width={10}
                background='transparent'
                _icon={{
                    as: Feather,
                    color: 'blue.500',
                    name:'chevron-left',
                    size:'2xl'
                }}
                _pressed={{
                    background: 'gray.100',
                    color: 'blue.700'
                }}
            />
            <VStack flex={1} alignItems='center'  >
                <Heading
                    marginLeft={-10}
                    color={'gray.700'}
                    fontWeight={'medium'}
                >
                    {title}
                </Heading>
            </VStack>
        </SafeAreaView>
    )
}