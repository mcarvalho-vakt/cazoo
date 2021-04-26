import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 40px;
    padding: 20px;
`;

export const Actions = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 40px;
`;

export const PreviousButton = styled.button``;
export const NextButton = styled.button``;

export const Filters = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 20px 0 20px;
`;

export const ButtonNew = styled.button`
    display: flex;
    align-items: center;
    gap: 2px;
    padding: 4px;
`;

export const FilterAction = styled.div`
`;

export const FilterOptions = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

export const SelectOptions = styled.div`
    display: flex;
    gap: 8px;
`;