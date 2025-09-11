# Backend Blog Pessoal

Este é o repositório do **backend** do meu blog.  
A aplicação foi desenvolvida para gerir artigos, categorias, utilizadores e comentários, fornecendo uma API RESTful.  

---

## Tecnologias Utilizadas
- **Node.js** com **Express**
- **MongoDB** com Mongoose (ou PostgreSQL, caso alterado)
- **JWT (JSON Web Tokens)** para autenticação
- **bcrypt** para hashing de passwords
- **Dotenv** para variáveis de ambiente

---

## Segurança da API
A segurança é uma prioridade neste projeto. Foram aplicadas as seguintes práticas:

### Autenticação JWT
- Todas as rotas privadas requerem um token JWT válido.  
- Tokens têm tempo de expiração configurado para reduzir riscos.  

### Hashing de Passwords
- Passwords são encriptadas com bcrypt antes de serem guardadas na base de dados.  

### Validação de Dados
- Uso de middlewares para sanitizar inputs e evitar:
  - SQL Injection
  - NoSQL Injection
- Todos os campos obrigatórios são validados antes de processar requisições.  

### Proteções Adicionais
- `helmet` → reforça cabeçalhos HTTP.  
- `express-rate-limit` → protege contra ataques de força bruta.  

### CORS Configurado
- Apenas domínios autorizados podem consumir a API.  

### Variáveis de Ambiente
- Credenciais e chaves secretas não ficam no código.  
- Arquivo `.env` é usado para configurar um ambiente seguro.  

---

## Rotas Principais
### Autenticação
- `POST /auth/register` → Registar utilizador  
- `POST /auth/login` → Autenticar utilizador e gerar token  

### Posts
- `GET /posts` → Listar artigos públicos  
- `POST /posts` → Criar artigo (apenas utilizadores autenticados)  
- `PUT /posts/:id` → Atualizar artigo  
- `DELETE /posts/:id` → Apagar artigo  

---

## Boas Práticas de Deploy
- Usar HTTPS (TLS) em produção.  
- Configurar variáveis de ambiente em servidores (ex: Docker, Heroku, VPS).  
- Monitorizar logs e tráfego com ferramentas como PM2 ou NGINX.  
- Realizar backups regulares da base de dados.  

Realizar backups regulares da base de dados.
