import React from 'react'
import { Button } from '../ButtonElement'
import { InfoContainer, InfoWrapper, InfoRow, TextWrapper, Column1, Column2, Heading, TopLine, ImgWrap, BtnWrap, Subtitle, Img } from './InfoElement'


const InfoSection = () => {
  return (
    <>
      <InfoContainer /* id={id} */>
        <InfoWrapper>
            <InfoRow>
                <Column1>
                  <TextWrapper>
                    <TopLine>TopLine</TopLine>
                    <Heading>Heading</Heading>
                    <Subtitle>Subtitle</Subtitle>
                    <BtnWrap>
                      <Button to="home">Button</Button>
                    </BtnWrap>
                  </TextWrapper>
                </Column1>
                <Column2>
                  <ImgWrap>
                    <Img /* src={img} alt={alt}  *//>
                  </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection
