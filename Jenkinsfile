pipeline {
    agent any

    environment {
        GITHUB_CREDENTIALS = '250c937d-0dff-4fe2-bc0d-8c8cfd309f76'
        REPO_URL = 'https://github.com/rahul4ukpundir/react-app-using-vita.git'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'gh-pages',
                    credentialsId: "${GITHUB_CREDENTIALS}",
                    url: "${REPO_URL}"
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                bat 'npm run build'
            }
        }
        stage('Configure Git') { 
            steps { 
                bat 'git config --global user.name "Rahul Pundir"'
                bat 'git config --global user.email "rahul4ukpundir@gmail.com"' 
                } 
            }
        stage('Deploy to GitHub Pages') {
            steps {
                bat 'npm run deploy'
    }
}

        
    }
}
