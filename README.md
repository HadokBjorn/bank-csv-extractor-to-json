# Dados de Bancos Brasileiros

## Sobre

Este projeto contém um script Node.js para extrair informações relevantes de um arquivo CSV de participantes do STR (Sistema de Transferência de Reservas) e gerar um arquivo JSON com dados estruturados, facilitando o uso em aplicações.

## Como usar

1. Coloque o arquivo `ParticipantesSTR.csv` na pasta `src/files-to-extract`.
2. Execute o comando abaixo para rodar o script:

```bash
npm run start
```

3. O resultado será gerado na pasta `src/files-results` com o nome `bankArray.json`.

## Estrutura do JSON gerado

Cada objeto do array contém:
- `ispb`: Código ISPB do banco
- `code`: Código do banco
- `name`: Nome do banco

## Requisitos

- Node.js
- Arquivo CSV

## Licença

Este projeto é livre para uso pessoal e educacional.