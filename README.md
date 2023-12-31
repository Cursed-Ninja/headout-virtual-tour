# Headout Virtual Tour

Welcome to Headout Virtual Tour, a project that was created with the goal of bringing the experience of a virtual tour to the comfort of your home. This project started as a 3D playground where users can move freely and explore various destinations, but it has evolved to offer a full-fledged virtual tour experience. With the integration of a marketplace, tour guides can now upload their virtual tour experiences in the form of 360° videos, allowing customers to immerse themselves in the tours using VR, laptops, or smartphones.

## Features

- **3D Playground**: Explore destinations of your choice in a 3D playground, giving you the freedom to roam the environment.

- **Virtual Tour**: Tour guides can upload their 360° virtual tour experiences, allowing customers to fully immerse themselves in the tour from the comfort of their home.

## Project Structure

This project is divided into three main components:

- **Backend**: This is the server-side of the application, responsible for handling requests, authentication, and managing data. It is built using Node.js and Express.js.

- **Client**: The frontend of the application is built using Vite, React, Three.js, Babylon.js, and MaterialUI. These technologies enable the creation of an immersive and interactive virtual tour experience.

- **Build Scripts**: To make the setup and deployment easier, we have included a `build_and_run.sh` script that builds the project, creates a Docker image, and runs the Docker container. The application can be accessed on port 5000 once it's up and running.

## Setup

To set up this project, follow these steps:

1. Clone the repository:
    ```
    git clone https://github.com/Cursed-Ninja/headout-virtual-tour
    ```

2. Configure environment variables by creating a `.env` file in the `backend` directory. You can use the `env.example` file as a template.

3. Run the build script using the following command on Windows:

    ```
    .\build_and_run.sh
    ```

   This script will build the project, create a Docker image, and run the Docker container. The application will be accessible on port 5000.

## Technologies Used

### Frontend

- Vite + React: For building the frontend application.
- Three.js: Used for creating the 360 video player.
- Babylon.js: Utilized for the 3D playground.
- MaterialUI: For UI design and components.
- TailwindCSS: For styling the components.

### Backend

- Node.js: For server-side development.
- Express.js: To handle API requests and routing.
- Bcrypt: Used for password hashing and authentication.
- Multer: For handling file uploads.
- Nodemailer: For sending emails.

### Hosting and Deployment

- Docker: Containerization technology used for packaging and deploying the application.
- Azure Virtual Machine (VM): Hosting platform for the Docker container, allowing for deployment and accessibility of the application.
- Cloudinary: Used for image and video storage.


## Additional Resources

To create this project, we modified and referenced several code snippets and assets from the following sources:

- [BabylonJS/Assets](https://github.com/BabylonJS/Assets): Assets used in the project.
- [Stack Overflow](https://stackoverflow.com/questions/73819644/three-js-360-video-camera-controls-api?rq=3): Reference for 360-degree video.
- [Three.js Discourse](https://discourse.threejs.org/t/rotation-to-basic-0-360-pitch-roll-yaw/37325): Reference for 360-degree camera yaw and pitch.
- [Babylon.js Documentation](https://doc.babylonjs.com/features/featuresDeepDive/animation/animatedCharacter): Reference for Babylon.js animation, rigging, physics engine and character controller.

## Demo

You can experience the Headout Virtual Tour by visiting the deployed version at [https://headout.onrender.com/](https://headout.onrender.com/). Please note that the onrender link provides HTTPS for secure browsing. However, it's important to mention that the onrender platform uses a free instance, which does not have disk storage, preventing the use of the upload feature for videos.

For an alternative experience, you can access the Headout Virtual Tour on the Azure VM hosted container at [http://98.70.56.206:5000/](http://98.70.56.206:5000/). This link does not provide HTTPS, but it allows you to upload videos for an immersive tour experience.

We hope you enjoy exploring various destinations from the comfort of your home on either platform! If you have any questions or feedback, please don't hesitate to reach out to us. Thank you for using Headout Virtual Tour!

![Screenshot (258)](https://github.com/Cursed-Ninja/headout-virtual-tour/assets/77842809/16ac8a77-6c43-4522-9b31-b2ecf2b51d7b)
![Screenshot (260)](https://github.com/Cursed-Ninja/headout-virtual-tour/assets/77842809/418f0fa7-1669-47d0-87d3-0f38a2c07322)
![Screenshot (263)](https://github.com/Cursed-Ninja/headout-virtual-tour/assets/77842809/fbc6733b-a0ac-4f74-a4ec-6fb593f64851)
![Screenshot (262)](https://github.com/Cursed-Ninja/headout-virtual-tour/assets/77842809/c39785c0-65ea-4f6e-ab35-7d3558c6c442)
<img alt="Screenshot 2023-11-05 040457" src="https://github.com/Cursed-Ninja/headout-virtual-tour/assets/77842809/9dfda6cc-637a-4cd5-b61a-10a6bcfd29f3">

