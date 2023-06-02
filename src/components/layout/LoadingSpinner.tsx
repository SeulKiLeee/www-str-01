'use client';
import styled from "styled-components";



const LoadingSpinner = ():JSX.Element => {

    return (
        <>
            <Spinner><div></div><div></div><div></div><div></div></Spinner>
        </>
    )
};

export default LoadingSpinner;


const Spinner = styled.div`
    display: inline-block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: fixed;
    width: 80px;
    height: 80px;
    z-index: 9999;
    
    div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        margin: 8px;
        border: 8px solid #B43EFF;
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #B43EFF transparent transparent transparent;
      }
    div:nth-child(1) {
        animation-delay: -0.45s;
      }
    div:nth-child(2) {
    animation-delay: -0.3s;
    }
    div:nth-child(3) {
        animation-delay: -0.15s;
      }
    @keyframes lds-ring {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
`;
  