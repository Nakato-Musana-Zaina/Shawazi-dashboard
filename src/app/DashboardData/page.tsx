"use client"

import React from 'react';
import AgreementsChart from '../components/AgreementsChart';
import LandDetailsChart from '../components/SearchLandCard';
import TransactionsChart from '../components/TransactionsChart';
import UsersChart from '../components/UsersChart';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-10 p-4 ml-80 mt-10 mr-20">
      <Sidebar setActiveChart={function (chartName: string): void {
        throw new Error('Function not implemented.');
      } }/>
      <h2> Hello, Welocome to Shawazi Dashboard</h2>
      <AgreementsChart />
      <LandDetailsChart />
      <TransactionsChart />
      <UsersChart />
    </div>
  );
};

export default Dashboard;

























