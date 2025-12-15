import {Formik}  from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { axiosInstance } from '../api/AxiosInstance';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router';

type formInitValueProps = {
    username:string,
    userPassword:string
}


const Login: React.FC = () => {

    const {login} = useAuth();

    const navigate = useNavigate()

    const initValue:formInitValueProps = {
        username:'',
        userPassword:''
    }

    const signInValidation = Yup.object().shape({
        username:Yup.string().min(5,'username to short').required('this filed is required'),
        userPassword:Yup.string().min(8,'password to short').required('this filed is required'),
    })

    const handalFormSubmit = (values:formInitValueProps):void => {

        const data= {
            username: values.username,
            password: values.userPassword
        }


        axiosInstance.post('/auth/login',data)
        .then((response)=>{
            const {data} =  response;

            login(data);

            navigate('/dashboard')

        }).catch((error)=>{
            console.log(error);
        })

    }

    return <>

<div className="py-6">

    <h1 className="mb-3 text-brown text-center text-4xl">Login our system</h1>

    <Formik initialValues={initValue} validationSchema={signInValidation} onSubmit={(values)=>handalFormSubmit(values)}>

    {
        ({values,handleChange,handleSubmit,isSubmitting,errors,touched})=>(

            <form className="lg:w-1/2 p-6 m-auto" onSubmit={handleSubmit}>

        <div className="mb-3">
            <input type="text" onChange={handleChange} value={values.username} name='username' autoComplete="false" placeholder="Enter your username" className="border w-full p-3 rounded-sm mb-3" />

            {errors.username&&touched.username&&<div className='text-red-600'>{errors.username}</div>}
        </div>

        <div className="mb-3">
            <input type="password" onChange={handleChange} name='userPassword' value={values.userPassword} autoComplete="false" placeholder="Enter your password" className="border w-full p-3 rounded-sm mb-3"/>

            {errors.userPassword&&touched.userPassword&&<div className='text-red-600'>{errors.userPassword}</div>}
        </div>

        <div className="mb-3 text-center">
            <button type='submit' disabled={isSubmitting} className={`bg-primary_dark cursor-pointer text-winter py-3 px-6 text-lg rounded-lg ${isSubmitting? 'bg-primary_dark/85':''}`}>
                {isSubmitting?'loading ...' : 'Login'}
            </button>
        </div>

    </form>
        )
    }

    

    </Formik>


</div>
    
    </>
}

export default Login