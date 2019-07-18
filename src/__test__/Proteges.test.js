import React from 'react';
import ReactDOM from 'react-dom';
import Proteges from '../components/Proteges';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

const proteges = [{
  "protege": {
  "_id": "5d26b687a7946c6d37dcfdde",
  "protegename": "El",
  "protegeemail": "Elizabeth@myob.com.au",
  "expenditure": 0,
  "balance": 1000,
  "createdAt": "2019-07-11T04:09:43.804Z",
  "updatedAt": "2019-07-18T00:37:55.952Z",
  "__v": 0
  },
  "items": [
  {
  "_id": "5d2fc1746574fd0573e88cec",
  "protege_id": "5d26b687a7946c6d37dcfdde",
  "description": "Coffee",
  "expenditure": 50,
  "date": "2019-07-18T00:46:38.730Z",
  "createdAt": "2019-07-18T00:46:44.984Z",
  "updatedAt": "2019-07-18T00:46:44.984Z",
  "__v": 0
  }, {
    "_id": "5d2fc1746574fd0573e88cee",
    "protege_id": "5d26b687a7946c6d37dcfdde",
    "description": "Coffee",
    "expenditure": 100,
    "date": "2019-07-18T00:46:38.730Z",
    "createdAt": "2019-07-18T00:46:44.984Z",
    "updatedAt": "2019-07-18T00:46:44.984Z",
    "__v": 0
    }
  ]}
]

describe('<Proteges />', () => {
  it('renders <Proteges /> components', () => {
    const wrapper = shallow(<Proteges proteges={proteges}/>);
  });
  expect(proteges).toMatchSnapshot();
})

