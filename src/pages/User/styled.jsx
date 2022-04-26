import styled from 'styled-components'
import { MAIN, BG_DARK } from '../../utils/css/styledGobal'
import { SRC_ONLY } from '../../utils/css/styledGobal'

const size = '720px'

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
