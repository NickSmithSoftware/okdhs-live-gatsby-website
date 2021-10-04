import React from 'react';
import Card from '../components/display/card';

import Layout from '../components/layout'

const Index = () => {
  return (
    <Layout>
      <h3 className="p-4">Welcome to the state of Oklahoma's OKDHS Live! web site.</h3>
      
      <Card header="Benefits Eligibility" title="Find out if you're eligible." link="Eligibility Calculator">
        The OKDHSLive! web site is an easy way to see if you might be eligible for Food Benefits or SoonerCare Medicaid.
      </Card>
      
    </ Layout>
  )
}

export default Index;