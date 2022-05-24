import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, Flex, FormLabel, useTheme } from '@chakra-ui/react';
import { serviceGetAllClients, servicePostClient } from '../../../service'
import { ISignup } from '../../../types';
import { SignUpUserFormInput, SignUpUserFormTitle } from './SignUpUserFormComponents';
import InputMask from "react-input-mask";

const validationSchema = yup.object({
  nameComplet: yup
    .string()
    .min(2, 'Nome muito curto')
    .required('Obrigatório'),
  nameUser: yup
    .string()
    .min(2, 'Nome muito curto')
    .required('Obrigatório'),
  email: yup.string().email("Email inválido").required('Obrigatório').matches(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i),
  phones: yup.string().required('Obrigatório'),
  dateBirth: yup.date().required('Obrigatório'),
  password: yup.string().required('Obrigatório'),
  confirmPassword: yup.string().required('Obrigatório'),
})

const SignUpUserForm: React.FC = () => {
  const theme = useTheme()
  const [payload, setPayload] = useState<ISignup>()
  const [isValid, setIsValid] = React.useState<boolean>(false);

  const formikUserData = useFormik({
    initialValues: {
      email: '',
      nameUser: '',
      nameComplet: '',
      phones: '',
      dateBirth: new Date(),
      password: '',
      confirmPassword: ''
    },
    validationSchema: validationSchema,
    onSubmit: async () => {
      await servicePostClient(payload)
    },
  });

  const handleValidation = async () => {
    if (formikUserData.values.password === formikUserData.values.confirmPassword)
      setIsValid(await validationSchema.isValid(formikUserData.values))
    else
      console.log('senhas diferentes')
  }

  useEffect(() => {
    handleValidation()

    isValid &&
      setPayload({
        email: formikUserData.values.email,
        nameUser: formikUserData.values.nameUser,
        nameComplet: formikUserData.values.nameComplet,
        phones: [formikUserData.values.phones],
        dateBirth: formikUserData.values.dateBirth,
        password: formikUserData.values.password,
      })
  }, [formikUserData.values])

  return (
    <Flex align="center" justify="center" direction="column" mt='1em'>
      <SignUpUserFormTitle>USUÁRIO</SignUpUserFormTitle>
      <form onSubmit={formikUserData.handleSubmit}>
        <Flex justify='space-between'>
          <Flex direction="column" mr='2em'>
            <FormLabel>Nome</FormLabel>
            <SignUpUserFormInput
              id='nameComplet'
              name="nameComplet"
              color={formikUserData.errors.nameComplet ? theme.styles.colors.red : theme.styles.colors.green}
              onChange={formikUserData.handleChange}
              value={formikUserData.values.nameComplet}
              left
            />
            <FormLabel>Nome de usuário</FormLabel>
            <SignUpUserFormInput
              id='nameUser'
              name="nameUser"
              color={formikUserData.errors.nameUser ? theme.styles.colors.red : theme.styles.colors.green}
              onChange={formikUserData.handleChange}
              value={formikUserData.values.nameUser}
              left
            />
            <FormLabel>E-mail</FormLabel>
            <SignUpUserFormInput
              id='email'
              name="email"
              color={formikUserData.errors.email ? theme.styles.colors.red : theme.styles.colors.green}
              onChange={formikUserData.handleChange}
              value={formikUserData.values.email}
              left
            />
            <FormLabel>Contato</FormLabel>
            <SignUpUserFormInput
              id='phones'
              name="phones"
              color={formikUserData.errors.phones ? theme.styles.colors.red : theme.styles.colors.green}
              onChange={formikUserData.handleChange}
              value={formikUserData.values.phones}
              as={InputMask}
              mask="(99) 99999-9999"
              maskChar={null}
            />
          </Flex>

          <Flex direction="column">
            <FormLabel>Data de nascimento</FormLabel>
            <SignUpUserFormInput
              id='dateBirth'
              name="dateBirth"
              color={formikUserData.errors.dateBirth ? theme.styles.colors.red : theme.styles.colors.green}
              onChange={formikUserData.handleChange}
              value={''}
            />
            <FormLabel>Senha</FormLabel>
            <SignUpUserFormInput
              id='password'
              name="password"
              type='password'
              color={formikUserData.errors.password ? theme.styles.colors.red : theme.styles.colors.green}
              onChange={formikUserData.handleChange}
              value={formikUserData.values.password}
            />
            <FormLabel>Confirmar senha</FormLabel>
            <SignUpUserFormInput
              id='confirmPassword'
              name="confirmPassword"
              type='password'
              color={formikUserData.errors.confirmPassword ? theme.styles.colors.red : theme.styles.colors.green}
              onChange={formikUserData.handleChange}
              value={formikUserData.values.confirmPassword}
            />
            <Button
              type='submit'
              bg={theme.styles.colors.primary}
              color={theme.styles.colors.secondary}
              mt='1em'
              mb='1em'
              _hover={{ backgroundColor: theme.styles.colors.primary }}
            >
              Enviar
            </Button>
          </Flex>
        </Flex>
      </form>
    </Flex>
  );
}

export default SignUpUserForm;