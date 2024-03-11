/**
 * @description 生成问卷列表
 */

const Mock = require('mockjs');
const Random = Mock.Random;

function getQuestionList(opt) {
  const { isDelete, isStar, pageSize } = opt;
  const list = [];
  // let isDelete = undefined;
  // let isStar = undefined;
  // console.log(url);

  // if (url.indexOf('isDelete=true') > 0) {
  //   isDelete = true;
  // }
  // if (url.indexOf('isStar=true') > 0) {
  //   isStar = true;
  // }

  for (let i = 0; i < pageSize; i++) {
    list.push({
      _id: Random.id(),
      title: Random.ctitle(),
      isPublished: Random.boolean(),
      isStar: isStar ?? Random.boolean(), // 标星属性
      answerCount: Random.natural(50, 100),
      createdAt: Random.datetime(),
      isDelete: isDelete ? true : false //假删除
    });
  }

  return list;
}

module.exports = getQuestionList;
