# Development Help Tools 

## List Compare

List compare, as the name suggests can be used to compare two lists.

### How to build and run

You need to have docker installed in your system

```
docker run -w /app -v $(pwd):/app node:10 npm run build
docker build -t compare:latest .
docker run -it --name mycomp -p 8080:80 compare
```

You can access the local build via the 8080 port