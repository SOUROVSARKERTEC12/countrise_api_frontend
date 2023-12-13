import styled from "styled-components";

export const InputArea = styled.section`
    display: flex;
    width: 1024px;
    margin: auto;
    justify-content: space-between;
    padding: 40px 0;
    transition: all ease 0.2s;

    input {
        height: 50px;
        width: 450px;
        border-radius: 2px;
        padding: 0 10px;
        border: none;
        box-shadow: 2px 2px 1em rgba(0, 0, 0, 0.2);
        outline: 0;
        font-size: 14px;
        background-color: ${(props) => (props.theme === 'light' ? '' : 'rgb(43, 55, 67)')};
        color: ${(props) => (props.theme === 'light' ? '' : '#FFF')};

        ::placeholder {
            color: #ccc;
        }
    }

    select {
        border-radius: 2px;
        padding: 0 20px;
        border: none;
        box-shadow: 2px 2px 1em rgba(0, 0, 0, 0.2);
        outline: 0;
        font-size: 14px;
        background-color: ${(props) => (props.theme === 'light' ? '' : 'rgb(43, 55, 67)')};
        color: ${(props) => (props.theme === 'light' ? '#000' : '#FFF')};
    }

    @media (max-width: 1024px) {
        & {
            width: auto;
            padding: 20px;
        }
    }

    @media (max-width: 768px) {
        & {
            flex-direction: column;

            select {
                margin-top: 10px;
                height: 50px;
                width: max-content;
            }
        }
    }

    @media (max-width: 768px) {
        & {
            flex-direction: column;

            input {
                width: 97%;
            }

            select {
                margin-top: 10px;
                height: 50px;
                width: max-content;
            }
        }
    }
`;
