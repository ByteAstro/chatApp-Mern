import React, { useState } from 'react'
import { FormControl, FormLabel, VStack, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'

const Login = () => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submitHandler = () => { }

    return (<VStack spacing='5px'>
        <FormControl id='email' isRequired>
            <FormLabel>Email</FormLabel>
            <Input
                placeholder='Enter Your Email'
                onChange={(e) => { setEmail(e.target.value) }}
            />
        </FormControl>
        <FormControl id='password' isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
                <Input
                    type={show ? "text" : "password"}
                    placeholder='Enter Your Password'
                    onChange={(e) => { setPassword(e.target.value) }}
                />
                <InputRightElement>
                    <Button h='1.75rem' size="sm" onClick={() => setShow(!show)}>
                        {show ? "Hide" : "Show"}
                    </Button>
                </InputRightElement>
            </InputGroup>
        </FormControl>
        <Button
            colorScheme='blue'
            color=''
            width='100%'
            style={{ marginTop: 15 }}
            onClick={submitHandler}
        >Log In</Button>
    </VStack>
    )
}

export default Login