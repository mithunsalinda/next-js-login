'use client';
import React from 'react';
import { Images } from '../../../assets/Images';
import Image from 'next/image';
import { FormButton, TextInput } from '@/components';
import { useAuthStore } from '@/store';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
export default function LoginForm() {
  const login = useAuthStore(state => state.login);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async (values, { setSubmitting, setFieldError }) => {
      const success = await login(values.email, values.password);
      setSubmitting(false);

      if (success) {
        router.push('/dashboard');
      } else {
        setFieldError('password', 'Invalid email or password');
      }
    },
  });
  return (
    <form className="space-y-6" onSubmit={formik.handleSubmit}>
      <div className="flex items-center gap-2 mb-8">
        <div className=" rounded-md">
          <Image src={Images.logo} alt="Google" width={30} height={30} className="w-8 h-8" />
        </div>
        <span className="font-semibold text-xs">ROOM.ME</span>
      </div>
      <h1 className="text-3xl font-bold">Welcome back to Room.me!</h1>
      <p className="text-sm text-gray-400">
        Room.me is an innovative video conference product that revolutionizes virtual meetings.
      </p>
      <div>
        <TextInput
          label="Email address"
          type="email"
          placeholder="Enter your email address"
          name="email"
          required
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </div>
      <div>
        <TextInput
          label="Password"
          type="password"
          placeholder="Enter your password"
          name="password"
          required
          value={formik.values.password}
          onChange={formik.handleChange}
        />
      </div>
      {formik.touched.password && formik.errors.password && (
        <p className="text-red-500 text-xs mt-1">{formik.errors.password}</p>
      )}
      <FormButton
        type="submit"
        variant="primary"
        loading={formik.isSubmitting}
        disabled={formik.isSubmitting}
      >
        Sign In
      </FormButton>
      <FormButton
        type="button"
        variant="secondary"
        icon={<Image src={Images.googleIcon} alt="Google" width={20} />}
      >
        Sign in with Google
      </FormButton>
      <div className="flex items-center justify-between text-sm text-gray-400 mt-2">
        <label className="flex items-center gap-2">
          <input type="checkbox" className="form-checkbox" />
          Remember for 30 days
        </label>
        <a href="#" className="text-violet-500 hover:underline">
          Forgot password
        </a>
      </div>
      <p className="text-sm text-center text-gray-500 mt-4">
        Doesn’t have account?{' '}
        <a href="#" className="text-violet-500 hover:underline">
          Sign up
        </a>
      </p>
    </form>
  );
}
