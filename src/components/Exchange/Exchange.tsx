import React, { useState } from 'react'
import { Box, Paper, Stepper, Step, StepLabel, Button } from '@material-ui/core'
import { Formik, Form } from 'formik'

import GiveForm from './Forms/GiveForm'
import GetForm from './Forms/GetForm'
import AddressForm from './Forms/AddressForm'
import ExchangeCard from './ExchangeCard/ExchangeCard'

import formInitialValues from './Model/formIinitialValues'
import validate from './Model/validate'

const steps = ['Хочу обменять', 'Хочу получить', 'Адрес доставки', 'Карточка обмена']

const renderStepContent = (step: number) => {
  switch (step) {
    case 0  : return <GiveForm />
    case 1  : return <GetForm />
    case 2  : return <AddressForm />
    case 3  : return <ExchangeCard />
    default : return <GiveForm  />
  }
}

const Exchange: React.FC = () => {
  const [step, setStep] = useState(0)
  const isLastStep = step === steps.length - 1

  const handleReset = () => setStep(0)
  const handleBack  = () => setStep(step - 1)
  const handleSkip  = () => setStep(step + 1)

  const handleSubmit = (values: Object, actions: any) => {
    if (!isLastStep) actions.setTouched({})
    else console.log(values)
    actions.setSubmitting(false)
    setStep(step + 1)
  }

  return (
    <Box sx={{ display: 'flex', width: 'calc(100% - 8rem)', height: 'calc(100% - 12rem)', minHeight: '450px', maxWidth: '1200px' }}>
      <Paper elevation={10} sx={{ display: 'flex', flexDirection: 'column', width: '100%', p: 4 }}>
        <Box sx={{ height: '64px' }}>
          <Stepper activeStep={step}>
            {steps.map(label => <Step key={label}><StepLabel>{label}</StepLabel></Step>)}
          </Stepper>
        </Box>

        {step === steps.length ? (
          <>
            <p>Ищем подходящие варианты...</p>

            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Новый обмен</Button>
            </Box>
          </>
        ) : (
          <>
            <Formik
              initialValues={formInitialValues}
              validate={validate[step]}
              onSubmit={handleSubmit}
            >
              {() => (
                <Form style={{ display: 'flex', flexDirection: 'column', height: 'calc(100% - 64px)' }}>
                  <Box className='form-content' sx={{ height: 'calc(100% - 60px)' }}>
                    {renderStepContent(step)}
                  </Box>

                  <Box sx={{ display: 'flex', flexDirection: 'row', height: '36px', marginTop: '24px' }}>
                    {step !== 0 && (<Button onClick={handleBack}>Назад</Button>)}

                    <Box sx={{ flex: '1 1 auto' }} />

                    {step === 2 && (
                      <>
                        <Button onClick={handleSkip}>Пропустить</Button>
                        <Box sx={{ marginRight: '10px' }} />
                      </>
                    )}

                    <Button type="submit">{isLastStep ? 'Подтвердить' : 'Далее'}</Button>
                  </Box>
                </Form>
              )}
            </Formik>
          </>
        )}
      </Paper>
    </Box>
  )
}

export default Exchange
