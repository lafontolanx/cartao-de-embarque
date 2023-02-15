import styled from "styled-components";

export const Container = styled.div`
    width: 20.438rem; // 327px 
    display: flex;
    flex-direction: column;

    background-color: var(--white);
    border-radius: 1.5rem; // 24px 

    @media screen and (max-width: 768px) {
        background-color: transparent;
    }
`

export const Flight = styled.div`
    @media screen and (max-width: 768px) {
        background-color: var(--white);
        border-radius: 1.5rem; // 24px
    }

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const FlightHeader = styled.div`
    padding: 1.5rem 2rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
`

export const FlightNumber = styled.div``

export const FlightDate = styled.div`
    text-align: right;
`

export const FlightTime = styled.div`
    padding: 0 2rem .75rem 2rem;

    @media screen and (max-width: 768px) {
        padding: 0 2rem 1.5rem 2rem;
    }

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Departure = styled.div`
    position: relative;
`

export const AirplaneIcon = styled.div`
    position: relative;
    left: .6rem;
`

export const Arrival = styled.div`
    position: relative;
    text-align: right;

    .arrivalTime {
        display: flex;
        justify-content: flex-end;
    }

    .arrivalTime p:nth-child(2){
        font-weight: 500;
        font-size: 0.625rem; // 10px
    }
`

export const Passanger = styled.div`
    background-color: var(--white);

    padding: .75rem 2rem;

    @media screen and (max-width: 768px) {
        padding: 1.5rem 2rem;
    }

    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        border-radius: 1.5rem; // 24px
    }
`

export const PassangerName = styled.div``

export const PassangerSeat = styled.div`
    text-align: right;
`

export const Boarding = styled.div`
    padding: .75rem 2rem 1.5rem 2rem;

    @media screen and (max-width: 768px) {
        padding: 1.5rem 2rem;
    }

    background-color: var(--white);
    border-radius: 0 0 1.5rem 1.5rem;

    @media screen and (max-width: 768px) {
        border-radius: 1.5rem; // 24px
    }
`

export const BoardingHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const BoardingFooter = styled.div`
    padding-top: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    gap: .3rem;
`

export const BoardingInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2 {
        color: var(--gray);
    }
`

export const BoardingTime = styled.div`
    .boardingTime {
        background-color: var(--purple-300);
        color: var(--white);
        height: 1.688rem; // 27px
        width: 3.375rem; // 54px
        border-radius: .5rem; // 8px

        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const BoardingTerminal = styled.div``

export const BoardingGate = styled.div``

export const BoardingQRCode = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const DividerIcon = styled.div`
    background-color: transparent;
    width: 20.438rem; // 327px
    display: flex;
    justify-content: space-between;
    align-items: center;

    .circle1 {
        position: relative;
        left: -0.75rem; // -12px
    }

    .circle2 {
        position: relative;
        left: 0.75rem; // 12px
    }

    .top .circle {
        background-color: #5E3FA6;
    }

    .bottom .circle {
        background-color: #543895;
    }

    @media screen and (max-width: 768px) {
        background-color: var(--white);
        width: 17.438rem; // 278px
        position: relative;
        left: 1.5rem; // 24px
    }
`

export const CircleIcon = styled.div`
    background-color: transparent;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const Circle = styled.div`
    width: 1.5rem; // 24px
    height: 1.5rem; // 24px
    border-radius: 50%;
    position: relative;
`













