import { createRouter,createWebHistory } from "vue-router";

import Dashboard from '../components/Dashboard'
import Navigation from '../components/Navigation'
import EmployeeIndex from '../components/employees/EmployeeIndex'

const routes = [
    
    {
        path : '/jlr_hr/public/dashboard',
        name : 'dashboard',
        component : Dashboard
    },
    {
        path : '/employees',
        name : 'employee',
        component : EmployeeIndex,
    }

]

export default createRouter ({
    history : createWebHistory(),
    routes
})