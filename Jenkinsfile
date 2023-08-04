
pipeline {

    agent any

    stages {
        stage("Clone git repo") {
            steps{
                git credentialsId: '626c3c85-8814-4343-a83f-94a892974eec', url: 'git@github.com:Abhiwagh2015/Jenkins_Test_Repo.git'
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
