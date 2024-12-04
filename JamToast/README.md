# Jamm Toast - Official Startup Website Deployment

Welcome to the **Jamm Toast** project! 🎉 This project is a website created for a startup named *Jamm Toast*. It serves as their company's official website, acting as a portfolio and showcase of their work.

For this deployment, I utilized **Docker** and **Kubernetes**, ensuring a streamlined and scalable deployment process. The website is hosted locally using Minikube.

---

## 🛠️ Tech Stack Used

- **Docker**: For containerizing the application.
- **Kubernetes**: For orchestrating the containers.
- **Minikube**: For local Kubernetes cluster setup.

---

## 🚀 Deployment Process

Here’s a step-by-step breakdown of how the deployment was achieved:

### 1️⃣ Create a Docker Image
- Borrowed the project files from my friend and created a `Dockerfile` specifying all the necessary details.
- Built the Docker image:


  docker build -t dayyan1337/jammtoast:latest .

  
