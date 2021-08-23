// kbi-component-text
// @author kinghoo <970489393@qq.com>
// @create 2021-08-23T05:29:58.097Z

import * as React from 'react';
import isNil from 'lodash/isNil';
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
  return <div>{JSON.stringify(isNil(null))}测试组件</div>;
};

export default TestComp;
