export const inc = () => ({type: 'INC'});
export const dec = () => ({type: 'DEC'});
export const refr = () => ({type: 'REFR'});
export const rnd = () => ({type: 'RND', value: Math.floor(Math.random() * 10)});