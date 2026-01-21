# backend/Dockerfile
FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app

# Installation des outils pour que Django puisse parler à Postgres
RUN apt-get update && apt-get install -y \
    gcc \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Copie des dépendances
# Note : j'utilise bien "requirement.txt" comme sur votre image
COPY requirement.txt /app/
RUN pip install --upgrade pip && pip install -r requirement.txt

# Copie du code
COPY . /app/

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]