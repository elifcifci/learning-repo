import React from 'react'
import { object, string, number, date, InferType, bool, ref } from 'yup';

const Validations = object({
    email: string().email("Please enter a valid e-mail address.").required("Email is required."),
    password: string().min(5, "Password must be at least 5 characters.").required("Password is required."),
    passwordConfirm: string().oneOf([ref('Password')], "Passwords do not match.").required("Password confirm is required."),
  });

export default Validations;