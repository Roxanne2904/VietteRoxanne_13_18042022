import styled from 'styled-components'

//*CSS
import {
    HERO,
    HERO_CONTENT,
    HERO_SUBTITLE,
    HERO_TEXT,
} from '../../utils/css/styledHero.jsx'
import { FEATURES } from '../../utils/css/styledFeatures.jsx'
import { SRC_ONLY } from '../../utils/css/styledGobal.jsx'
//***/

const size = '300px'

export const Hero = styled.div`
    ${HERO}
`

export const HeroContent = styled.section`
    ${HERO_CONTENT}
    @media (max-width: ${size}) {
        width: -moz-available;
        width: -webkit-fill-available;
    }
`

export const SrOnly = styled.h2`
    ${SRC_ONLY}
`
export const Subtitle = styled.p`
    ${HERO_SUBTITLE}
`

export const Text = styled.p`
    ${HERO_TEXT}
`

export const Features = styled.section`
    ${FEATURES}
`
