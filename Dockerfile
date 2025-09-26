# Multi-stage build for production
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY packages/backend/package*.json ./packages/backend/
COPY packages/frontend/package*.json ./packages/frontend/

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build frontend
RUN cd packages/frontend && npm run build --prod

# Production stage
FROM node:18-alpine AS production

# Install serve for frontend
RUN npm install -g serve

# Set working directory
WORKDIR /app

# Copy built frontend
COPY --from=builder /app/packages/frontend/dist ./frontend

# Copy backend
COPY --from=builder /app/packages/backend ./backend

# Expose ports
EXPOSE 3000 5000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/health || exit 1

# Start both services
CMD serve -s frontend -l 5000 & cd backend && npm start