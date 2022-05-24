import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { Button, Flex, FormControl, FormLabel, Input, theme, useTheme } from '@chakra-ui/react';
import { serviceGetAllClients, servicePostClient } from '../../../service'
import { ISignup } from '../../../types';
import { useQuery } from 'react-query';

const SignUpForm: React.FC = () => {
  const theme = useTheme()
  const [payload, setPayload] = useState<ISignup>()

  const formikUserData = useFormik({
    initialValues: {
      email: '',
      nameUser: '',
      nameComplet: '',
      description: '',
      phones: '',
      dateBirth: new Date(),
      password: ''
    },
    onSubmit: () => {
      servicePostClient(payload)
    },
  });

  useEffect(() => {
    setPayload({
      email: formikUserData.values.email,
      nameUser: formikUserData.values.nameUser,
      nameComplet: formikUserData.values.nameComplet,
      description: formikUserData.values.description,
      phones: [formikUserData.values.phones],
      address: {
        street: 'string',
        district: 'string',
        city: 'string',
        state: 'string',
        zipCode: 'string',
        number: 'string',
        complement: 'string',
        country: 'string'
      },
      dateBirth: formikUserData.values.dateBirth,
      password: formikUserData.values.password,
    })
  }, [formikUserData.values])

  return (
    <Flex align="center" justify="center">
      <form onSubmit={formikUserData.handleSubmit}>
        <FormControl isRequired>
          <FormLabel>E-mail</FormLabel>
          <Input
            id='email'
            name='email'
            onChange={formikUserData.handleChange}
            value={formikUserData.values.email}
            bg='#fff'
            border='1px solid'
            borderColor={theme.styles.colors.primary}
          />
          <FormLabel>Nome de usuário</FormLabel>
          <Input
            id='nameUser'
            name='nameUser'
            onChange={formikUserData.handleChange}
            value={formikUserData.values.nameUser}
            bg='#fff'
            border='1px solid'
            borderColor={theme.styles.colors.primary}
          />
          <FormLabel>Nome Completo</FormLabel>
          <Input
            id='nameComplet'
            name='nameComplet'
            onChange={formikUserData.handleChange}
            value={formikUserData.values.nameComplet}
            bg='#fff'
            border='1px solid'
            borderColor={theme.styles.colors.primary}
          />
          <FormLabel>Descrição</FormLabel>
          <Input
            id='description'
            name='description'
            onChange={formikUserData.handleChange}
            value={formikUserData.values.description}
            bg='#fff'
            border='1px solid'
            borderColor={theme.styles.colors.primary}
          />
          <FormLabel>Telefone</FormLabel>
          <Input
            id='phones'
            name='phones'
            onChange={formikUserData.handleChange}
            value={formikUserData.values.phones}
            bg='#fff'
            border='1px solid'
            borderColor={theme.styles.colors.primary}
          />
          <FormLabel>Senha</FormLabel>
          <Input
            id='password'
            name='password'
            onChange={formikUserData.handleChange}
            value={formikUserData.values.password}
            bg='#fff'
            border='1px solid'
            borderColor={theme.styles.colors.primary}
          />
          <Button
            type='submit'
            isFullWidth
            bg={theme.styles.colors.primary}
            color={theme.styles.colors.secondary}
            mt='1em'
            mb='1em'
            _hover={{ backgroundColor: theme.styles.colors.primary }}
          >
            Entrar
          </Button>
        </FormControl>
      </form>
    </Flex>
  );
}

export default SignUpForm;