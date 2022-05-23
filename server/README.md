# Server

This server-side is created using Springboot and built using Gradle.
You have to start the server-side of the application before the client-side. 
Before you start the server, please change the port, username and password to your own MySQL credentials in DBManager.java and application.properties.
The server is started on port 8081.
The database that is created is called 'boxinator'.

To start the server run the main method in RestApplication.java

To start the server from the terminal, run :
```sh
./gradlew bootRun
````
