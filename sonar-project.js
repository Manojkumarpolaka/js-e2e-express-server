const scanner = require('sonarqube-scanner');

sonarqubeScanner(
  {
    serverUrl : 'http://172.31.34.125:9000/',
    options: {
      'sonar.projectName': 'My App',
      'sonar.projectDescription': 'Description for "My App" project...',
      'sonar.sources': '.',
      'sonar.login': 'admin',
      'sonar.password': 'Testuser@123'
      'sonar.tests': 'specs',
      'sonar.language' : 'js'
      'sonar.projectVersion': '1.0'
    }
  },
  () => process.exit()
);
