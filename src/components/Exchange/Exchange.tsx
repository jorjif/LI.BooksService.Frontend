import React, { useState } from "react";
import { Box, Paper, Stepper, Step, StepLabel, Button } from "@material-ui/core";
import { Formik, Form } from "formik";
import { useAppSelector } from "../../app/hooks/hooks";
import GiveForm from "./Forms/GiveForm";
import GetForm from "./Forms/GetForm";
import AddressForm from "./Forms/AddressForm";
import ExchangeCard from "./ExchangeCard/ExchangeCard";
import { IFormInitialValues } from "./Model/formIinitialValues";
import formInitialValues from "./Model/formIinitialValues";
import validate from "./Model/validate";
import {
  useGetAdressMutation,
  useGetExchangeVariantsMutation,
  useSendExchangeMutation,
} from "../../app/store/api/apiSlice";

const steps = [
  "Хочу обменять",
  "Хочу получить",
  "Адрес доставки",
  "Карточка обмена",
];

const Exchange: React.FC = () => {
  const [step, setStep] = useState(0);
  const { id } = useAppSelector(({ auth }) => auth);
  const isLastStep = step === steps.length - 1;
  const shouldSend = step === 2;
  const [sendRequest] = useSendExchangeMutation();
  const [getExchangeVariants, { data, error, isLoading, isSuccess, isError }] =
  useGetExchangeVariantsMutation();
  const [getAdress] = useGetAdressMutation();
  
  const handleReset = () => setStep(0);
  const handleBack = () => setStep(step - 1);

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <GiveForm />;
      case 1:
        return <GetForm />;
      case 2:
        return <AddressForm />;
      case 3:
        return <ExchangeCard data={data} isLoading={isLoading} isSuccess={isSuccess} isError={isError} />;
      default:
        return <GiveForm />;
    }
  };

  const handleSubmit = async (values: IFormInitialValues, actions: any) => {
    if (shouldSend) {
      const dataToSend = {
        offerList: {
          authorFirsName: values.authorName,
          authorLastName: values.authorSurname,
          bookName: values.bookName,
          yearPublishing: new Date(values.yearPublishing).toISOString(),
          isbn: values.isbn,
          categories: values.getCategories.map((id: string) => Number(id)),
        },
        wishListCategories: values.giveCategories.map((id: string) => Number(id)),
        userId: id,
      };
      try {
        const adress = await getAdress(id).unwrap();
        const request = await sendRequest({
          ...dataToSend,
          addressId: adress.id,
        }).unwrap();
        const exchangeVariants = await getExchangeVariants(request).unwrap();
      } catch (err) {
        console.log(err);
      }
    }
    if (!isLastStep) actions.setTouched({});
    console.log(values);
    actions.setSubmitting(false);
    setStep(step + 1);
  };

  const handleSkip = () => {};

  return (
    <Box
      sx={{
        display: "flex",
        width: "calc(100% - 8rem)",
        height: "calc(100% - 12rem)",
        minHeight: "450px",
      }}
    >
      <Paper
        elevation={10}
        sx={{ display: "flex", flexDirection: "column", width: "100%", p: 4 }}
        className="page_paper_column"
      >
        <Box sx={{ height: "64px" }}>
          <Stepper activeStep={step}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        <Formik
          initialValues={formInitialValues}
          onSubmit={handleSubmit}
          validate={validate[step]}
        >
          {() => (
            <Form
              style={{
                display: "flex",
                flexDirection: "column",
                height: "calc(100% - 64px)",
              }}
            >
              <Box className="form-content" sx={{ height: "calc(100% - 60px)" }}>
                {renderStepContent(step)}
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  height: "36px",
                  marginTop: "24px",
                }}
              >
                {step !== 0 && <Button onClick={handleBack}>Назад</Button>}

                <Box sx={{ flex: "1 1 auto" }} />

                {step === 2 && (
                  <>
                    <Button type="submit" onClick={handleSkip}>
                      Пропустить
                    </Button>
                    <Box sx={{ marginRight: "10px" }} />
                  </>
                )}

                {!isLastStep ? (
                  <Button type="submit">Далее</Button>
                ) : (
                  <Button onClick={handleReset}>Новый обмен</Button>
                )}
              </Box>
            </Form>
          )}
        </Formik>
      </Paper>
    </Box>
  );
};

export default Exchange;
