/**
 *  created by ling on 2017-12-25 09:09.
 */

import React from "react";
import { NavBar, Icon } from 'antd-mobile';

const AppBar = ({model,icon,onLeftClick,rightContent,title}) => {
    return(
        <div>
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => window.history.back()}
                rightContent = {rightContent?rightContent:[
                    <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    <Icon key="1" type="ellipsis" />,
                ]}
            >{title?title:"贫农记账本"}</NavBar>
        </div>
    )
};

export default AppBar;