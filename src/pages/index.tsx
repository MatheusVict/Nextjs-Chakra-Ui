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

interface IHomeProps {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  phone: string;
  description: string;
}

const Home: React.FC<IHomeProps> = ()=> {

  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [address, setAddress] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [description, setDescription] = useState<string>('')



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = {
      firstName,
      lastName,
      email,
      address,
      phone,
      description
    }
    console.log(data)
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
              <form autoComplete='off' onSubmit={handleSubmit}>
              <Flex justify='space-between'>
                <FormControl isRequired marginTop='15px' width='49%'>
                  <FormLabel color='gray.200'>First name</FormLabel>
                  <Input border='none' outline='none' bgColor='gray.900' focusBorderColor='gray.600' color='gray.200' placeholder='first name' type='text' name='firstName'
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </FormControl>
                <FormControl isRequired marginTop='15px' width='49%'>
                  <FormLabel color='gray.200'>Last name</FormLabel>
                  <Input border='none' outline='none' bgColor='gray.900' focusBorderColor='gray.600' 
                  color='gray.200' placeholder='last name' type='text' name='lastName' 
                  onChange={(e) => setLastName(e.target.value)} 
                  />
                </FormControl>
              </Flex>
              <FormControl isRequired marginTop='15px'>
                <FormLabel color='gray.200'>Your email</FormLabel>
                <Input border='none' outline='none' bgColor='gray.900'
                onChange={(e) => setEmail(e.target.value)}
                focusBorderColor='gray.600' color='gray.200' placeholder='email' type='email'  name='email'/>
              </FormControl>
              <Flex justify='space-between'>
                <FormControl isRequired marginTop='15px' width='49%'>
                  <FormLabel color='gray.200'>Your address</FormLabel>
                  <Input border='none' outline='none' bgColor='gray.900' 
                  onChange={(e) => setAddress(e.target.value)}
                  focusBorderColor='gray.600' color='gray.200' placeholder='adress' type='text' name='address'/>
                </FormControl>
                <FormControl isRequired marginTop='15px' width='49%'>
                  <FormLabel color='gray.200'>Your phone</FormLabel>
                  <Input border='none' outline='none' 
                  onChange={(e) => setPhone(e.target.value)}
                  bgColor='gray.900' focusBorderColor='gray.600' color='gray.200' placeholder='phone' type='text'  name='phone'/>
              </FormControl>
              </Flex>
              <FormControl isRequired marginTop='15px'>
                <FormLabel color='gray.200'>Your descript message</FormLabel>
                <Textarea border='none' 
                onChange={(e) => setDescription(e.target.value)}
                outline='none' bgColor='gray.900' focusBorderColor='gray.600' color='gray.200' placeholder='message' resize='none' name='description'/>
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

export default Home;