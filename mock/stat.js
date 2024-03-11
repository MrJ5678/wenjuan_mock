const getStatList = require('./data/getStatList');

module.exports = [
  // 答卷列表
  {
    url: '/api/stat/:questionId',
    method: 'get',
    response() {
      return {
        errno: 0,
        data: {
          total: 100,
          list: getStatList()
        }
      };
    }
  },
  {
    url: '/api/stat/:questionId/:componentId',
    method: 'get',
    response() {
      return {
        errno: 0,
        data: {
          stat: [
            { name: '选项1', count: 10 },
            { name: '选项2', count: 30 },
            { name: '选项3', count: 20 }
          ]
        }
      };
    }
  }
];
