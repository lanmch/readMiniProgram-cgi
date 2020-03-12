/* eslint-disable indent */
'use strict';
const Service = require('egg').Service;

class BannerService extends Service {
    async getBanner() {
        const { app } = this;
        try {
            const bannerList = await app.mysql.select('banner');

            return {
                bannerList,
            };
        } catch (err) {
            return null;
        }
    }
   
}

module.exports = BannerService;