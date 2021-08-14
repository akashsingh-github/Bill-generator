import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';

// import { ComponentToPrint } from './ComponentToPrint';
import Comp from "./index";



export class ComponentToPrint extends React.PureComponent {
  render(props) {

    return (
      <>
      <div className="print">
        <Comp id={this.props.id}/>
      </div>
      </>
    );
  }
}

const App = (props) => {
  const componentRef = useRef();
  const id = props.id;
  return (
    <div>
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
      <ComponentToPrint ref={componentRef} id={id} />
    </div>
  );
};

export default App;