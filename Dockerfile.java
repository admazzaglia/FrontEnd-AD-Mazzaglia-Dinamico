FROM amazoncorretto:11-alpine-jdk

MAINTAINER portfolio.mad

COPY target/mad-0.0.1-SNAPSHOT.jar mad-0.0.1-SNAPSHOT.jar

ENTRYPOINT ["java","-jar","/mad-0.0.1-SNAPSHOT.jar"]



