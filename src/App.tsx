import React from 'react';
import Button from './components/Button';
import Banner from './components/Banner';
import { TabPane, Tabs } from './components/Tabs';

function App() {
  return (
    /*  <div style={{ margin: 50 }}>
      <Button btnType="primary" theme="light" style={{ color: 'purple' }} block>
        hello
      </Button>
      <Button disabled onClick={() => alert(1)}>
        hello
      </Button>
      <Button btnType="secondary" theme="light">
        hello
      </Button>
      <Button btnType="tertiary" theme="light">
        hello
      </Button>
      <Button btnType="warning" theme="light">
        hello
      </Button>
      <hr />
      <Button size="default">hello</Button>
      <Button btnType="danger" theme="solid">
        hello1313
      </Button>
      <Button btnType="secondary" theme="borderless">
        hello
      </Button>
      <Button btnType="tertiary" theme="solid" disabled>
        hello
      </Button>
      <Button btnType="warning" theme="solid" disabled>
        hello
      </Button>
    </div> */

    // <div style={{ margin: 50 }}>
    //   <Banner
    //     type="info"
    //     description={<div style={{ color: 'red' }}>banner</div>}
    //     title={<div>"adad"</div>}
    //   />
    //   <Banner type="danger" description="A pre-released version is available." />
    //   <Banner type="success" description="A pre-released version is available." />
    //   <Banner
    //     type="warning"
    //     description="A pre-released version is available."
    //     fullMode
    //     bordered
    //     title="我是标题"
    //     style={{ color: 'blue' }}
    //     onClick={(e) => {
    //       console.log(e);
    //       alert(22);
    //     }}
    //   />
    // </div>
    <div style={{ margin: 30 }}>
      <Tabs defaultActiveKey="2">
        <TabPane tab="tab1" itemKey="1">
          <div style={{ color: 'red' }}>child1</div>
        </TabPane>
        <TabPane tab="tab2" itemKey="2">
          child2
        </TabPane>
        <TabPane tab="tab3" itemKey="3">
          child3
        </TabPane>
      </Tabs>
    </div>
  );
}

export default App;