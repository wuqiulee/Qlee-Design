import { library } from '@fortawesome/fontawesome-svg-core';
import { faMoon, faRocket } from '@fortawesome/free-solid-svg-icons';
import { TabPane, Tabs } from './components/Tabs';
import Icon from './components/Icon';

library.add(faMoon, faRocket);

function App() {
  return (
    <div style={{ margin: 30 }}>
      <Tabs
        defaultActiveKey="2"
        type="card"
        mode="vertical"
        tabBarExtraContent={<Icon icon="moon" theme="danger" />}
      >
        <TabPane tab="tab1" itemKey="1" disabled>
          <div style={{ color: 'red' }}>child1</div>
        </TabPane>
        <TabPane tab="tab2" itemKey="2" closable>
          child2
        </TabPane>
        <TabPane tab="tab3" itemKey="3" closable>
          child3
        </TabPane>
      </Tabs>
    </div>
  );
}

export default App;
