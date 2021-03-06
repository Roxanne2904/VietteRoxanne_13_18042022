import styled from 'styled-components'
import { MAIN, BG_DARK } from '../../utils/css/styledGobal'
import { SRC_ONLY } from '../../utils/css/styledGobal'

const size = '720px'
const xSize = '390px'
export const Main = styled.main`
    ${MAIN}
    ${BG_DARK}
    padding:20px
`
export const HeaderContent = styled.div`
    color: #fff;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`
export const SrOnly = styled.h2`
    ${SRC_ONLY}
`
export const Account = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    background-color: #fff;
    width: 80%;
    margin: 0 auto;
    flex-direction: column;
    padding: 1.5rem;
    box-sizing: border-box;
    text-align: left;
    margin-bottom: 2rem;
    @media (min-width: ${size}) {
        flex-direction: row;
    }
`
export const AccountContentWrapperCta = styled.div`
    width: 100%;
    flex: 1;
    @media (min-width: ${size}) {
        flex: 0;
    }
`

export const MainTitle = styled.h1`
    ${(props) => props.state === 'open' && `margin: 0.67em 0 0 0;`}
    @media (max-width: ${xSize}) {
        font-size: 1.5rem;
    }
`
export const StyledUpdatingTxt = styled.em`
    display: block;
    font-size: 1rem;
    font-weight: 500;
    opacity: 0.5;
`
