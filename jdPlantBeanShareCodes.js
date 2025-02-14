/*
京东种豆得豆互助码
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写东东萌宠的好友码。
// github action用户的好友互助码填写到Action->Settings->Secrets->new Secret里面(Name填写 PLANT_BEAN_SHARECODES(此处的Name必须按此来写,不能随意更改),内容处填写互助码,填写规则如下)
// 同一个京东账号的好友互助码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
let PlantBeanShareCodes = [
  '3xd6hi7wz3detzueuft3fjnaq6shonvreqhvugy@nkvdrkoit5o65hgsezt2hkynoeq3olf63v6icua@fb227jqogvovf4dzt65kyksuqq3h7wlwy7o5jii@2glpkm3dt2ujt5eufktgoxeewa5ac3f4ijdgqji@anvpoh7gttncs535ikqc3dfbbsnst3auzw6gmjq@e7lhibzb3zek3l2je2y7rjczlz3sq4c6e2r72di@mlrdw3aw26j3xrwlavyve554fsprq7lxnn2esoa@7ii2tqua5cw4cuvznmvewfo7gbrfz5c4dyurxen5sazkv5ctbrdq',//账号一的好友shareCode,不同好友中间用@符号隔开
  '3xd6hi7wz3detzueuft3fjnaq6shonvreqhvugy@nkvdrkoit5o65hgsezt2hkynoeq3olf63v6icua@fb227jqogvovf4dzt65kyksuqq3h7wlwy7o5jii@2glpkm3dt2ujt5eufktgoxeewa5ac3f4ijdgqji@anvpoh7gttncs535ikqc3dfbbsnst3auzw6gmjq@e7lhibzb3zek3l2je2y7rjczlz3sq4c6e2r72di@mlrdw3aw26j3xrwlavyve554fsprq7lxnn2esoa@7ii2tqua5cw4cuvznmvewfo7gbrfz5c4dyurxen5sazkv5ctbrdq',//账号二的好友shareCode，不同好友中间用@符号隔开
  'matkhgd7mbz37lzuzil22je42u@4npkonnsy7xi2envp5rwoexcexrsazqrqdw33mq@ebxm5lgxoknqcrdlmn55d2u4qskzr7rejsr3dda@66nvo67oyxpydkd2an7kxh6vlipn2g3l6scyq7a',
]
// 判断github action里面是否有种豆得豆互助码
if (process.env.PLANT_BEAN_SHARECODES) {
  if (process.env.PLANT_BEAN_SHARECODES.indexOf('&') > -1) {
    console.log(`您的种豆互助码选择的是用&隔开\n`)
    PlantBeanShareCodes = process.env.PLANT_BEAN_SHARECODES.split('&');
  } else if (process.env.PLANT_BEAN_SHARECODES.indexOf('\n') > -1) {
    console.log(`您的种豆互助码选择的是用换行隔开\n`)
    PlantBeanShareCodes = process.env.PLANT_BEAN_SHARECODES.split('\n');
  } else {
    PlantBeanShareCodes = process.env.PLANT_BEAN_SHARECODES.split();
  }
} else if (process.env.JD_COOKIE) {
  console.log(`由于您secret里面未提供助力码，故此处运行将会给脚本内置的码进行助力，请知晓！`)
}
for (let i = 0; i < PlantBeanShareCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['PlantBeanShareCodes' + index] = PlantBeanShareCodes[i];
}
