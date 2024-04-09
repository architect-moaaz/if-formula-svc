## Dockerizing ifs-cds-mgr
 Step 1: Create the Dockerfile 
  --- 
     command used: touch Dockerfile
   ---- 
 step 2: Build the docker image.
   ---
    command used: sudo docker build -t cds_manager .
   ---
   step 3: Run the docker image.
   ----
    command used: sudo docker run -p 51524:51524 cds_manager
     ---
     The above command starts the cds manager image inside the container and exposes port 51524 inside container to port 51524 outside the container.
     ----

   step 4: Check the image created 
   ---
    command used: docker images
   ---
 step 5:Access the route on server using http://localhost:51524

