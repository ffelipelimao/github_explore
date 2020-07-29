import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
    font-size: 48px;
    color: #3A3A3A;
    max-width: 450px;
    line-height: 50px;
    margin-top: 80px;
`;

export const Form = styled.form`
    margin-top: 40px;
    max-width: 700px;
    display: flex;
    
    input{
        flex: 1;
        height: 50px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;
        color:#3a3a3a;
    }

    input::placeholder{
        color:#a8a8b3;
    }


    button{
        width: 210px;
        height: 50px;
        background: #04d361;
        border-radius: 0px 5 5 0px;
        border: 0;
        color: #fff;
        font-weight: bold;
        transition: background-color 0.2s
    } 
    button:hover{
        background: ${shade(0.2, '#04d361')};
        }
`;

export const Repositories = styled.div`
    font-size: 48px;
    color: #3A3A3A;
    max-width: 450px;
    line-height: 50px;
    margin-top: 80px;
`;