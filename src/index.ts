import { Sorter } from './Sorter';
import { NUmbersCollection } from './NumbersCollection';

const numbersCollection = new NUmbersCollection([1, 2, 45, 67, 98, 54, -5, 67]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
