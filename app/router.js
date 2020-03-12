'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/banner', controller.banner.getBanner);
  // 个人信息
  router.post('/userinfo', controller.user.userInfo);
  // 反馈意见
  router.post('/addfeedback', controller.user.addFeedback);

  // 书籍相关
  router.post('/bookinfo', controller.book.bookInfo);
  router.post('/bookrank', controller.book.bookRank);
  router.post('/booklist', controller.book.bookList);

  // 收藏 and 浏览
  router.post('/collectlist', controller.user.collectList);
  router.post('/viewhistory', controller.user.viewHistory);
  router.post('/getcollectinfo', controller.user.getCollect);
  router.post('/collectbook', controller.user.collectBook);
  router.post('/viewbook', controller.user.viewBook);
  router.post('/addview', controller.user.addView);
  // 文章详情 and 目录
  router.post('/directory', controller.book.bookDirectory);
  router.post('/bookdetail', controller.book.bookDetail);

};
