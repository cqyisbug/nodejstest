

//这个是当前程序的运行环境,可以随意指定,ppr.json 就是这么与当前的程序配套起来的
process.env.NODE_ENV = "ppr";

//要在环境变量里面指定当前的配置文件目录哦
process.env.NODE_CONFIG_DIR = "../../config/";

var c = require("config")

console.log(process.env.NODE_ENV);
console.log(process.env.NODE_CONFIG_DIR);

me = c.get("cqy");
str = JSON.stringify(me);
console.log(str);

/*

config 模块是 NPM 上下载量最高的 Node.js 配置文件管理模块，其实现原理与上文中介绍的方法大同小异，在实际开发中我们可以考虑使用这个现成的模块。下面将介绍此模块的简单使用方法。

config模块通过环境变量 NODE_CONFIG_DIR 来指定配置文件所在的目录，默认为./config（即当前运行目录下的config目录），通过环境变量NODE_ENV来指定当前的运行环境版本。

配置文件使用 JSON 格式，模块加载后，会首先载入默认的配置文件${NODE_CONFIG_DIR}/default.json，再载入文件${NODE_CONFIG_DIR}/${NODE_ENV}.json，如果配置项有冲突则覆盖默认的配置。

*/
