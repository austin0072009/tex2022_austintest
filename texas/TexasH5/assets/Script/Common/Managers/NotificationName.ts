/*
 * @Description: 全局事件枚举
 * @Version: CocosCreator V2.2.2
 * @Autor: sin2021
 * @Date: 2020-03-31 10:27:35
 * @LastEditors: sin2021
 * @LastEditTime: 2020-05-09 13:30:09
 */

export default class NotificationName {
   static AppUpdate = cc.Enum({
      APP_UPDATE_FINISHED: "app-update-finished",//热更新完成
      APP_UPDATE_SUCCESS: "app-Update-success",//热更新成功
   });

   static AppEnterScene = cc.Enum({
      APP_ENTER_START: "app-enter-start",//进入Start
   });

   static NetWork_Event = cc.Enum
      (
         {
            SOCKET_CONNECT_SUC_EVENT: "socket_connect_suc_event",
            SOcKET_TEST_FINISHED_EVENT: "socket_test_finished_event"
         }
      );
   static DATA_ROOM_ENTER = cc.Enum({
      DATA_ENTER: "dataOver",
   });
}


