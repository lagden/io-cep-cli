# io-cep-cli

[![NPM version][npm-img]][npm]
[![Build Status][ci-img]][ci]
[![Coverage Status][coveralls-img]][coveralls]
[![devDependency Status][devDep-img]][devDep]
[![XO code style][xo-img]][xo]

[npm-img]:       https://img.shields.io/npm/v/io-cep-cli.svg
[npm]:           https://www.npmjs.com/package/io-cep-cli
[ci-img]:        https://travis-ci.org/lagden/io-cep-cli.svg
[ci]:            https://travis-ci.org/lagden/io-cep-cli
[coveralls-img]: https://coveralls.io/repos/github/lagden/io-cep-cli/badge.svg?branch=master
[coveralls]:     https://coveralls.io/github/lagden/io-cep-cli?branch=master
[devDep-img]:    https://david-dm.org/lagden/io-cep-cli/dev-status.svg
[devDep]:        https://david-dm.org/lagden/io-cep-cli#info=devDependencies
[xo-img]:        https://img.shields.io/badge/code_style-XO-5ed9c7.svg
[xo]:            https://github.com/sindresorhus/xo


Busca por informações de uma localidade através do endereço ou CEP utilizando os [Correios](http://www.correios.com.br/)


## CLI

![Demo CLI](https://raw.githubusercontent.com/lagden/io-cep-cli/master/demo.gif)


#### Install

```
$ npm i -g io-cep-cli
```


#### Usage

### Por CEP

```
$ correios 04080001
```

### Por endereço

```
$ correios "Rua Primo Modolin"
```


## License

MIT © [Thiago Lagden](http://lagden.in)
