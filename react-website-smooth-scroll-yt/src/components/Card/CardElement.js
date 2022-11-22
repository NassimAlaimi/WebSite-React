import styled from "styled-components";

export const Card = styled.div`
    background: #f9f9f9;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const CardIcon = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;

export const CardH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
    color: #000;
`;

export const CardP = styled.p`
    font-size: 1rem;
    text-align: center;
`;