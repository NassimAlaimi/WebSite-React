import React from 'react'
import { FormContainer, FormH1, FormWrapper, Card, CardIcon, CardH2, CardP } from './FormElement'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import Icon4 from '../../images/svg-4.svg'
import Icon5 from '../../images/svg-5.svg'
import Icon6 from '../../images/svg-6.svg'


const FormSection = () => {
  return (
    <FormContainer>
      <FormH1>Les Différents Sujets :</FormH1>
      <FormWrapper>
        <Card>
          <CardIcon src={Icon1}/>
          <CardH2>Questionnaire n°1</CardH2>
          <CardP>Lorem ipsum dolor sit amet.</CardP>
        </Card>

        <Card>
          <CardIcon src={Icon2}/>
          <CardH2>Questionnaire n°2</CardH2>
          <CardP>Lorem ipsum dolor sit amet.</CardP>
        </Card>

        <Card>
          <CardIcon src={Icon3}/>
          <CardH2>Questionnaire n°3</CardH2>
          <CardP>Lorem ipsum dolor sit amet.</CardP>
        </Card>

        <Card>
          <CardIcon src={Icon4}/>
          <CardH2>Questionnaire n°4</CardH2>
          <CardP>Lorem ipsum dolor sit amet.</CardP>
        </Card>

        <Card>
          <CardIcon src={Icon5}/>
          <CardH2>Questionnaire n°5</CardH2>
          <CardP>Lorem ipsum dolor sit amet.</CardP>
        </Card>

      </FormWrapper>
    </FormContainer>
  )
}

export default FormSection
