pipeline {
  agent any
  stages {
    stage('install dependency') {
      steps {
        sh 'make install_dependency_frontend'
      }
    }

    stage('code analysis') {
      parallel {
        stage('code analysis frontend') {
          steps {
            sh 'make code_analysis_frontend'
          }
        }

        stage('code analysis backend') {
          steps {
            sh 'make code_analysis_backend'
          }
        }

      }
    }

    stage('run unit test') {
      parallel {
        stage('code analysis frontend') {
          steps {
            sh 'make run_unittest_frontend'
          }
        }

        stage('code analysis backend') {
          steps {
            sh 'make run_unittest_backend'
            junit '*.xml'
          }
        }

      }
    }

    stage('run integration test') {
      steps {
        sh 'make run_integratetest_backend'
      }
    }

    stage('build') {
      parallel {
        stage('build frontend') {
          steps {
            sh 'make build_frontend'
          }
        }

        stage('build backend') {
          steps {
            sh 'make build_backend'
          }
        }

      }
    }

    stage('run ATDD') {
      steps {
        sh 'make start_service'
        sh 'make run_newman'
        sh 'make run_robot'
        sh 'make stop_service'
      }
    }

  }
  post {
    always {
      sh 'make stop_service'
      sh 'docker volume prune -f'
    }

  }
}