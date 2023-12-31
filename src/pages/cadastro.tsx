import { 
    Box, 
    Button, 
    Flex, 
    FormControl, 
    FormLabel, 
    Heading, 
    Input, 
    Text, 
    Textarea
  } from '@chakra-ui/react'
import Head from 'next/head'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

interface IUserFormData {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    phone: string;
    description: string;
}

  
interface ICadastroProps {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    phone: string;
    description: string;
    onSubmit: () => void;
    handleSubmit: () => void;
}

const schema = yup.object({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    address: yup.string().required('Address is required'),
    phone: yup.string().required('Phone is required'),
    description: yup.string().required('Description is required'),
})
  
const Cadastro: React.FC<ICadastroProps> = ()=> {

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data: IUserFormData) => console.log(data);
    function setErros(error: any) {
        console.log(error)
    }

    return (
    <>
    <Head>
        <title>Form chakra</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
        <Flex
        minHeight="100vh"
        width="full"
        align="center"
        justifyContent="center"
        backgroundColor="gray.900"
        >
        <Box
            px={12}
            py={12}
            width="full"
            maxWidth="450px"
            textAlign="center"
            boxShadow='lg'
            background='gray.700'
            borderRadius='6px'
        >
            <Heading color="white">
            <Text color='gray.200' fontSize='2xl'>Registration Form</Text>
            </Heading>
            <Box>
            <form autoComplete='off' onSubmit={handleSubmit(onSubmit, setErros)}>
            <Flex justify='space-between'>
                <FormControl marginTop='15px' width='49%'>
                <FormLabel color='gray.200'>First name</FormLabel>
                <Input border='none' outline='none' bgColor='gray.900' focusBorderColor='gray.600' color='gray.200' placeholder='first name' type='text' 
                    {...register('firstName')}
                />
                </FormControl>
                <FormControl isRequired marginTop='15px' width='49%'>
                <FormLabel color='gray.200'>Last name</FormLabel>
                <Input border='none' outline='none' bgColor='gray.900' focusBorderColor='gray.600' 
                color='gray.200' placeholder='last name' type='text'
                    {...register('lastName')}
                />
                </FormControl>
            </Flex>
            <FormControl isRequired marginTop='15px'>
                <FormLabel color='gray.200'>Your email</FormLabel>
                <Input border='none' outline='none' bgColor='gray.900'
                focusBorderColor='gray.600' color='gray.200' placeholder='email' type='email'  
                {...register('email')}

                />
            </FormControl>
            <Flex justify='space-between'>
                <FormControl isRequired marginTop='15px' width='49%'>
                <FormLabel color='gray.200'>Your address</FormLabel>
                <Input border='none' outline='none' bgColor='gray.900' 
                focusBorderColor='gray.600' color='gray.200' placeholder='adress' type='text'
                {...register('address')}

                />
                </FormControl>
                <FormControl isRequired marginTop='15px' width='49%'>
                <FormLabel color='gray.200'>Your phone</FormLabel>
                <Input border='none' outline='none' 
                bgColor='gray.900' focusBorderColor='gray.600' color='gray.200' placeholder='phone' type='text'  
                {...register('phone')}
                />
            </FormControl>
            </Flex>
            <FormControl isRequired marginTop='15px'>
                <FormLabel color='gray.200'>Your descript message</FormLabel>
                <Textarea border='none' 
                
                outline='none' bgColor='gray.900' focusBorderColor='gray.600' color='gray.200' placeholder='message' resize='none' 
                {...register('description')}
                />
            </FormControl>
            <Button type='submit' width='full' bgColor='green.200' mt={4} color='gray.400' _hover={{
                color: 'black',
            }}>Register</Button>
            </form>
            </Box>
        </Box>
        </Flex>
    </main>
    </>
)
}

export default Cadastro;