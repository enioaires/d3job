import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { serviceGetAllClients, serviceGetOneClient, servicePostClient } from '../../service'
import { useQuery } from 'react-query';
import { SignUpForm } from '../../components';



const SignUp: NextPage = () => {

  const [id, setId] = useState("a6186b27-f0c0-4564-b6f4-918781e359a1")

  // const allClientsQuery = useQuery('allClients', () => serviceGetAllClients())

  // const clientQuery = useQuery(['oneClient', id], () => serviceGetOneClient(id))


  // useQuery(['postClient', id], () => servicePostClient(payload))

  return (
    <SignUpForm />
  );
}

export default SignUp;