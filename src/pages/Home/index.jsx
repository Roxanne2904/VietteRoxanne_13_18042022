import CardIcon from '../../components/CardIcon/index.jsx'
import iconChat from '../../assets/img/icon-chat.png'
import iconMoney from '../../assets/img/icon-money.png'
import iconSecurity from '../../assets/img/icon-security.png'
//*STYLED
import {
    Hero,
    HeroContent,
    Subtitle,
    Text,
    Features,
    SrOnly,
} from './styled.jsx'

export default function Home() {
    return (
        <div>
            <main>
                <Hero>
                    <HeroContent>
                        <SrOnly>Promoted Content</SrOnly>
                        <Subtitle>No fees.</Subtitle>
                        <Subtitle>No minimum deposit.</Subtitle>
                        <Subtitle>High interest rates.</Subtitle>
                        <Text>
                            Open a savings account with Argent Bank today!
                        </Text>
                    </HeroContent>
                </Hero>
                <Features>
                    <SrOnly>Features</SrOnly>
                    <CardIcon
                        icon={iconChat}
                        title="You are our #1 priority"
                        text="Need to talk to a representative? You can get in
                        touch through our 24/7 chat or through a phone call
                        in less than 5 minutes."
                    />
                    <CardIcon
                        icon={iconMoney}
                        title="More savings means higher rates"
                        text="The more you save with us, the higher your interest
                        rate will be!"
                    />
                    <CardIcon
                        icon={iconSecurity}
                        title="Security you can trust"
                        text="We use top of the line encryption to make sure your
                        data and money is always safe."
                    />
                </Features>
            </main>
        </div>
    )
}
