pipeline {
    agent any

    environment {
        GITHUB_CREDENTIALS = '250c937d-0dff-4fe2-bc0d-8c8cfd309f76'
        REPO_URL = 'https://github.com/rahul4ukpundir/react-app-using-vita.git'  // Jenkins credential ID for GitHub PAT
        MY_SECRET_VAR = credentials('GITHUB_REPO_URL')
    }

    stages {
        stage('Test environment variable') {
            steps {
                echo "Secret is hidden but available"
                sh 'echo $MY_SECRET_VAR'
            }
        }

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
                bat 'dir dist'  // Verify dist folder exists
            }
        }

        stage('Configure Git Identity') {
            steps {
                bat 'git config --global user.name "Rahul Pundir"'
                bat 'git config --global user.email "rahul4ukpundir@gmail.com"'
                bat 'git config --global credential.helper store'
            }
        }

        stage('Deploy to GitHub Pages') {
            steps {
                echo 'Starting GitHub Pages deployment...'
                // Use username/password credentials
                withCredentials([usernamePassword(credentialsId: "${GITHUB_CREDENTIALS}", usernameVariable: 'GIT_USERNAME', passwordVariable: 'GIT_PASSWORD')]) {
                    bat '''
                        npx gh-pages -d dist --repo https://%GIT_USERNAME%:%GIT_PASSWORD%@github.com/rahul4ukpundir/react-app-using-vita.git
                    '''
                }
                echo 'Deployment complete!'
            }
        }
    }
}
