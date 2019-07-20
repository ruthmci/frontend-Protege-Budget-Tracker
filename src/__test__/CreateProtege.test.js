import React from 'react';
import ReactDOM from 'react-dom';
import CreateProtege from '../components/CreateProtege';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

const protegeData = [{
  "protege": {
  "_id": "5d26b687a7946c6d37dcfdde",
  "protegename": "El",
  "protegeemail": "Elizabeth@myob.com.au",
  "expenditure": 0,
  "balance": 1000,
  "createdAt": "2019-07-11T04:09:43.804Z",
  "updatedAt": "2019-07-18T00:37:55.952Z",
  "__v": 0
  }}
]

describe('<CreateProtege />', () => {
  it('renders <ProtegeData /> components', () => {
    const wrapper = shallow(<CreateProtege protegeData={protegeData}/>);
  });
  expect(protegeData).toMatchSnapshot();
})

