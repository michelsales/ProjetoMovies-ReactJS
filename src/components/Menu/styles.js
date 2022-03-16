import styled, { css } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h2 {
        color: #fff;
        margin-top: 90px;
    }

    ul { 
        width: 90%;
        height: auto;
        margin-top: 100px;
    }
`;

export const Li = styled.li`
    width: 100%;
    height: 50px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #373945;
    margin-bottom: 10px;
    color: #fff;
    padding: 10px;
    font-weight: bold;
    font-size: 16px;

    &:hover{
        background-color: #4b4d59;
        transition: all ease 0.5s;
    }
`
