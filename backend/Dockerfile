#FROM mysql:5.7
FROM node:14 as build

# Instalar el cliente de MySQL
#RUN apt-get update && apt-get install -y default-mysql-client

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json (si existe) al contenedor
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install
#RUN npm install -g npm@10.2.0

# Copia el resto de los archivos de la aplicación al contenedor
COPY . .

# Expone el puerto en el que la aplicación se ejecutará 
EXPOSE 4000

# Compila la aplicación
RUN npm i -g typescript
RUN npm run build

# Define el comando para ejecutar la aplicación 
# Copia el archivo wait-for-mysql.sh al contenedor y dale permisos de ejecución
#COPY wait-for-mysql.sh /app/wait-for-mysql.sh
#RUN chmod +x /app/wait-for-mysql.sh
CMD ["node", "dist/index.js"]
