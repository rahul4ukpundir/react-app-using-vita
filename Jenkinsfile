pipeline {
    agent any

    environment {
 GITHUB_CREDENTIALS = '250c937d-0dff-4fe2-bc0d-8c8cfd309f76'
        REPO_URL = 'https://github.com/rahul4ukpundir/react-app-using-vita.git'  // Jenkins credential ID for GitHub PAT
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

        stage('Build React/Vite App') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Configure Git Identity') {
            steps {
                bat 'git config --global user.name "Your Name"'
                bat 'git config --global user.email "your-email@example.com"'
            }
        }

        stage('Deploy to GitHub Pages') {
            steps {
                // Use npx so Jenkins doesn’t rely on global PATH
                bat 'npx gh-pages -d dist'
            }
        }
    }
}
