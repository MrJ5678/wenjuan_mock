const Mock = require('mockjs');
const getQuestionList = require('./data/getQuestionList');
const Random = Mock.Random;
const getComponent = require('./data/getComponentList');

module.exports = [
  // 获取单个问卷
  {
    url: '/api/question/:id',
    method: 'get',
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id(),
          title: Random.ctitle(),
          desc: '问卷描述',
          js: '',
          css: '',
          isPublished: true,
          // 组件列表
          componentList: getComponent()
        }
        // errno: 1002,
        // msg: '错误测试'
      };
    }
  },
  // 创建问卷
  {
    url: '/api/question',
    method: 'post',
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id()
        }
      };
    }
  },
  // 获取问卷列表
  {
    url: '/api/question',
    method: 'get',
    response(ctx) {
      const { url = '', query = {} } = ctx;
      // const isDeleted = url.indexOf('isDeleted=true') >= 0;
      // const isStar = url.indexOf('isStar=true') >= 0;
      console.log(url);
      let opt = {};
      opt.isDelete = undefined;
      opt.isStar = undefined;
      const pageSize = parseInt(query.pageSize) || 10;
      opt.pageSize = pageSize;

      if (url.indexOf('isDelete=true') > 0) {
        opt.isDelete = true;
      }
      if (url.indexOf('isStar=true') > 0) {
        opt.isStar = true;
      }
      return {
        errno: 0,
        data: {
          list: getQuestionList(opt), // 当前页
          total: 100 // 总数 用于分页
        }
      };
    }
  },
  // 更新问卷
  {
    url: '/api/question/:id',
    method: 'patch',
    response() {
      return {
        errno: 0
      };
    }
  },
  // 复制问卷
  {
    url: '/api/question/duplicate/:id',
    method: 'post',
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id()
        }
      };
    }
  },
  // 删除问卷
  {
    url: '/api/question',
    method: 'delete',
    response() {
      return {
        errno: 0
      };
    }
  }
];
