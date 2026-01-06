# Use Node.js LTS version
FROM node:20-slim

# Set working directory
WORKDIR /app

# Install bun
RUN npm install -g bun

# Copy package files
COPY package.json bun.lock* ./

# Install dependencies using bun (need dev deps for build)
RUN bun install --frozen-lockfile

# Copy source code
COPY . .

# Build the application
RUN bun run build

# Expose port (Cloud Run sets PORT env var automatically)
ENV PORT=8080
EXPOSE 8080

# Start the server (adapter-node creates build/index.js)
CMD ["node", "build"]

