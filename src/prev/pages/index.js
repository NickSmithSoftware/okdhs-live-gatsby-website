import React from 'react';
import Card from '../components/display/card';

import Layout from '../components/layout'

const Index = () => {
  return (
    <Layout>
      <h3 className="p-4">Welcome to the state of Oklahoma's OKDHS Live! web site.</h3>
      <div className="container-fluid">


        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 h-25">

          <div className="col my-3 cards">
            <Card header="Account" title="Create an account." link="Register">
              Create an account to upload documents or do renewals, reviews, and applications. Accounts save eligibility assessments.
            </Card>
          </div>

          <div className="col my-3 cards">
            <Card header="Benefits Eligibility" title="Find out if you're eligible." link="Eligibility Calculator">
              The OKDHSLive! web site is an easy way to see if you might be eligible for Food Benefits or SoonerCare Medicaid.
            </Card>
          </div>

          <div className="col my-3 cards">
            <Card header="View My Cases" title="View your current benefits." link="Log In">
              View the status of an application or renewal. Contact your case worker.
            </Card>
          </div>

          <div className="col my-3 cards">
            <Card header="Client Survey" title="What do you think?" link="Survey">
              Tell us what you think about your experience with DHS.
            </Card>
          </div>

        </div>
          
        </div>
      
    </ Layout>
  )
}

export default Index;