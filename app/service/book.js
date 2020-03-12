/* eslint-disable indent */
'use strict';
const Service = require('egg').Service;

class BookService extends Service {
    async getBookInfo(params) {
        const { app } = this;
        try {
            const bookInfo = (await app.mysql.select('book', {
                where: {
                    bookId: params.bookId,
                },
            }))[0];

            return {
                bookInfo,
            };
        } catch (err) {
            return null;
        }
    }
    async getBookRank(params) {
        const { app } = this;
        const { rankType = 0 } = params;
        try {
            let rankList = [];
            switch (rankType) {
                // 热门
                case 0:
                    rankList = await app.mysql.select('book', {
                        columns: [ 'bookId', 'bookName', 'type', 'bookAbstract', 'img' ],
                        limit: 10,
                        orders: [
                            [ 'view', 'desc' ],
                        ],
                    });
                    break;
              
                // 新品
                case 1:
                    rankList = await app.mysql.select('book', {
                        columns: [ 'bookId', 'bookName', 'type', 'bookAbstract', 'img' ],
                        limit: 10,
                        orders: [
                            [ 'createTime', 'desc' ],
                        ],
                    });
                    break;
                default: break;
            }

            return {
                rankList,
            };
        } catch (err) {
            return null;
        }
    }
    async getBookList(params) {
        const { app } = this;
        const { bookType = 0 } = params;
        try {
            const bookList = await app.mysql.select('book', {
                where: {
                    type: bookType,
                },
            });

            return {
                bookList,
            };
        } catch (err) {
            return null;
        }
    }
    async getBookDirectory(params) {
        const { app } = this;
        const { bookId } = params;
        try {
            const directoryList = await app.mysql.select('section', {
                columns: [ 'sectionIndex', 'sectionName', 'sectionContent' ],
                where: {
                    bookId,
                },
                orders: [[ 'sectionIndex' ]],
            });

            return {
                directoryList,
            };
        } catch (err) {
            console.log(err);
            return null;
        }
    }
    async getBookDetail(params) {
        const { app } = this;
        const { bookId, sectionIndex } = params;
        try {
            const bookDetail = await app.mysql.select('section', {
                where: {
                    bookId,
                    sectionIndex,
                },
            });

            return {
                bookDetail,
            };
        } catch (err) {
            return null;
        }
    }
}

module.exports = BookService;