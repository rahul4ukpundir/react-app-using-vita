pipeline {
    agent any

    environment {
        GITHUB_CREDENTIALS = 'github-creds'
        REPO_URL = 'https://github.com/<your-username>/<your-repo>.git'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
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

        stage('Deploy to GitHub Pages') {
            steps {
                bat 'npm install -g gh-pages'
                bat 'gh-pages -d build'
            }
        }
    }
}
