import { LoginScreen } from 'screens/login/login'
import { DashboardScreen } from 'screens/dashboard/dashboardScreen'
import Layout from 'components/layout/layout'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PrivateRoute from './privateRoute'
import { CompaniesScreen } from 'screens/companies/companiesScreen'

export const RouterApp: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<LoginScreen />} />
          <Route
            path='dashboard'
            element={<PrivateRoute element={DashboardScreen} />}
          />
          <Route
            path='Companies'
            element={<PrivateRoute element={CompaniesScreen} />}
          />
        </Routes>
      </Layout>
    </Router>
  )
}
