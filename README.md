# fiap-tech-challenge-hackaton-web-mfe

Este projeto é um microfrontend desenvolvido com [Next.js](https://nextjs.org/) e utiliza o conceito de **Module Federation** para integração com outros módulos. A arquitetura segue os princípios de **Clean Architecture**, promovendo separação de responsabilidades, testabilidade e facilidade de manutenção.

## Tecnologias Utilizadas

- **Next.js**: Framework React para aplicações web modernas, com renderização híbrida (SSR/SSG).
- **React**: Biblioteca para construção de interfaces de usuário.
- **Module Federation**: Permite que diferentes aplicações compartilhem módulos em tempo de execução, facilitando a composição de microfrontends.
- **TypeScript**: Tipagem estática para maior segurança e produtividade.
- **Clean Architecture**: Estrutura que separa regras de negócio, interfaces e frameworks, tornando o código mais organizado e escalável.

## Começando

Para iniciar o servidor de desenvolvimento, execute:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra [http://localhost:3001](http://localhost:3001) no navegador para visualizar o microfrontend.

## Estrutura do Projeto

- `pages/`: Páginas da aplicação.
- `components/`: Componentes reutilizáveis.
- `modules/`: Módulos federados para integração com outros microfrontends.
- `core/`: Camada de domínio e regras de negócio (Clean Architecture).
- `infra/`: Implementações de infraestrutura, como APIs e serviços.

## Module Federation

Este microfrontend está configurado para expor e consumir módulos via **Module Federation**, permitindo integração dinâmica com outros sistemas e equipes independentes.

## Saiba Mais

- [Documentação Next.js](https://nextjs.org/docs)
- [Documentação Module Federation](https://webpack.js.org/concepts/module-federation/)
- [Clean Architecture - Robert C. Martin](https://github.com/cleanfolder/clean-architecture)

## Contributors

[Cibele Santos](https://github.com/cibsantos)                                             | [Flávia Jaconis](https://github.com/flaJaconis)                                             |[Malu Pereira](https://github.com/malulupereiraa)                                                    | [Thiago Martins](https://github.com/thiagofm33)                                             | [Victor Dantas](https://github.com/victorx9999)
------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------
[<img src="https://github.com/cibsantos.png" width="90" />](https://github.com/cibsantos) | [<img src="https://github.com/flaJaconis.png" width="90" />](https://github.com/flaJaconis) | [<img src="https://github.com/malulupereiraa.png" width="90" />](https://github.com/malulupereiraa) | [<img src="https://github.com/thiagofm33.png" width="90" />](https://github.com/thiagofm33) | [<img src="https://github.com/victorx9999.png" width="90" />](https://github.com/victorx9999)
RM359376                                                                                  | RM358799                                                                                    | RM358717                                                                                            | RM359578                                                                                    | RM359148


