import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    color: ${(props) => props.theme.fontColor};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.45s;

    #hero {
        position: absolute;
        left: 50%;
        top: 55%;
        transform: translateX(-50%) translateY(-50%);
    }
`;

export const Text = styled.h1`
    font-family: "Inter", sans-serif;
    font-size: 72px;
    font-weight: 900;
    max-width: 1200px;
    text-align: center;
    line-height: 120%;
    letter-spacing: -0.75px;

    position: relative;
    z-index: 10;

    span {
        position: relative;
        span: slateblue;

        svg {
            position: absolute;
            left: 30%;
            bottom: -3%;
        }
    }
`;
