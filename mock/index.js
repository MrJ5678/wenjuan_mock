const test = require('./test.js');
const question = require('./question.js');
const user = require('./user.js');
const stat = require('./stat.js');

const mockList = [...test, ...question, ...user, ...stat];

module.exports = mockList;
