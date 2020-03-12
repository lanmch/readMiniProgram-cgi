/* eslint-disable indent */
'use strict';
const Service = require('egg').Service;

class UserService extends Service {
    async getUserInfo(params) {
        const { app } = this;
        try {
            const userInfo = (await app.mysql.select('user', {
                userId: params.userId,
            }))[0];

            return {
                userInfo,
            };
        } catch (err) {
            return null;
        }
    }
    async addFeedback(params) {
        const { app } = this;
        const { title, content } = params;
        try {
            const res = await app.mysql.insert('feedback', {
                title,
                content,
            });

            return {
                res,
            };
        } catch (err) {
            return null;
        }
    }
    async getCollectList(params) {
        const { app } = this;
        const { userId } = params;
        console.log(userId);
        try {
            const collectArr = await app.mysql.select('collect', {
                where: {
                    userId,
                },
            });
            const collectList = [];
            for (const item of collectArr) {
                console.log(collectArr)
                const bookInfo = JSON.parse(JSON.stringify((await app.mysql.select('book', {
                    where: {
                        bookId: item.bookId,
                    },
                }))));
                bookInfo.collectId = JSON.parse(JSON.stringify(item)).collectId;
                collectList.push(bookInfo[0]);
            }
            return {
                collectList,
            };
        } catch (err) {
            return null;
        }
    }
    async getViewHistory(params) {
        const { app } = this;
        const { userId } = params;
        try {
            const historyList = [];
            const historyArr = await app.mysql.select('view', {
                where: {
                    userId,
                },
                orders: [[ 'viewTime', 'desc' ]],
            });
            for (const item of historyArr) {
                const bookInfo = (await app.mysql.select('book', {
                    where: {
                        bookId: item.bookId,
                    },
                }))[0];
                historyList.push(bookInfo);
            }

            return {
                historyList,
            };
        } catch (err) {
            return null;
        }
    }
    async collectBook(params) {
        const { app } = this;
        try {
            // 1收藏 0 取消
            let res;
            if (params.collectType) {
                res = await app.mysql.insert('collect', {
                    userId: params.userId,
                    bookId: params.bookId,
                });
            } else {
                res = await app.mysql.delete('collect', {
                    collectId: params.collectId,
                });
            }

            return {
                res,
            };
        } catch (err) {
            return null;
        }
    }
    async getCollect(params) {
        const { app } = this;
        try {
            const res = await app.mysql.select('collect', {
                where: {
                    userId: params.userId,
                    bookId: params.bookId,
                }
            });
            let ifCollect;
            let collectId = null;
            if (res.length) {
                ifCollect = true;
                collectId = res[0].collectId;
            } else {
                ifCollect = false;
            }
            return {
                ifCollect,
                collectId,
            };
        } catch (err) {
            return null;
        }
    }
    async viewBook(params) {
        const { app } = this;
        const { userId, bookId, sectionId } = params;
        try {
            // 如果存在浏览记录 更新时间
            // 不存在 则新增
            let res;
            const ifExistView = (await app.mysql.select('view', {
                where: {
                    userId,
                    bookId,
                },
            }))[0];
            if (ifExistView) {
                res = await app.mysql.update('view', {
                    sectionId,
                    viewTime: (new Date()),
                }, {
                    where: {
                        userId,
                        bookId,
                    },
                });
            } else {
                res = await app.mysql.insert('view', {
                    userId,
                    bookId,
                    sectionId,
                });
            }
            return {
                res,
            };
        } catch (err) {
            return null;
        }
    }
    async addView(params) {
        const { app } = this;
        try {
            const res = app.mysql.query(`update book set view=view+1 where bookId = ${params.bookId}`);

            return {
                res,
            };
        } catch (err) {
            return null;
        }
    }
}

module.exports = UserService;