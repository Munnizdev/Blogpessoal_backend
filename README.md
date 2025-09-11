# Backend do Blog Pessoal

Este é o repositório do backend do meu blog pessoal, desenvolvido em **NestJS** com autenticação segura e documentação via Swagger.

---

## Tecnologias Utilizadas
- Node.js + NestJS  
- Express  
- TypeORM (MySQL, PostgreSQL, SQLite)  
- Passport + JWT  
- bcrypt para hashing de passwords  
- class-validator / class-transformer  
- Swagger (documentação da API)  
- ESLint + Prettier  
- Jest + Supertest  
- TypeScript  

---

## Segurança da API

Autenticação JWT com expiração configurada

Hashing de passwords com bcrypt

Validação e sanitização de dados (evita SQL/NoSQL Injection)

Helmet para reforço de cabeçalhos HTTP

Rate limiting contra ataques de força bruta

CORS restrito a domínios autorizados

Variáveis de ambiente para segredos e credenciais

## Rotas Principais

POST /auth/register → Registar utilizador

POST /auth/login → Autenticar utilizador

GET /posts → Listar artigos

POST /posts → Criar artigo (autenticado)

PUT /posts/:id → Atualizar artigo

DELETE /posts/:id → Apagar artigo

## Boas Práticas de Deploy

Usar HTTPS (TLS)

Configurar variáveis de ambiente no servidor

Monitorizar com PM2/NGINX

Backups regulares da base de dados
