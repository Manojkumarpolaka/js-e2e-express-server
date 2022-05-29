pipeline {
    agent none
    triggers {
        cron('0 * * * *')
    }
    stages { 
        stage('SCM Checkout') {
            agent { label 'master' }
            steps{
            git url: 'https://github.com/Manojkumarpolaka/js-e2e-express-server.git', branch: "main"
            }
        }
        stage('Build & code analysis') {
            agent { label 'mvn3.8.5' }
            steps{
                withSonarQubeEnv(installationName: 'SONAR', envOnly: true, credentialsId: 'SONAR') {
                    sh 'npm install'
                    sh 'npm run build'
                    sh 'npm test'
                }
            }
        }
    }
}
