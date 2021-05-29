import React from 'react';
import style from "./login.module.css"
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignupForm = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password:"",
            confPassword:""
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .min(5,"کم است")
                .required('Required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            password:Yup.string()
                .min(6,"تعداد کاراکتر حداقل 6 باشد!"),
            confPassword:Yup.string()

                .oneOf([Yup.ref("password"),null],"یکی نیست با پسورد")

        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            console.log(values);
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={style.loginWrapper}>
            <label htmlFor="firstName">First Name <span> (show errors when submit *onblur not active*) min-5 max-15 required </span></label>
            <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
                <div className={style.validationError}>{formik.errors.firstName}</div>
            ) : null}

            <label htmlFor="lastName">Last Name <span> (show errors when onblur ) max-20 required </span></label>
            <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
                <div className={style.validationError}>{formik.errors.lastName}</div>
            ) : null}
                <label htmlFor="email">Email Address <span> (show errors when onblur ) correct-email required </span></label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div className={style.validationError}>{formik.errors.email}</div>
                ) : null}

                <label htmlFor="lastName"> password <span> (show errors when onblur ) not-required min-6 </span></label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                    <div className={style.validationError}>{formik.errors.password}</div>
                ) : null}


                <label htmlFor="lastName">confirm password <span> (show errors when onblur ) equal-with-password</span> </label>
                <input
                    id="confPassword"
                    name="confPassword"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confPassword}
                />
                {formik.touched.confPassword && formik.errors.confPassword ? (
                    <div className={style.validationError}>{formik.errors.confPassword}</div>
                ) : null}



            <button type="submit">Submit</button>
            </div>
        </form>
    );
};
export default SignupForm;