
# Documentation:
https://minikube.sigs.k8s.io/docs/start/

# Main commands:
minikube status
minikube start --driver=virtualbox
minikube start --driver=docker
minikube start --driver=hyperv

# To make virtualbox the default driver:
minikube config set driver virtualbox

minikube service [service-name]
minikube delete --all


minikube dashboard
