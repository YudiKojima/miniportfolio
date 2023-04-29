import styled from "styled-components";

export const Container = styled.div`
    color: ${(props) => props.theme.fontColor};
`;

export const ButtonSun = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4px;
    background: transparent;
    color: #ff704f;
    border: none;
    cursor: pointer;
    font-size: 40px;
    opacity: 0.9;

    margin-left: 270%;

    &:hover {
        opacity: 1;
        transition: 0.45s;
    }
`;

export const ButtonMoon = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4px;
    background: transparent;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 35px;
    opacity: 0.9;

    margin-left: 295%;

    &:hover {
        opacity: 1;
        transition: 0.45s;
    }
`;
