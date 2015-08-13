# io-cep-cli [![Build Status](https://travis-ci.org/lagden/io-cep-cli.svg?branch=master)](https://travis-ci.org/lagden/io-cep-cli)

> Search address using zip code through Correios's form


## CLI

```
┌─────────────────┬──────────────┬────────────┬────┬──────────┬──────────┐
│ logradouro      │ bairro       │ localidade │ uf │ cep      │ req      │
├─────────────────┼──────────────┼────────────┼────┼──────────┼──────────┤
│ Avenida Jandira │ Indianópolis │ São Paulo  │ SP │ 04080001 │ 04080001 │
└─────────────────┴──────────────┴────────────┴────┴──────────┴──────────┘
```


#### Install

**io-cep** works well with standard input.

```
$ npm install -g io-cep-cep
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
