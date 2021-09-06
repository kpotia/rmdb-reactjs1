import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100px;
    background-color: var(--darkGrey);
    padding: 0 20px;
`;
export const Content = styled.div`
    position: relative;
    max-width: var(--maxWidth);
    width: 100%;
    height: 55px;
    background: var(--medGrey);
    margin: 0 auto;
    border-radius: 40px;
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        position: absolute;
        left: 15px;
        top: 15px;
        width: 30px;
    }

    input {
        font-size: 28px;
        position: absolute;
        left: 0;
        top: 10px;
        margin: 0 0 0 60px;
        border: 0;
        width: 95%;
        background: transparent;
        height: 40px;
        color: var(--white);
        :focus{
            outline: none;
        }
    }
`;