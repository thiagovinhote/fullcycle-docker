# INICIANDO COM DOCKER

## Desafio Go

### Descrição

Ter o seguinte resultado: `Code.education Rocks!`<br/>
A imagem do projeto Go precisa ter menos de 2MB

### Exemplos

> docker pull [thiagovinhote/codeeducation](https://hub.docker.com/r/thiagovinhote/codeeducation)

```bash
docker run thiagovinhote/codeeducation
Code.education Rocks!
```

```bash
docker run thiagovinhote/codeeducation Stars
Code.education Stars!
```

```bash
docker run thiagovinhote/codeeducation Challenge Go
Code.education Challenge, Go!
```

## Nginx com NodeJs

```bash
cd nginx-com-nodejs
```

```bash
docker-compose up -d
docker-compose logs -f --tail=50
```

> Acessar http://localhost:8080
