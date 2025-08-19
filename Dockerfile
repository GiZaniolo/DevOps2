# Usa a imagem base do Nginx
FROM nginx:alpine

# Copia os arquivos do repositório para a pasta padrão do Nginx
COPY . /usr/share/nginx/html

# Expõe a porta 80
EXPOSE 80

