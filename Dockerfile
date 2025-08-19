#usa uma imagem baseada no Nginx
FROM nginx:alpine

#copia os arquivos do repositório para a pasta padrão 
COPY . /usr/share/nginx/html

#expoe a porta 80
EXPOSE 80
