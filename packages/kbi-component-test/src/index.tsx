// kbi-component-test
// @author kinghoo <970489393@qq.com>
// @create 2021-08-23T05:21:28.400Z

import * as React from 'react';
import './index.less';

export interface ITestCompProps {}

/**
 * TestComp
 * @description 测试组件
 * @author kinghoo
 * @version 0.1.0
 * @create 2021-08-13 20:38
 */
const TestComp: React.FC<ITestCompProps> = (props) => {
  const { style, className, id, children } = props as any;
  return (
    <div style={style} id={id} className={className}>
      {new Date().toISOString()}测试组件{children}
    </div>
  );
};

export default TestComp;
