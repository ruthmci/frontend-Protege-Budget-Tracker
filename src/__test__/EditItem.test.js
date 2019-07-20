import React from 'react';
import ReactDOM from 'react-dom';
import EditItem from '../components/EditItem';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

const item = [{
  "item": {
    "_id":
    "5d27fc9baaed2d40d86d1774",
  "protege_id":	"5d26b697a7946c6d37dcfddf",
  "description":	"Online course",
  "expenditure": 400,
  "date" :	"2019-07-12T03:20:40.863Z",
  "createdAt":	"2019-07-12T03:20:59.333Z",
  "updatedAt":	"2019-07-12T03:20:59.333Z",
  "__v":	0
  }}]
  
describe('<EditItem />', () => {
  it('renders <Item /> components', () => {
    const wrapper = shallow(<EditItem item={item}/>);
    // expect(wrap.props(item).toEqual({item}))
  });
})

