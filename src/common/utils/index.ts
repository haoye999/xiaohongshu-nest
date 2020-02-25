import * as crypto from 'crypto';

/**
  * 生成 x-sign header
  * `x-sign: 'X' + md5(url + 'WSUDD')`
  * @param {string} url url
  * @param {object} params 参数
  */
export function generateXSign(url, params = {}) {
 const searchString = new URLSearchParams(params).toString();
 const realUrl = `${url}${searchString ? '?' : ''}${searchString}WSUDD`;
 const md5 = crypto.createHash('md5').update(realUrl).digest('hex');
 return `X${md5}`;
}