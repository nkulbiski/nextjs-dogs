import proverbs from 'data/proverbs';

export default () => proverbs[Math.floor(Math.random() * proverbs.length)];
