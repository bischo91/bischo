# Use Node.js LTS version
FROM node:20-slim

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* bun.lock* ./

# Install dependencies (use npm for better Cloud Run compatibility)
# If using bun, you can switch to: RUN npm install -g bun && bun install --frozen-lockfile
RUN npm ci --omit=dev || npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Expose port (Cloud Run sets PORT env var automatically)
ENV PORT=8080
EXPOSE 8080

# Start the server (adapter-node creates build/index.js)
CMD ["node", "build"]

