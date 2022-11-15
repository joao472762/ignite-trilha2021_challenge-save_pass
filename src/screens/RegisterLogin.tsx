import * as z from 'zod'
import { useState } from 'react'
import uuid from 'react-native-uuid';
import { useForm } from 'react-hook-form'
import {Feather} from '@expo/vector-icons'
import {zodResolver} from '@hookform/resolvers/zod'
import {VStack, Button, IconButton,Text, useToast,} from 'native-base'
import { TouchableWithoutFeedback, Keyboard,} from 'react-native'

import { Header } from '../components/Header'
import { Input } from '../components/Form/Input'
import { useUserAcount } from '../hooks/userAcount'

const  newAcountRegisterFormSchema = z.object({
    serviceName: z.string().trim().min(1,'digite o nome do serviço'),
    password: z.string().min(4,"á senha deve ter mais de 4 caracters"),
    profile: z.string().min(1,'este campo é obrigatório')
})

export type newAcountRegisterFormData = z.infer<typeof newAcountRegisterFormSchema>


export function RegisterLogin(){
    const [passwordIsVisible, setPassWordIsVisible] = useState(false)
    const {addNewAccount} = useUserAcount()
    const [isLoading, setIsLoading] = useState(false)

    const toast = useToast()

    const {control, handleSubmit,reset,formState: {errors, isSubmitting}} = useForm<newAcountRegisterFormData>({
        resolver: zodResolver(newAcountRegisterFormSchema),
        defaultValues: {
            serviceName: '',
            password: '',
            profile: ''
        }
    })

    function handleCreateNewAcountRegister(newAccount:newAcountRegisterFormData ){
        try {
            setIsLoading(true)

            addNewAccount({
                id: uuid.v4() as string,
                password: newAccount.password,
                profile: newAccount.profile,
                serviceName: newAccount.serviceName,
            }) 

            toast.show({
                placement: 'top',
                backgroundColor: 'green.500',
                title: 'conta registada'
                
            })

            reset()
        } catch (error) {
            toast.show({
                placement: 'top',
                backgroundColor: 'danger.500',
                title: 'não possível registra a senha'
                
            })
        }

        finally {
            setIsLoading(false)
        }
        
    }

    function handleChangePasswordVisibility(){
        passwordIsVisible
        ? setPassWordIsVisible(false)
        : setPassWordIsVisible(true)
    }

    const ButtonIsDisabled = isSubmitting || isLoading

    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

            <VStack flex={1} bgColor='gray.300'>

                <Header title='Cadastro de Senha'/>

                <VStack paddingX={6} marginTop={8}>
                    <Input.Root>
                        <Input.Label  title='Nome do serviço'/>
                        <Input.Input
                            control={control}
                            name={'serviceName'}
                            placeholder={'Nome do Serviço'}
                            error= {errors.serviceName && errors.serviceName.message}
                        />
                    </Input.Root>

                    <Input.Root marginTop={2}  >
                        <Input.Label title='E-mail ou usuário'/>
                        <Input.Input
                            control={control}
                            name={'profile'}
                            placeholder={'email'}
                            error = { errors.profile && errors.profile.message}
                        />
                    </Input.Root>

                    <Input.Root marginTop={2}  >
                        <Input.Label title='Senha'/>

                        <Input.Input
                            type={passwordIsVisible ? 'text' : 'password'}
                            control={control}
                            name={'password'}
                            placeholder={'SuaSenha'}
                            error = {errors.password && errors.password.message}
                    
                            InputRightElement = {
                                <IconButton
                                    _icon={
                                        {
                                            as: Feather,
                                            name: `${passwordIsVisible ? 'eye' : 'eye-off'}`,
                                            color: `${passwordIsVisible ? 'blue.500': 'gray.400'}`,
                                            size: 'lg'
                                        }
                                        
                                    }
                                    onPress = {handleChangePasswordVisibility}
                                />
                            }
                        />
                    </Input.Root>

                    <Button
                        backgroundColor={'yellow.500'}
                        padding= {4}
                        marginTop={4}
                        isLoading={ButtonIsDisabled}

                        onPress={handleSubmit(handleCreateNewAcountRegister)}
                    >
                        <Text fontSize={'lg'} color='gray.900' fontWeight='bold'>Salvar</Text>
                    </Button>
                
                </VStack>

            </VStack>
        </TouchableWithoutFeedback>

   
    )
}