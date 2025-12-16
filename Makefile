.PHONY: help install dev build start stop restart logs clean status

# Colors for output
BLUE := \033[0;34m
GREEN := \033[0;32m
YELLOW := \033[0;33m
NC := \033[0m # No Color

help: ## Show this help message
	@echo "$(BLUE)Interview Preparation App - Commands$(NC)"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "$(GREEN)%-15s$(NC) %s\n", $$1, $$2}'
	@echo ""

install: ## Install dependencies
	@echo "$(YELLOW)Installing dependencies...$(NC)"
	npm install
	@echo "$(GREEN)Dependencies installed successfully!$(NC)"

dev: ## Start development server
	@echo "$(YELLOW)Starting development server...$(NC)"
	npm run dev

build: ## Build Docker image
	@echo "$(YELLOW)Building Docker image...$(NC)"
	docker-compose build
	@echo "$(GREEN)Docker image built successfully!$(NC)"

start: ## Start application in Docker
	@echo "$(YELLOW)Starting application...$(NC)"
	docker-compose up -d
	@echo "$(GREEN)Application started!$(NC)"
	@echo "$(BLUE)Access the app at: http://localhost:3000$(NC)"

stop: ## Stop application
	@echo "$(YELLOW)Stopping application...$(NC)"
	docker-compose down
	@echo "$(GREEN)Application stopped!$(NC)"

restart: stop start ## Restart application

logs: ## Show application logs
	docker-compose logs -f interview-prep

status: ## Show application status
	@echo "$(BLUE)Application Status:$(NC)"
	@docker-compose ps

clean: ## Remove containers, images, and volumes
	@echo "$(YELLOW)Cleaning up...$(NC)"
	docker-compose down -v --rmi all
	@echo "$(GREEN)Cleanup complete!$(NC)"

up: build start ## Build and start application (one command)
	@echo "$(GREEN)Application is ready!$(NC)"
	@echo "$(BLUE)Access the app at: http://localhost:3000$(NC)"

down: stop ## Alias for stop

rebuild: clean build start ## Clean, rebuild, and start
	@echo "$(GREEN)Application rebuilt and started!$(NC)"
