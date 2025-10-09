FROM node:20-alpine

WORKDIR /app

RUN npm install -g pnpm

# Ensure dev dependencies remain available for Nest CLI
ENV NODE_ENV=development

# Copy package files first
COPY package.json pnpm-lock.yaml ./

# Install all dependencies, including dev dependencies needed for Nest CLI
RUN pnpm install --frozen-lockfile --prod=false

# Copy entire codebase
COPY . .

# Set working directory (optional since we're already in /app)
WORKDIR /app

EXPOSE 3000

# Use a direct command to start the app to avoid Nest CLI issues
CMD ["pnpm", "start:dev", "api-gateway"]