import { library } from '@fortawesome/fontawesome-svg-core';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { TabPane, Tabs } from './components/Tabs';

library.add(faRocket);

function App() {
  return (
    <div style={{ margin: 30 }}>
      <Tabs defaultActiveKey="2" type="card" mode="vertical">
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
