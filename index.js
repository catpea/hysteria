// const p = new Parser();
//
// const data = `I: Bus=0003 Vendor=046d Product=c33a Version=0111`; // this is the thing we want to parse.
//
// const numericAssignment = p.match(/[A-Za-z0-9]+=\d+/);
// const nullaryAssignment = p.match(/[A-Za-z0-9]+= /);
//
// p.struct([
//     p.match(/[A-Z]{1}: /),
//     any([
//       nullaryAssignment,
//       numericAssignment,
//     ])
// ])
//
// p.parse(data,structure);

class Parser(){

}

export default Parser;
