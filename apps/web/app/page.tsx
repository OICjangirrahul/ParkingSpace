"use client"
import { useQuery } from '@apollo/client'
import { AdminDocument } from '@parkingspace/network/src/gql/generated'


export default function Home() {
 const {data, loading} = useQuery(AdminDocument,{variables:{where:{
  uid: "12345"
 }}})

  return (
<h1>{data?.admin.uid}</h1>
  );
}
