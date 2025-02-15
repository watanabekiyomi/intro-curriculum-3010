'use strict';
const assert = require('assert');
const todo = require('./index.js');

// テストの前に永続化されているファイルを消す


  // add と list のテスト
  todo.todo('ノートを買う');
  todo.todo('鉛筆を買う');
  assert.deepStrictEqual(todo.list(), ['ノートを買う', '鉛筆を買う']);

  // done と donelist のテスト
  todo.done('鉛筆を買う');
  assert.deepStrictEqual(todo.list(), ['ノートを買う']);
  assert.deepStrictEqual(todo.donelist(), ['鉛筆を買う']);

  // del のテスト
  todo.del('ノートを買う');
  todo.del('鉛筆を買う');
  assert.deepStrictEqual(todo.list(), []);
  assert.deepStrictEqual(todo.donelist(), []);

  console.log('テストが正常に完了しました');
