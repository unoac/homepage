#!/bin/sh
set -e

# Start nginx in the background
nginx

# Start the Node.js application
exec "$@"
