import { createRouter,createWebHistory } from "vue-router";

import Dashboard from '../components/Dashboard'
import Navigation from '../components/Navigation'
import EmployeeIndex from '../components/employees/EmployeeIndex'
import EmployeeCreate from '../components/employees/EmployeeCreate'

let proj = '/jlr_hr_kendo/public';
const routes = [
    
    {
        path : `${proj}/dashboard`,
        name : 'dashboard',
        component : Dashboard
    },
    {
        path : `${proj}/employees`,
        name : 'employees',
        component : EmployeeIndex,
    },
    {
        path : `${proj}/employees/create`,
        name : 'employees.create',
        component : EmployeeCreate,
    }

]

export default createRouter ({
    
    history : createWebHistory(),
    routes
})