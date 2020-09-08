/**
 * 调用方式
 * this.$utils.enterFullScreen();
 */

let Tools = {
  //全屏
  enterFullScreen() {
    let el = document.documentElement
    let rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen
    if (rfs) { // typeof rfs != "undefined" && rfs
      rfs.call(el)
    } else if (typeof window.ActiveXObject !== 'undefined') {
      // for IE，这里其实就是模拟了按下键盘的F11，使浏览器全屏
      let wscript = new ActiveXObject('WScript.Shell')
      if (wscript != null) {
        wscript.SendKeys('{F11}')
      }
    }
  },
  /**
   * constrcut 方法
   * 根据提供的 id, pid 和 children 将一个个节点构建成一棵或者多棵树
   * @param nodes 节点对象
   * @param config 配置对象
   *
   * 	const data = [
		{id: 6, parent_id: 2, data: '这是其他数据'},
		{id: 7, parent_id: 3, data: '这是其他数据'},
		{id: 2, parent_id: 1, data: '这是其他数据'},
		{id: 4, parent_id: 2, data: '这是其他数据'},
		{id: 1, parent_id: 0, data: '这是其他数据'},
		{id: 9, parent_id: 5, data: '这是其他数据'},
		{id: 8, parent_id: 3, data: '这是其他数据'},
		{id: 3, parent_id: 1, data: '这是其他数据'},
		{id: 5, parent_id: 2, data: '这是其他数据'},
		{id: 10, parent_id:6, data: '这是其他数据'}
	];

	const result = this.$utils.construct(data, {
		id: 'id',
		pid: 'parent_id',
		children: 'kids'
	});

	console.log(JSON.stringify(result, null, '\t'));
   */
  construct(nodes, config) {
    var id = config && config.id || 'id';
    var pid = config && config.pid || 'pid';
    var children = config && config.children || 'children';
    var idMap = {};
    var jsonTree = [];
    nodes.forEach(function(v) {
      idMap[v[id]] = v;
    });
    nodes.forEach(function(v) {
      var parent = idMap[v[pid]];
      if (parent) {
        !parent[children] && (parent[children] = []);
        parent[children].push(v);
      } else {
        jsonTree.push(v);
      }
    });
    return jsonTree;
  },
  /**
   * destruct 方法
   * 根据配置的 id, pid 和 children 把解构化的树型对象拆解为一个个节点
   * @param forest 单个或者多个树型对象
   * @param config 配置
   *const data2 = [
          {
            "id": 1,
            "data": "这是其他数据",
            "kids": [
              {
                "id": 2,
                "data": "这是其他数据",
                "kids": [
                  {
                    "id": 6,
                    "data": "这是其他数据",
                    "kids": [
                      {
                        "id": 10,
                        "parent_id": 6,
                        "data": "这是其他数据"
                      }
                    ]
                  },
                  {
                    "id": 4,
                    "data": "这是其他数据"
                  },
                  {
                    "id": 5,
                    "data": "这是其他数据",
                    "kids": [
                      {
                        "id": 9,
                        "data": "这是其他数据"
                      }
                    ]
                  }
                ]
              },
              {
                "id": 3,
                "data": "这是其他数据",
                "kids": [
                  {
                    "id": 7,
                    "data": "这是其他数据"
                  },
                  {
                    "id": 8,
                    "data": "这是其他数据"
                  }
                ]
              }
            ]
          }
        ];

        const destructedData = destruct(data2, {
          pid: 'parent_id', // 展开后的父节点 id 名称
          children: 'kids', // 子节点名称
        })

        console.log(destructedData)
   *
   *
   *
   */
  destruct(forest, config) {
    var id = config && config.id || 'id';
    var pid = config && config.pid || 'pid';
    var children = config && config.children || 'children';

    function flatTree(tree) {
      var queue = [tree];
      var result = [];
      var _loop_1 = function() {
        var _a;
        var currentNode = queue.shift();
        if (currentNode.hasOwnProperty(id)) {
          if (!currentNode.hasOwnProperty(pid)) {
            currentNode = __assign({}, currentNode, (_a = {}, _a[pid] = null, _a));
          }
          if (currentNode[children]) {
            currentNode[children].forEach(function(v) {
              var _a;
              return queue.push(__assign({}, v, (_a = {}, _a[pid] = currentNode[id], _a)));
            });
          }
          result.push(currentNode);
          delete currentNode[children];
        } else {
          throw new Error('you need to specify the [id] of the json tree');
        }
      };
      while (queue.length) {
        _loop_1();
      }
      return result;
    }
    if (Array.isArray(forest)) {
      return forest.map(function(v) {
        return flatTree(v);
      }).reduce(function(pre, cur) {
        return pre.concat(cur);
      });
    } else {
      return flatTree(forest);
    }
  },

}

export default Tools
