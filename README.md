# 🏎️ Homepage (WIP)

A super simple homepage app containing local links in a yaml file.

Partly a learning project and something I've wanted to build for a while as other solutions are too complex for my needs and I've needed to learn how to use Docker correctly for a while.

New Learnings:

- Parsing files (yaml) on the server and creating an API.
- Docker Compose
- Nginx (needed help from AI here as I'm still understanding proxies, but have gained a bit more knowledge)

## Tech Stack

- React + Vite
- Hono
- Docker
- Nginx

## Installation

1. Clone Repo

```sh
git clone .....
```

2. Run Docker

```sh
docker compose up -d
```

## Development

```sh
# Client
cd client
npm install
npm run dev

# Server
cd server
npm install
npm run dev
```
