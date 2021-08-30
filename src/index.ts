import { Sorter } from './Sorter';
import { NUmbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LInkedList';

const numbersCollection = new NUmbersCollection([1, 2, 45, 67, 98, 54, -5, 67]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersColection = new CharactersCollection(
	'klhfjskdlnlVBMCXNV,MXCNCBVM,XNRLKWIRUEWLIasdmasdjakdjakhgdkhn,bvmdmeoteotierot'
);
charactersColection.sort();
console.log(charactersColection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-76);
linkedList.sort();
linkedList.print();
