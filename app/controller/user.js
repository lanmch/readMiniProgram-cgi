/* eslint-disable indent */
'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async userInfo() {
        const { ctx } = this;
        const res = await ctx.service.user.getUserInfo(ctx.request.body);

        if (res) {
            ctx.body = {
                status: 200,
                data: res,
            };
        } else {
            ctx.body = {
                status: 500,
                errMsg: '获取失败',
            };
        }
    }

    async addFeedback() {
        const { ctx } = this;
        const res = await ctx.service.user.addFeedback(ctx.request.body);

        if (res) {
            ctx.body = {
                status: 200,
                data: '添加成功',
            };
        } else {
            ctx.body = {
                status: 500,
                errMsg: '添加失败',
            };
        }
    }

    async collectList() {
        const { ctx } = this;
        const res = await ctx.service.user.getCollectList(ctx.request.body);

        if (res) {
            ctx.body = {
                status: 200,
                data: res,
            };
        } else {
            ctx.body = {
                status: 500,
                errMsg: '获取失败',
            };
        }
    }

    async viewHistory() {
        const { ctx } = this;
        const res = await ctx.service.user.getViewHistory(ctx.request.body);

        if (res) {
            ctx.body = {
                status: 200,
                data: res,
            };
        } else {
            ctx.body = {
                status: 500,
                errMsg: '获取失败',
            };
        }
    }

    async collectBook() {
        const { ctx } = this;
        const res = await ctx.service.user.collectBook(ctx.request.body);

        if (res) {
            ctx.body = {
                status: 200,
                data: '操作成功',
            };
        } else {
            ctx.body = {
                status: 500,
                errMsg: '操作失败',
            };
        }
    }
    async viewBook() {
        const { ctx } = this;
        const res = await ctx.service.user.viewBook(ctx.request.body);

        if (res) {
            ctx.body = {
                status: 200,
                data: 'success',
            };
        } else {
            ctx.body = {
                status: 500,
                errMsg: '增加失败',
            };
        }
    }
    async getCollect() {
        const { ctx } = this;
        const res = await ctx.service.user.getCollect(ctx.request.body);

        if (res) {
            ctx.body = {
                status: 200,
                data: res,
            };
        } else {
            ctx.body = {
                status: 500,
                errMsg: '增加失败',
            };
        }
    }
    async addView() {
        const { ctx } = this;
        const res = await ctx.service.user.addView(ctx.request.body);

        if (res) {
            ctx.body = {
                status: 200,
                data: 'success',
            };
        } else {
            ctx.body = {
                status: 500,
                errMsg: '增加失败',
            };
        }
    }
}

module.exports = UserController;
