import styled from 'styled-components';

export const Container = styled.div`
    width: 30%;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    padding: 20px;

    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Header = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const ButtonEdit = styled.button`
    display: flex;
    align-items: center;
    gap: 2px;
    padding: 4px;
`;

export const ButtonDelete = styled.button`
    display: flex;
    align-items: center;
    gap: 2px;
    padding: 4px;
`;

export const HeaderActions = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Actions = styled.div.attrs(props => ({
    visibility: props.hidden ?  'visible' : 'hidden',
}))`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    visibility: ${props => props.visibility};
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

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Field = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;