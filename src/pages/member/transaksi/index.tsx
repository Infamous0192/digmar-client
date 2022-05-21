import type { NextPage } from 'next'

import { DashboardLayout } from 'layouts/dashboard'
import { TransactionList } from 'container/TransactionList'

const Transaction: NextPage = () => {
  return (
    <DashboardLayout>
      <TransactionList />
    </DashboardLayout>
  )
}

export default Transaction
