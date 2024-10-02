"use client"

import React from 'react';
import AgreementsChart from '../components/AgreementsChart/page';
import LandDetailsChart from '../components/SearchLandCard/page';
import TransactionsChart from '../components/TransactionsChart/page';
import UsersChart from '../components/UsersChart/page';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-10 p-4 ml-80 mt-10 mr-20">
      <Sidebar setActiveChart={() => {}} />
      <h2 className='text-2xl mt-8 mr-40' >  <b>Hello, Welcome to Shawazi Dashboard </b></h2>
      <AgreementsChart />
      <LandDetailsChart />
      <TransactionsChart />
      <UsersChart />
    </div>
  );
};

export default Dashboard;

























