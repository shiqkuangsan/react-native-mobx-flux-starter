import React from 'react';
import { Scene, Tabs, Stack, Actions } from 'react-native-router-flux';
import { Icon } from 'native-base';
import DefaultProps from '../constants/navigation';
import AppConfig from '../constants/config';

import Home from 'src/containers/Home';
import Messages from 'src/containers/Messages';
import Activity from 'src/containers/Activity';
import Me from 'src/containers/Me';

const Index = (
  <Stack hideNavBar>
    <Scene hideNavBar>
      <Tabs
        key="tabbar"
        swipeEnabled
        type="replace"
        showLabel={false}
        {...DefaultProps.tabProps}
      >
        <Stack
          key="home"
          title={AppConfig.appName}
          icon={() => <Icon name="planet" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="home" component={Home} rightTitle='消息' onRight={() => Actions.push('message')}/>
          <Scene key="message" component={Messages} title='我的消息'/>
        </Stack>

        <Stack
          key="activity"
          title="Activity"
          icon={() => <Icon name="list" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="activity" component={Activity}/>
        </Stack>

        <Stack
          key="profile"
          title="Profile"
          icon={() => <Icon name="add" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="profile" component={Me}/>
        </Stack>
      </Tabs>
    </Scene>
  </Stack>
);

export default Index;
