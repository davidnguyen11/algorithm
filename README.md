# Algorithm

## CLI

Set up boilerplate to solve problem. To use CLI, follow below steps

```bash
cd bin/
```

```bash
npm link
```

### Usage

```bash
al new [name] [arguments]
```

**Example 1: without arguments**

```al
al new print-abc
```

*output*

```js
var printAbc = function() {};
```

**Example 2: with arguments**

```al
al new path-sum node sum
```

*output*

```js
var pathSum = function (node, sum) {};
```
