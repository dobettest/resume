declare namespace TSRcReduxModel {
  interface D {
    [key: string]: any;
  }
  export interface Props<S = D, A = D, R = D> {
    /**
     * @descrption 命名空间,唯一，必须
     */
    namespace: string;
    /**
     * @descrption 数据状态,必须
     */
    state: S;
    /**
     * @descption 动作,非必须
     */
    action?: A;
    /**
     * @descption 
     */
    reducers?: R;
    /**
     * @descption 是否开启Immutable,非必须
     */
    openSeamlessImmutable?: boolean

  }
}
declare module "rc-redux-model"