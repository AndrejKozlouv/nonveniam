import { School } from './school';

interface MySchool {
  name: string;
  students: string[];
}

const mySchool: MySchool = {
  name: 'My School',
  students: ['Alice', 'Bob', 'Charlie']
};

export default mySchool;
