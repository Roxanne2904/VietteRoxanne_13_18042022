import styled from 'styled-components'
//*CSS
import {
    FEATURES_ITEM,
    FEATURES_ICON,
    FEATURE_ITEM_TITLE,
} from '../../utils/css/styledFeatures.jsx'

const size = '450px'

export const FeaturesItem = styled.div`
    ${FEATURES_ITEM}
`

export const FeatureIcon = styled.img`
    ${FEATURES_ICON}
    @media (max-width: ${size}) {
        width: 70px;
    }
`
export const FeatureItemTitle = styled.h3`
    ${FEATURE_ITEM_TITLE}
`
