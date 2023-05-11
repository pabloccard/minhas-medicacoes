import { useState } from 'react'
import { DurationStep } from './DurationStep'
import { IntervalStep } from './IntervalStep'
import { NameStep } from './NameStep'
import { StarDateStep } from './StartDateStep'
import { StartTimeStep } from './StartTimeStep'

const steps = [
  NameStep,
  StarDateStep,
  StartTimeStep,
  IntervalStep,
  DurationStep,
]

export const MultStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0)

  function changeStep(step: number) {
    if (step >= 0 && step < steps.length) {
      setCurrentStep(step)
    }
  }

  const stepComponents = steps.map((StepComponent, index) => (
    <StepComponent
      key={index}
      changeStep={changeStep}
      currentStep={currentStep}
    />
  ))

  return stepComponents[currentStep]
}
