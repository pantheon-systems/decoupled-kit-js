import { TemplateFn } from '@cli/types';
const stringAsVar = /* ts */ `console.log('I am another string');`;

const ts: TemplateFn = ({ data, utils }) => /* ts */ `const x = 'I am a string';
${utils.if(data.y, /* ts */ `console.log(x);`)}
${utils.if(data.z && data.y, stringAsVar)}`;

export default ts;
