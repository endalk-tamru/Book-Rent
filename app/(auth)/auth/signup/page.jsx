"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import { Form, Formik } from "formik";
import { toast } from "react-toastify";
import {
  Checkbox,
  Divider,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { MenuBookOutlined as MenuBookOutlinedIcon } from "@mui/icons-material";

import { useSignUpMutation } from "@/redux/apiSlices/usersApiSlice";
import Title from "@/components/common/Title";

const initialValues = {
  email: "",
  password: "",
  confirmPassword: "",
  rememberMe: false,
};

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password does not match")
    .required("Confirm Password is required"),
});

export default function SignUp() {
  const router = useRouter();

  const [registerUser, { isLoading }] = useSignUpMutation();

  const onSubmitClick = async (values, { resetForm }) => {
    try {
      const res = await registerUser({ ...values }).unwrap();
      // dispatch(setCredentials({ ...res }));
      router.push("/");
      toast.success("Registered Successful");
      resetForm({ ...initialValues });
    } catch (err) {
      toast.error(err?.data?.message || err?.data?.error || err?.error);
    }
  };

  return (
    <Stack spacing={2} width={{ xs: 350, md: 450 }} padding={3}>
      <Title
        title={
          <Stack direction="row" spacing={2} alignItems={"center"}>
            <MenuBookOutlinedIcon color="primary" fontSize="large" />
            <span>Book Rent</span>
          </Stack>
        }
        subTitle={
          <>
            <Typography gutterBottom> Register as Admin</Typography>
            <Divider />
          </>
        }
      />

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmitClick}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Stack spacing={3} mt={3}>
              <TextField
                fullWidth
                type="email"
                name="email"
                label="Email Address"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />

              <TextField
                fullWidth
                type="password"
                name="password"
                label="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />

              <TextField
                fullWidth
                type="password"
                name="confirmPassword"
                label="Confirm Password"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  !!touched.confirmPassword && Boolean(errors.confirmPassword)
                }
                helperText={touched.confirmPassword && errors.confirmPassword}
              />

              <FormControlLabel
                control={
                  <Checkbox
                    name="rememberMe"
                    checked={values.rememberMe}
                    onChange={(e) =>
                      setFieldValue("rememberMe", e.target.checked)
                    }
                  />
                }
                label="Remember me"
              />

              <LoadingButton
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
                loading={isLoading}
              >
                <span>Sign up</span>
              </LoadingButton>
            </Stack>
          </Form>
        )}
      </Formik>

      <Typography variant="p" textAlign="center">
        Already Have An Account?{" "}
        <Link href="/auth/login" style={{ textDecoration: "inherit" }}>
          <Typography variant="span" color="primary">
            Login
          </Typography>
        </Link>
      </Typography>
    </Stack>
  );
}
