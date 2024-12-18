# Docker
<img src="https://miro.medium.com/v2/resize:fit:400/1*OARpkeBkn_Tw3vk8H769OQ.png" alt="docker">

## Conceptos
 - **Contenedor**: Forma de empaquetar las aplicaciones con sus dependencias y archivos de configuracion
 - **Docker Hub**: Repositorio de contenedores
 - **Imagen**:Empaquetado con las dependencias y codigo
 - **Virtualizacion**:Solo virtualizamos la aplicacion y Docker usa el kernel del SO donde se esta ejecutando,haciendo que los contenedores no pesen tanto
 - **Volumes**:Parte del sistema de arhivos de nuestro contenedor la podemos monar dentro de nuestro SO anfitrion
    - **Tipos de Volumes**
    - *Anonimo*:Solo indicamos la ruta que queremos que sea montada y docker se encarga de guardarlo donde quiera,no se pueden refenrecias despues en otro contenedor
    - *Anfitrion o host*:Nosotros decidimos que carpeta montar y donde montarla
    - *Nombrado*:Es como el anonimo sin embargo permite referenciarlo

## Pasos
- Instalar Docker Desktop,viene incluido Docker Compose,CLI(Comand Line Interface)
> https://www.docker.com/products/docker-desktop/


## Comandos Docker

Listado de las imagenes que estan descargadas
```bash
docker images 
```

Descargar una imagen
```bash
docker pull nombre_imagen:version
```

Eliminar una imagen
```bash
docker image rm nombre_imagen:version
```

Crear un contenedor
```bash
docker create nombre_imagen_que_vamos_a_usar
```

Ejecutar un contenedor
```bash
docker start id_contenedor|nombre_contenedor
```

Ver contenedores en ejecucion
```bash
docker ps
```

Detener un contenedor
```bash
docker stop id_contenedor
```

Ver todos los contenedores
```bash
docker ps -a
```

Eliminar un contenedor
```bash
docker rm id_contenedor|nombre_contenedor
```

Crear un contenedor 
```bash
docker create --name nombre_contenedor imgen
```

Crear un contenedor asignandole puertos
```bash
docker create -ppuerto_maquina_fisica:puerto_contenedor --name nombre_contenedor imgen
```

Verificar si el servidor se ejecuto de manera correcta
```bash
docker logs id_contenedor|nombre_contenedor
```

```bash
docker logs --follow id_contenedor|nombre_contenedor
```

Verifica la imagen,crea un contenedor y lo pone en marcha
```bash
docker run nombre_imagen
```

Verifica la imagen,crea un contenedor y lo pone en marcha,sin mostrar los logs
```bash
docker run -d nombre_imagen
```
Docker run con todas las funciones antes usadas
```bash
docker run --name nombre_contenedor -p27017:27017 -d nombre_imagen
```

Creamos un contenedor con las variables de entorno para configurar un administrador
```bash
docker create -p27017:27017 --name nombre_contenedor -e MONGO_INITDB_ROOT_USERNAME=daniel -e MONGO_INITDB_ROOT_PASSWORD=password nombre_imagen
```

Listamos todas las redes que tiene configuradas docker
```bash
docker network -ls
```

Creamos una red
```bash
docker network create nombre_red
```

Eliminamos una red
```bash
docker network rm nombre_red
```

Crear imagenes en base a un archivo Dockerfile
```bash
docker build -t nombre_imagen:etiqueta ruta
```

Creamos el contenedor asignandoile la red
```bash
 docker create -p27017:27017 --name monguito --network mired -e MONGO_INITDB_ROOT_USERNAME=daniel -e MONGO_INITDB_ROOT_PASSWORD=password mongo
```

Creamos contenedor de la aplicacion que se coloco dentro de una imagen
```bash
 docker create -p3000:3000 --name chanchito --network mired miapp:1
 ```

Contruir los contenedores
```bash
 docker compose up
 ```

Eliminar los contenedores
```bash
 docker compose down
 ```

Indicarle un archivo de docker compose personalizado
```bash
 docker compose -f nombre_archivo up
 ```

## Estructura Docker-Compose
Archivo docker-compose.yml
```yaml
version: "3.9"
services:
  chanchito:
    build: .
    ports:
      - "3000:3000"
    links:
      - monguito
  monguito:

    image: mongo 
    ports:
      - "27017:27017"
    environment:
      - MONGO_INITDB_ROOT_USERNAME=daniel
      - MONGO_INITDB_ROOT_PASSWORD=password
```
> No es necesario incluir las redes


Código e información  obtenidos de este [video de YouTube](https://www.youtube.com/watch?v=4Dko5W96WHg).
