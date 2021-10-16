import React, { useState } from 'react'
import { Box, Paper, Stepper, Step, StepLabel, Button } from '@material-ui/core'
import { Formik, Form } from 'formik'

import GiveForm from './Forms/GiveForm'
import GetForm from './Forms/GetForm'

import formInitialValues from './FormModel/formInitialValues'
import validate from './FormModel/validate'

const steps = ['Хочу обменять', 'Хочу получить']

const renderStepContent = (step: number, errors: Object, touched: Object ) => {
  switch (step) {
    case 0:
      return <GiveForm errors={errors} touched={touched} />
    case 1:
      return <GetForm />
    default:
      return <GiveForm errors={errors} touched={touched} />
  }
}

const Exchange: React.FC = () => {
	const [step, setStep] = useState(0)
  const isLastStep = step === steps.length - 1

  const handleSubmit = (values: Object, actions: any) => {
    if (!isLastStep) actions.setTouched({})
    actions.setSubmitting(false)
    setStep(step + 1)
  }

  const handleBack = () => {
    setStep(step - 1)
  }

  const handleReset = () => {
    setStep(0)
  }

  return (
    <Box sx={{ display: 'flex', width: 'calc(100% - 8rem)', height: 'calc(100% - 12rem)', minHeight: '450px' }}>
      <Paper elevation={10} sx={{ display: 'flex', flexDirection: 'column', width: '100%', p: 4 }}>
        <Box sx={{ height: '64px' }}>
          <Stepper activeStep={step}>
            {steps.map(label => {
              return (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              )
            })}
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
              {({ errors, touched, isSubmitting }) => (
                <Form style={{ display: 'flex', flexDirection: 'column', height: 'calc(100% - 64px)' }}>
                  <Box
                    className='form-content'
                    sx={{ height: 'calc(100% - 60px)' }}
                  >
                    {renderStepContent(step, errors, touched)}
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'row', height: '36px', marginTop: '24px' }}>
                    {step !== 0 && (
                      <Button
                        variant="contained"
                        onClick={handleBack}
                      >
                        Назад
                      </Button>
                    )}
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button
                      variant="contained"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isLastStep ? 'Подтвердить' : 'Далее'}
                    </Button>
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
