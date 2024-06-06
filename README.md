# YMA Filesize

格式化文件大小

## Install

```sh
npm install yma-filesize
```

## Usage

```js
const filesize = require('yma-filesize');
filesize(1234567890); // output 1.15 GB
```

## Options

###### bits

是否启用 bit 单位

-   Boolean
-   Default: `false`

###### base

所待计算的 size 为 10 机制 or 2 进制

-   Number
-   Default: `10`

###### exponent

最大单位，-1 为自动计算最为接近的单位，2 即为 MB

-   Number
-   Default: `-1`

###### output

输出类型

-   String
-   Default: `string`
-   Optional: `string` | `array` | `object`

###### pad

对计算结果用 0 进行填充

-   Boolean
-   Default: `false`

###### precision

精度计算

-   Number
-   Default: `0`

###### round

小数位

-   Number
-   Default: `2`
