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

### 2️⃣ Start Minikube
Initiated Minikube:
minikube start

### 3️⃣ Create Kubernetes Deployment
Crafted a deployment.yaml file with the required specifications.
Applied the deployment configuration:
kubectl apply -f deployment.yaml
Verified the pods are up and running:
kubectl get pods

### 4️⃣ Expose the Service
Used service.yaml to expose the deployment locally:
kubectl apply -f service.yaml
Checked the service details:
kubectl get svc
kubectl get nodes -o wide

Retrieved the Minikube IP:
minikube ip

Accessed the service:
minikube service jammtoast-service


### 🌐 Final Result
The app was successfully deployed and hosted locally at:
http://127.0.0.1:49282/ (or the IP assigned by Minikube).

## 🧑‍💻 How to Deploy on Your Device

Follow these simple steps to deploy this project on your local machine:

### Clone the repository:

git clone https://github.com/<your-username>/jammtoast.git
cd jammtoast

### Start Minikube:

minikube start

### Apply the deployment configuration:

kubectl apply -f deployment.yaml

### Verify the pods:

kubectl get pods

### Apply the service configuration:

kubectl apply -f service.yaml

### Check the service details:

kubectl get svc

kubectl get nodes -o wide

### Get the Minikube IP:

minikube ip

### Access the app:

minikube service jammtoast-service

And voilà! 🎉 Your app will be up and running on your local device


## 🙌 Acknowledgments
A big thanks to my friend for letting me use the Jamm Toast website for this deployment project.




  

  
