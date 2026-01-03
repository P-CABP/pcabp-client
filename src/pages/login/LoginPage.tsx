import { FormEvent } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Stack, styled, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

import InputField from "@/components/fields/InputField";
import { loginSchema, LoginSchema } from "@/schemas/user-schema";
import SessionService from "@/services/session-service";
import { useToast } from "@/stores/system-toast-store";

const LoginPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const toast = useToast();

  const { mutate: login } = SessionService.useLogin();

  const loginForm = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    loginForm.handleSubmit(
      (data) => {
        login(data, {
          onSuccess: () => {
            navigate(-1);
          },
        });
      },
      (errors) => {
        const errorMessage =
          errors.username?.message || errors.password?.message;

        if (!errorMessage) return;

        toast({
          type: "error",
          message: errorMessage,
          confirm: false,
        });
      },
    )(e);
  };

  return (
    <StyledLoginPage>
      <FormProvider {...loginForm}>
        <StyledLoginForm onSubmit={handleSubmit}>
          <Typography size="24xl" weight="bold">
            Temporary Login Form
          </Typography>
          <InputField
            name="username"
            renderProps={{
              placeholder: t("user.label.USERNAME"),
            }}
          />
          <InputField
            name="password"
            renderProps={{
              type: "password",
              placeholder: t("user.label.PASSWORD"),
            }}
          />
          <Button type="submit" variant="contained" fullWidth>
            <Typography size="16bs" weight="bold">
              {t("common.label.action.LOGIN")}
            </Typography>
          </Button>
        </StyledLoginForm>
      </FormProvider>
    </StyledLoginPage>
  );
};

const StyledLoginPage = styled(Stack)`
  width: 100%;
  height: 100vh;

  justify-content: center;
  align-items: center;
`;

const StyledLoginForm = styled("form")`
  width: 500px;
  height: 500px;

  padding: 24px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  row-gap: 12px;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.palette.grayscale.gray800_E0};
`;

export default LoginPage;
