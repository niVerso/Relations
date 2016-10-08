const relation = {
  '0': { '1': { '2': { '3': { '4': {
    '5a': { '6a': {
      '7c': { '8c': { '9c': '10c' } },
      '7d': { '8d': { '9d': '10d' } }
    } },
    '5b': { '6b': { '7b': { '8b': { '9b': '10b'} } } }
    } } } } }
}

const ant = {
  '10c': '9c',
  '10d': '9d',
  '10b': '9b',
  '9c': '8c',
  '9d': '8d',
  '9b': '8b',
  '8c': '7c',
  '8d': '7d',
  '8b': '7b',
  '7c': '6a',
  '7d': '6a',
  '7b': '6b',
  '6a': '5a',
  '6b': '5b',
  '5a': '4',
  '5b': '4',
  '4': '3',
  '3': '2',
  '2': '1',
  '1': '0'
};

const type = {
  '10c': 10,
  '10d': 10,
  '10b': 10,
  '9c': 10,
  '9d': 10,
  '9b': 10,
  '8c': 10,
  '8d': 10,
  '8b': 10,
  '7c': 20,
  '7d': 20,
  '7b': 10,
  '6a': 10,
  '6b': 10,
  '5a': 20,
  '5b': 20,
  '4': 10,
  '3': 10,
  '2': 10,
  '1': 10
};

let isVersion = (v) => v in ant || v === 0;

let pathToRoot = (v) => {
  if (!isVersion(v)) return [];
  let res = [v];
  let _tmp = ant[v];
  while (_tmp) {
    res.push(_tmp);
    _tmp = ant[_tmp];
  }
  return res;
};

let typeToRoot = (v) => {
  let arr = pathToRoot(v);
  arr.pop();
  let res = arr.map((el) => type[el]);
  return res;
};

exports.root = '0';
exports.isVersion = isVersion;
exports.pathToRoot = pathToRoot;
exports.typeToRoot = typeToRoot;
