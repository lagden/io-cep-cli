# io-cep-cli [![Build Status](https://travis-ci.org/lagden/io-cep-cli.svg?branch=master)](https://travis-ci.org/lagden/io-cep-cli) [![Awesome](http://cdn.lagden.in/awesome/badge.svg)](https://github.com/lagden/awesome-nodejs)

> Search address using zip code through Correios


## CLI

```
┌─────────────────┬──────────────┬────────────┬────┬──────────┬──────────┐
│ logradouro      │ bairro       │ localidade │ uf │ cep      │ req      │
├─────────────────┼──────────────┼────────────┼────┼──────────┼──────────┤
│ Avenida Jandira │ Indianópolis │ São Paulo  │ SP │ 04080001 │ 04080001 │
└─────────────────┴──────────────┴────────────┴────┴──────────┴──────────┘
```


#### Install

```
$ npm i -g io-cep-cli
```


#### Usage

```
$ cep 04080001
```

or

```
$ cep 04080-001
```


## License

MIT © [Thiago Lagden](http://lagden.in)
