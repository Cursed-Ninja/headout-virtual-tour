#!/bin/bash

# Step 1: Change to the "client" directory
cd client

# Step 2: Run the "npm run build" command
npm run build

# Step 3: Move the "dist" directory to the "backend" directory
mv -f dist ../backend

# Step 4: Change to the "backend" directory
cd ../backend

# Step 5: Create a Docker image using the Dockerfile in the current directory
docker build -t headout_virtual_tour .

# Step 6: Run a Docker container from the image
docker run -p 5000:5000 headout_virtual_tour
