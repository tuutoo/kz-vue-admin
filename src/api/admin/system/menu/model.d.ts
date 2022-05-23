declare namespace API {
  type MenuListResultItem = {
    createAt: string;
    updatedAt: string;
    id: string;
    parentId: string;
    name: string;
    title: string;
    path: string;
    permission: string;
    type: number;
    icon: string;
    orderNo: number;
    component: string;
    keepAlive: boolean;
    external: boolean;
    hideMenu: boolean;
  };

  /** 获取菜单列表参数 */
  type MenuListResult = MenuListResultItem[];

  /** 新增菜单参数 */
  type MenuAddParams = {
    type: number;
    parentId: string;
    name: string;
    title: string;
    orderNo: number;
    path: string;
    component: string;
    icon: string;
    permission: string;
    hideMenu: boolean;
    external: boolean;
    keepAlive: boolean;
  };

  /** 更新某项菜单参数 */
  type MenuUpdateParams = MenuAddParams & {
    id: string;
  };

  /** 获取菜单详情结果 */
  type MenuInfoResult = {
    menu: {
      createAt: string;
      updateTime: string;
      id: string;
      parentId: string;
      name: string;
      path: string;
      permission: string;
      type: number;
      icon: string;
      orderNo: number;
      component: string;
      keepAlive: boolean;
      external: boolean;
      hideMenu: boolean;
    };
    parentMenu: {
      createAt: string;
      updateTime: string;
      id: string;
      parentId: string;
      name: string;
      title: string;
      path: string;
      permission: string;
      type: number;
      icon: string;
      orderNo: number;
      component: string;
      keepAlive: boolean;
      hideMenu: boolean;
    };
  };
}
