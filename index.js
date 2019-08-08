const data = [
    { name: 'news', parent: '' },
    { name: 'tech', parent: 'news' },
    { name: 'sport', parent: 'news' },
    { name: 'music', parent: 'news' },
    { name: 'ai', parent: 'tech', amount: 7 },
    { name: 'coding', parent: 'tech', amount: 5 },
    { name: 'tablets', parent: 'tech', amount: 4 },
    { name: 'laptops', parent: 'tech', amount: 6 },
    { name: 'd3', parent: 'tech', amount: 3 },
    { name: 'gaming', parent: 'tech', amount: 3 },
    { name: 'football', parent: 'sport', amount: 6 },
    { name: 'hockey', parent: 'sport', amount: 3 },
    { name: 'baseball', parent: 'sport', amount: 5 },
    { name: 'tennis', parent: 'sport', amount: 6 },
    { name: 'f1', parent: 'sport', amount: 1 },
    { name: 'house', parent: 'music', amount: 3 },
    { name: 'rock', parent: 'music', amount: 2 },
    { name: 'punk', parent: 'music', amount: 5 },
    { name: 'jazz', parent: 'music', amount: 2 },
    { name: 'pop', parent: 'music', amount: 3 },
    { name: 'classical', parent: 'music', amount: 5 },
  ];
  
const data2 = [
  {
      "name": "0",
      "type": "fr",
      "label": "Provide stream of molten glue",
      "parent": ""
  },
  {
      "name": "1",
      "type": "ds",
      "label": "Glue Gun",
      "parent": "0"
  },
  {
      "name": "2",
      "type": "fr",
      "label": "Melt glue stick",
      "parent": "1"
  },
  {
      "name": "3",
      "type": "c",
      "label": "Glue stick material",
      "parent": "11"
  },
  {
      "name": "4",
      "type": "fr",
      "label": "Guide glue onto surface",
      "parent": "1"
  },
  {
      "name": "5",
      "type": "fr",
      "label": "Control gun",
      "parent": "1"
  },
  {
      "name": "6",
      "type": "c",
      "label": "Ergonomics of human hand",
      "parent": "13"
  },
  {
      "name": "7",
      "type": "fr",
      "label": "Feed glue stick",
      "parent": "1"
  },
  {
      "name": "8",
      "type": "c",
      "label": "Glue stick size",
      "parent": "14"
  },
  {
      "name": "9",
      "type": "fr",
      "label": "Contain parts",
      "parent": "1"
  },
  {
      "name": "10",
      "type": "fr",
      "label": "Place gun down when not in use",
      "parent": "1"
  },
  {
      "name": "11",
      "type": "ds",
      "label": "Thermal/electric element",
      "parent": "2",
      "amount": 1
  },
  {
      "name": "12",
      "type": "ds",
      "label": "Nozzle",
      "parent": "4",
      "amount": 2
  },
  {
      "name": "13",
      "type": "ds",
      "label": "Pistol grip",
      "parent": "5",
      "amount": 3
  },
  {
      "name": "14",
      "type": "ds",
      "label": "Trigger mechanism",
      "parent": "7",
      "amount": 4
  },
  {
      "name": "15",
      "type": "ds",
      "label": "Casing",
      "parent": "9",
      "amount": 5
  },
  {
      "name": "16",
      "type": "ds",
      "label": "Wire stand",
      "parent": "10",
      "amount": 6
  }
];

const svg = d3.select('.canvas')
  .append('svg')
  .attr('width', 1060)
  .attr('height', 800);

const graph = svg.append('g')
  .attr('transform', 'translate(50, 50)'); // to give a 50px margin

const stratify = d3.stratify()
  .id(d => d.name)
  .parentId(d => d.parent);

const rootNode = stratify(data2)
  .sum(d => d.amount);

const pack = d3.pack()
  .size([960, 700])
  .padding(5);

// console.log(pack(rootNode));
console.log(pack(rootNode).descendants());

const bubbleData = pack(rootNode).descendants();


