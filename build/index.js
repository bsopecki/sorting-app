"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LInkedList_1 = require("./LInkedList");
const numbersCollection = new NumbersCollection_1.NUmbersCollection([1, 2, 45, 67, 98, 54, -5, 67]);
numbersCollection.sort();
console.log(numbersCollection.data);
const charactersColection = new CharactersCollection_1.CharactersCollection('klhfjskdlnlVBMCXNV,MXCNCBVM,XNRLKWIRUEWLIasdmasdjakdjakhgdkhn,bvmdmeoteotierot');
charactersColection.sort();
console.log(charactersColection.data);
const linkedList = new LInkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-76);
linkedList.sort();
linkedList.print();
