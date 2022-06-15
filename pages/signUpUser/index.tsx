import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { serviceGetAllClients, serviceGetOneClient, servicePostClient } from '../../service'
import { useQuery } from 'react-query';
import { SignUpUserForm } from '../../components';



const SignUpUser: NextPage = () => {

  // const [id, setId] = useState("a6186b27-f0c0-4564-b6f4-918781e359a1")

  // const get = useQuery('allClients', () => serviceGetAllClients())

  // console.log(get.data)
  // if (get.status === 'loading')
  //   return <h1>Loading...</h1>

  // const clientQuery = useQuery(['oneClient', id], () => serviceGetOneClient(id))


  // useQuery(['postClient', id], () => servicePostClient(payload))

  return (
    <SignUpUserForm />
  );
}

export default SignUpUser;