FROM python:2.7

RUN mkdir /app

WORKDIR /app

VOLUME /app

ADD . /app

