
pipeline {

    agent any

    stages {
        stage("Clone git repo") {
            steps{
                git credentialsId: '1effd402-110c-4584-89aa-8b0776866cf4', url: 'https://github.com/Abhiwagh2015/node-todo-cicd.git'
            }
        }
        stage("Docker image") {
            steps{
              
                echo " Docker image is created "
            }
        }
        stage(" run Docker container") {
            steps{
                
                echo " Docker container is created "
            }
        }
        stage(" push docker container ") {
            steps{
                echo "push image to docker container "
            }
        }
    }
    
}