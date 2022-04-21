import bankTree from '../../assets/img/bank-tree.jpeg'

const size = '920px'

export const HERO = `
background-image: url(${bankTree});
background-position: 0 -50px;
background-size: cover;
background-repeat: no-repeat;
height: 300px;
position: relative;
@media (min-width: ${size}) {
    height: 400px;
    background-position: 0% 33%;
}
`
export const HERO_CONTENT = `
    position: relative;
    top: 2rem;
    width: 200px;
    background: white;
    padding: 2rem;
    text-align: left;
    margin: 0 auto;
    @media (min-width: ${size}) {
        position: absolute;
        top: 50px;
        right: 50px;
        width: 300px;
        margin: 2rem;
    }
`
export const HERO_SUBTITLE = `
    font-weight: bold;
    font-size: 1rem;
    margin: 0;
    @media (min-width: ${size}) {
        font-size: 1.5rem;
    }
`
export const HERO_TEXT = `
margin-bottom: 0;
font-size: 0.9rem;
@media (min-width: ${size}) {
    font-size: 1.2rem;
}
`
