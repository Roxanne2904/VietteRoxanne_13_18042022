//*STYLED
import { FeaturesItem, FeatureIcon, FeatureItemTitle } from './styled.jsx'

export default function CardIcon({ icon, title, text }) {
    return (
        <FeaturesItem>
            <FeatureIcon src={icon} alt="Chat Icon" />
            <FeatureItemTitle>{title}</FeatureItemTitle>
            <p>{text}</p>
        </FeaturesItem>
    )
}
