# Use Node.js LTS version
FROM node:20-slim

# Set working directory
WORKDIR /app

# Install bun
RUN npm install -g bun

# Copy package files
COPY package.json bun.lock* ./

# Install dependencies using bun (need dev deps for build)
# Note: Not using --frozen-lockfile to allow lockfile updates if package.json changed
RUN bun install

# Copy source code
COPY . .

# Build arguments for private environment variables
ARG PRIVATE_VITE_RESEND_API_KEY
ARG PRIVATE_VITE_GEMINI_API_KEY

# Set as environment variables for build
ENV PRIVATE_VITE_RESEND_API_KEY=$PRIVATE_VITE_RESEND_API_KEY
ENV PRIVATE_VITE_GEMINI_API_KEY=$PRIVATE_VITE_GEMINI_API_KEY

# Build the application
RUN bun run build

# Expose port (Cloud Run sets PORT env var automatically)
ENV PORT=8080
EXPOSE 8080

# Start the server (adapter-node creates build/index.js)
CMD ["node", "build"]

