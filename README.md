# 🏎️ Homepage (WIP)

A super simple homepage app containing local links in a yaml file.

Partly a learning project and something I've wanted to build for a while as other solutions are too complex for my needs and I've needed to learn how to use Docker correctly for a while. Most of this could have been achieved using a static site generator, but I thought overengineering a simple app sounded more logical =).

![screenshot](https://github.com/user-attachments/assets/6b1e5b60-c308-4358-904d-582efac3b4e3)

New Learnings:

- Parsing files (yaml) on the server and creating an API.
- Docker Compose
- Nginx (needed help from AI here as I'm still understanding proxies, but have gained a bit more knowledge)

## Features

- Nothing yet!

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

2. Copy yaml file

```sh
cp links.example.yml ./server/data/links.yml
```

3. Run Docker

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
