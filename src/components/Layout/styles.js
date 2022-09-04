import styled from 'styled-components';
import { HiLocationMarker } from 'react-icons/hi'
import { BsFillCheckCircleFill } from 'react-icons/bs'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  background-color: #C60000;

  font-family: 'Nunito', sans-serif, Arial, Helvetica;
  color: #fff;

  width: 100vw;
  height: 100vh;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  img {
    width: 260px;
    height: 260px;

    border-radius: 50%;
    border: 4px solid #fff;

    margin-bottom: 10px;
  }
`
export const Number = styled.span`
  font-family: 'Bungee Shade', cursive;
  font-size: 36px;
  margin-bottom: -15px;

`
export const Text = styled.span`
  font-size: 18px;
`
export const NameNiver = styled.span`
  font-size: 22px;
  margin-bottom: 10px;
`
export const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-top: 10px;

  a {
    display: flex;
    align-items: center;

    font-size: 20px;
    color: #fff;
    width: 100%;

    background-color: #b82525;

    border-radius: 12px;

    padding: 14px 22px;
    
    cursor: pointer;

    &:nth-child(2) {
      margin-top: 10px;
    }
    &:hover {
      background-color: #a21f1f;
      transition: 0.6s;
    }
  }

`

export const LocationIcon = styled(HiLocationMarker)`
  width: 26px;
  height: 26px;
  margin-right: 7px;
`
export const CheckIcon = styled(BsFillCheckCircleFill)`
  width: 24px;
  height: 24px;
  margin-right: 7px;
`

export const SpiderBottom = styled.img`
  width: 100px;
  height: 100px;

  position: absolute;
  top: 0;
  right: 0;
`
export const SpiderTop = styled.img`
  width: 100px;
  height: 100px;

  position: absolute;
  bottom: 0;
  left: 0;
`