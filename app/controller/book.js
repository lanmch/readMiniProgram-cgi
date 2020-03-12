/* eslint-disable indent */
'use strict';

const Controller = require('egg').Controller;

class BookController extends Controller {
    async bookInfo() {
        const { ctx } = this;
        const res = await ctx.service.book.getBookInfo(ctx.request.body);

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
    async bookRank() {
        const { ctx } = this;
        const res = await ctx.service.book.getBookRank(ctx.request.body);

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
    async bookList() {
        const { ctx } = this;
        const res = await ctx.service.book.getBookList(ctx.request.body);

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
    async bookDirectory() {
        const { ctx } = this;
        const res = await ctx.service.book.getBookDirectory(ctx.request.body);

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
    async bookDetail() {
        const { ctx } = this;
        const res = await ctx.service.book.getBookDetail(ctx.request.body);

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
}

module.exports = BookController;
