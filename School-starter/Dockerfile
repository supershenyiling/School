# 使用官方 Node.js 镜像作为基础镜像
FROM node:18-alpine AS builder

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json（如果存在）
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制所有项目文件
COPY . .

# 构建 Next.js 应用
RUN npm run build

# 使用更轻量的 Node.js 镜像来运行应用
FROM node:18-alpine

# 设置工作目录
WORKDIR /app

# 复制构建文件
COPY --from=builder /app ./

# 暴露应用端口
EXPOSE 3000

# 启动 Next.js 应用
CMD ["npm", "run", "start"]
