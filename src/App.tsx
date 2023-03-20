import React from 'react';
import Button from './components/Button';

function App() {
  return (
    <div style={{ margin: 50 }}>
      <Button btnType="primary" theme="light">
        hello
      </Button>
      <Button>hello</Button>
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
        hello
      </Button>
      <Button btnType="secondary" theme="borderless">
        hello
      </Button>
      <Button btnType="tertiary" theme="solid">
        hello
      </Button>
      <Button btnType="warning" theme="solid">
        hello
      </Button>
    </div>
  );
}

export default App;
