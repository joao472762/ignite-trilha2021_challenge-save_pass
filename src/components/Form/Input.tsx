import { ReactNode } from 'react'
import {Control,Controller} from 'react-hook-form'
import { newAcountRegisterFormData } from '../../screens/RegisterLogin'
import {Input as NativeBaseInput, IInputProps, VStack, Text, ITextProps, IBoxProps,Box, useTheme} from 'native-base'


interface InputRootProps extends IBoxProps {
    children: ReactNode,
    isChild?: boolean,
    
}

function InputRoot({children,isChild,...rest}: InputRootProps) {  
    return(
        <Box {...rest}>
            {children}
        </Box>
    )
}

interface InputLabelProps extends ITextProps {
    title: string
}

function InputLabel({title, ...rest}: InputLabelProps){
    return(
        <Text {...rest} color={'gray.500'} fontSize='lg' marginBottom={1}>
            {title}
        </Text>
    )
}

interface InputProps extends IInputProps{
    control: Control<newAcountRegisterFormData>,
    name: 'serviceName' | 'password' | 'profile',
    error ?: string | undefined

}

function InputInput ({control,name,error,...rest}: InputProps){
    const {colors}  = useTheme()
    return (
        <VStack>
            <Controller
                control={control}
                name={name}
                render={({field:{onChange,value}}) => (
                    <NativeBaseInput
                        backgroundColor={'gray.100'}
                        rounded={'md'}
                        padding={3}
                        onChangeText={onChange}
                        value = {value}
                        fontSize = {'md'}
                        color = 'gray.900'
                        placeholderTextColor = {colors.gray['500']}
                        _focus ={{
                            borderColor: 'blue.500'
                        }}
                        {...rest}
                    />
                )}
            />
            {error && <Text marginTop={2} color={'danger.500'}>{error}</Text> }
            
        </VStack>
    )
}

export const Input = {
    Root: InputRoot,
    Label: InputLabel,
    Input: InputInput

}

