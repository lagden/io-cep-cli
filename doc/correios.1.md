# correios(1) -- Busca dados de uma localidade

## SYNOPSIS

`correios` \[`options`\] <_input_>

## DESCRIPTION

Busca por informações de uma localidade através do endereço ou CEP utilizando os [Correios](http://www.correios.com.br/)

## OPTIONS

### `-h`, `--help`

```sh
correios --help
```

Output short usage information.

### `-v`, `--version`

```sh
correios --version
```

Output CLI version number.

## USAGE

### Por CEP

```sh
correios 04653055
```

### Por endereço

```sh
correios "Rua Primo Modolin"
```

## DIAGNOSTICS

`correios` exits 0 on success, and 1 otherwise.

## BUGS

<https://github.com/lagden/io-cep/issues>

## AUTHOR

Written by Thiago Lagden <mailto:lagden@gmail.com>
