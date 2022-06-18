import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import ListTripPage from '../pages/ListTripsPage'
import AdminPage from '../pages/AdminHomePage'
import LoginPage from '../pages/LoginPage'
import ApplicationFormPage from '../pages/ApplicationFormPage'
import CreateTripPage from '../pages/CreateTripPage'
import TripDetailsPage from '../pages/TripDetailsPage'
import ErrorPage from '../pages/ErrorPage'

function Router () {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="listTrips" element={<ListTripPage />} />
        <Route
          path="listTrips/applicationToTrip"
          element={<ApplicationFormPage />}
        />
        <Route path="login/adminPage" element={<AdminPage />} />
        <Route path="login/adminPage/createTrip" element={<CreateTripPage />} />
        <Route path="login/adminPage/detailPage" element={<TripDetailsPage />} />
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router