import styled from 'styled-components';

export const Container = styled.div`
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`;

export const Content = styled.div`
    background-color: #fefefe;
    margin: 8% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 80%; /* Could be more or less, depending on screen size */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

export const Header = styled.div``;
export const Title = styled.h1``;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
export const FormFields = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    gap: 20px;
`;

export const Actions = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 20px;
`;

export const ButtonCancel = styled.button`
    display: flex;
    align-items: center;
    gap: 2px;
    padding: 4px;
`;

export const ButtonSave = styled.button`
    display: flex;
    align-items: center;
    gap: 2px;
    padding: 4px;
`;

export const Field = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;