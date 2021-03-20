import proverbs from 'data/proverbs'

export default () => {
    return proverbs[Math.floor(Math.random() * proverbs.length)]
}