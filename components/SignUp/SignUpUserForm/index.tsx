import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, Flex, FormErrorMessage, FormLabel, useTheme, Text } from '@chakra-ui/react';
import { serviceGetAllClients, servicePostClient } from '../../../service'
import { ISignup } from '../../../types';
import { SignUpUserFormInput, SignUpUserFormTitle } from './SignUpUserFormComponents';
import InputMask from "react-input-mask";
import moment from 'moment';
import Message from '../../Message';


const validationSchema = yup.object({
  nameComplet: yup
    .string()
    .min(3, 'Nome muito curto')
    .required('Este campo é obrigatório.'),
  nameUser: yup
    .string()
    .min(3, 'Nome muito curto')
    .required('Este campo é obrigatório.'),
  email: yup.string().email("Email inválido").required('Este campo é obrigatório.').matches(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i),
  phones: yup.string().required('Este campo é obrigatório.'),
  dateBirth: yup.date().required('Este campo é obrigatório.'),
  password: yup.string().required('Este campo é obrigatório.').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
  confirmPassword: yup.string().required('Este campo é obrigatório.').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
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
      dateBirth: moment(new Date()).toDate(),
      password: '',
      confirmPassword: ''
    },
    validationSchema: validationSchema,
    onSubmit: async () => {
      // await servicePostClient(payload)
      console.log(formikUserData.values)
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
    <Flex align="center" justify="center" direction="column" mt='1.3em'>
      <SignUpUserFormTitle>USUÁRIO</SignUpUserFormTitle>
      <form onSubmit={formikUserData.handleSubmit}>
        <Flex justify='space-between' mt={'100px'}>
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
            {formikUserData.errors.nameComplet && <Message>{formikUserData.errors.nameComplet}</Message>}
            <FormLabel>Nome de usuário</FormLabel>
            <SignUpUserFormInput
              id='nameUser'
              name="nameUser"
              color={formikUserData.errors.nameUser ? theme.styles.colors.red : theme.styles.colors.green}
              onChange={formikUserData.handleChange}
              value={formikUserData.values.nameUser}
              left
            />
            {formikUserData.errors.nameUser && <Message>{formikUserData.errors.nameUser}</Message>}
            <FormLabel>E-mail</FormLabel>
            <SignUpUserFormInput
              id='email'
              name="email"
              color={formikUserData.errors.email ? theme.styles.colors.red : theme.styles.colors.green}
              onChange={formikUserData.handleChange}
              value={formikUserData.values.email}
              left
            />
            {formikUserData.errors.email && <Message>{formikUserData.errors.email}</Message>}
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
            {formikUserData.errors.phones && <Message>{formikUserData.errors.phones}</Message>}
          </Flex>

          <Flex direction="column">
            <FormLabel>Data de nascimento</FormLabel>
            <SignUpUserFormInput
              id='dateBirth'
              name="dateBirth"
              color={formikUserData.errors.dateBirth ? theme.styles.colors.red : theme.styles.colors.green}
              onChange={formikUserData.handleChange}
              value={moment(formikUserData.values.dateBirth).format('DD/MM/YYYY')}
            />
            {/* {formikUserData.errors.dateBirth && <Message>{formikUserData.errors.dateBirth}</Message>} */}
            <FormLabel>Senha</FormLabel>
            <SignUpUserFormInput
              id='password'
              name="password"
              type='password'
              color={formikUserData.errors.password ? theme.styles.colors.red : theme.styles.colors.green}
              onChange={formikUserData.handleChange}
              value={formikUserData.values.password}
            />
            {formikUserData.errors.password && <Message>{formikUserData.errors.password}</Message>}
            <FormLabel>Confirmar senha</FormLabel>
            <SignUpUserFormInput
              id='confirmPassword'
              name="confirmPassword"
              type='password'
              color={formikUserData.errors.confirmPassword ? theme.styles.colors.red : theme.styles.colors.green}
              onChange={formikUserData.handleChange}
              value={formikUserData.values.confirmPassword}
            />
            {formikUserData.errors.confirmPassword && <Message>{formikUserData.errors.confirmPassword}</Message>}
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