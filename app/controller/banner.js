/* eslint-disable indent */
'use strict';

const Controller = require('egg').Controller;

class BannerController extends Controller {

  async getBanner() {
    const { ctx } = this;
    const res = await ctx.service.banner.getBanner();

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

module.exports = BannerController;
