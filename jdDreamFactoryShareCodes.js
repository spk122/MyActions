/*
京喜工厂互助码
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写东东萌宠的好友码。
// github action用户的好友互助码填写到Action->Settings->Secrets->new Secret里面(Name填写 DREAM_FACTORY_SHARE_CODES(此处的Name必须按此来写,不能随意更改),内容处填写互助码,填写规则如下)
// 同一个京东账号的好友互助码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
let shareCodes = [
  '3YcJMrfh8OClRVhq5TowKA==@kiPudUhBb7pIikDNHQC1lw==@yTm0YyioEekFq34kSK0X6w==@B7wQcNgYSwLNQd3goiAu6g==@exVjdAlWg7W-UBq_rovWmA==@F8sj4kbVbt72fsgq3yAY9Q==@V9dZyRpXEraMKNvs-D8aVNxV93T0LsSlZfhrVVtpFLU=',//账号一的好友shareCode,不同好友中间用@符号隔开
  '3YcJMrfh8OClRVhq5TowKA==@kiPudUhBb7pIikDNHQC1lw==@yTm0YyioEekFq34kSK0X6w==@B7wQcNgYSwLNQd3goiAu6g==@exVjdAlWg7W-UBq_rovWmA==@F8sj4kbVbt72fsgq3yAY9Q==@V9dZyRpXEraMKNvs-D8aVNxV93T0LsSlZfhrVVtpFLU=',//账号二的好友shareCode，不同好友中间用@符号隔开
  '3AboyaS3opysJzstkILffw==@WcH_xMYHAcCNPtxzqm0j5Q==@AZd7DK7n4sYXNVqQo_t4QQ==@J12NNt0b6sTrYYVUCnadEA==',
]
// 判断github action里面是否有京喜工厂互助码
if (process.env.DREAM_FACTORY_SHARE_CODES) {
  if (process.env.DREAM_FACTORY_SHARE_CODES.indexOf('&') > -1) {
    console.log(`您的互助码选择的是用&隔开\n`)
    shareCodes = process.env.DREAM_FACTORY_SHARE_CODES.split('&');
  } else if (process.env.DREAM_FACTORY_SHARE_CODES.indexOf('\n') > -1) {
    console.log(`您的互助码选择的是用换行隔开\n`)
    shareCodes = process.env.DREAM_FACTORY_SHARE_CODES.split('\n');
  } else {
    shareCodes = process.env.DREAM_FACTORY_SHARE_CODES.split();
  }
} else if (process.env.DREAM_FACTORY_SHARE_CODES) {
  console.log(`由于您secret里面未提供助力码，故此处运行将会给脚本内置的码进行助力，请知晓！`)
}
for (let i = 0; i < shareCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['shareCodes' + index] = shareCodes[i];
}
