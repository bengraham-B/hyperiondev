import React from 'react'

//^ Importing Components
import Layout from '../components/Layout'
import Header from '../components/Header'

export default function index() {
  return (
    <>
    <Header/>
    <Layout>
        {/* <h1>Layout</h1> */}
        

        <style jsx>{`

*{
  margin:0;
  padding:0;
}

`}</style>
    </Layout>
</>
  )
}
