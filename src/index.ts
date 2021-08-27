import { Sorter } from './Sorter';
import { NUmbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NUmbersCollection([1, 2, 45, 67, 98, 54, -5, 67]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection(
	'fskjfskjfskjgKJFDKJKKZk;ljkxlkfjgdlkjglskjLAJLkjgflsjdflk<akxz<mlAASjkAJ'
);
const charsSorter = new Sorter(charactersCollection);
charsSorter.sort();
console.log(charactersCollection.data);
