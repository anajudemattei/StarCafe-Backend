# StarCafé API
Este é um projeto de backend para gerenciar o cardápio de uma cafeteria e permitir que os clientes façam pedidos.

## Endpoints da API

### 1️⃣ **GET /cafes**
Retorna o cardápio da cafeteria, que lista todos os cafés disponíveis.

**Cabeçalhos HTTP**:
- `Accept: application/json`: Indica que o cliente espera uma resposta em formato JSON.
- `Content-Type: application/json`: Define que a resposta estará no formato JSON.

**Códigos de Status**:
- `200 OK`: O cardápio foi retornado com sucesso.
- `500 Internal Server Error`: Ocorreu um erro no servidor ao tentar recuperar o cardápio.

**Exemplo de Resposta (Sucesso)**:
```json
[
  {
    "id": 1,
    "nome": "Café Expresso",
    "valor": 5.00,
    "produto": "Expresso tradicional"
  },
  {
    "id": 2,
    "nome": "Café Latte",
    "valor": 6.50,
    "produto": "Café com leite vaporizado"
  }
]
```

### 2️⃣ POST /cafes
Permite que a administração adicione um novo café ao cardápio.

#### Cabeçalhos HTTP:
- `Accept: application/json`: Indica que a resposta deve ser no formato JSON.
- `Content-Type: application/json`: Define que o corpo da requisição está no formato JSON.

#### Códigos de Status:
- `201 Created`: O café foi adicionado com sucesso.
- `400 Bad Request`: Dados de entrada inválidos (faltando parâmetros obrigatórios).
- `500 Internal Server Error`: Erro no servidor ao adicionar o café.

#### Exemplo de Corpo da Requisição (JSON):
```json
{
  "nome": "Café Mocha",
  "valor": 7.00,
  "produto": "Café com chocolate"
}
```

### 3️⃣ GET /cafes/:id
Consulta o cardápio e retorna um café específico pelo ID.

#### Cabeçalhos HTTP:
- `Accept: application/json`: Indica que a resposta deve ser no formato JSON.
- `Content-Type: application/json`: Define que a resposta será no formato JSON.

#### Códigos de Status:
- `200 OK`: Café encontrado com sucesso.
- `404 Not Found`: Café não encontrado.

#### Exemplo de Resposta (Sucesso):
```json
{
  "id": 1,
  "nome": "Café Expresso",
  "valor": 5.00,
  "produto": "Expresso tradicional"
}
```

### 4️⃣ DELETE /cafes/:id
Remove um café do cardápio pelo ID.

#### Cabeçalhos HTTP:
- `Accept: application/json`: Indica que a resposta deve ser no formato JSON.
- `Content-Type: application/json`: Define que a resposta será no formato JSON.

#### Códigos de Status:
- `200 OK`: Café removido com sucesso.
- `404 Not Found`: Café não encontrado.

#### Exemplo de Resposta (Sucesso):
```json
{
  "id": 1,
  "nome": "Café Expresso",
  "valor": 5.00,
  "produto": "Expresso tradicional"
}
```

## Estrutura do Projeto
A estrutura do projeto segue o padrão **MVC** (Model-View-Controller) para facilitar a organização do código e a separação de responsabilidades:

```bash
src/
├── controllers/
│   ├── starCafeController.js
├── models/
│   ├── starCafe.js
│   ├── starCafeList.js
├── routes/
│   ├── starCafeRoutes.js
├── server.js
```

### Controllers
Contém as funções responsáveis pelas requisições e respostas da API.

### Models
Define as classes e lógica de dados.

### Routes
Organiza as rotas e direciona para os controladores adequados.

### server.js
Arquivo principal para configurar e rodar o servidor Express.

## Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/anajudemattei/StarCafe-Backend.git
   cd StarCafe-Backend
   ```

 2.  ## Instale as dependências:

```bash
npm install
```

3. ## Inicie o servidor:

```bash
npm run dev
```

## Dependências

As dependências do projeto estão listadas no arquivo `package.json`:

- **express**: Framework para construção da API REST.
- **cors**: Middleware para permitir requisições de origens diferentes.
- **dotenv**: Para carregar variáveis de ambiente.
- **uuid**: Para gerar identificadores únicos.
- **nodemon** (devDependency): Para reiniciar o servidor automaticamente durante o desenvolvimento.

## Testando a API

A API pode ser testada usando o Postman ou ferramentas semelhantes. Aqui estão alguns exemplos de como testar os endpoints.

### Exemplo de Requisição:

**POST /cafes**

```http
POST /api/cafes HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Accept: application/json
```
### Corpo da Requisição (JSON):

```json
{
  "nome": "Café Mocha",
  "valor": 7.00,
  "produto": "Café com chocolate"
}
```
### Resposta (201 Created):

```json
{
  "id": 3,
  "nome": "Café Mocha",
  "valor": 7.00,
  "produto": "Café com chocolate"
}
```
