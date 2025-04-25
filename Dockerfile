# Указываем официальный образ Node.js
FROM node:18 as build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package*.json ./
RUN npm install

# Копируем весь проект
COPY . .

# Собираем production-версию React-приложения
RUN npm run build

# Используем Nginx для сервировки статических файлов
FROM nginx:alpine

# Копируем билд из предыдущего этапа в Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Копируем конфиг Nginx (необязательно)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]
