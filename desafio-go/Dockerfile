FROM golang:alpine3.14

WORKDIR /go/src/app

COPY ./main.go .

RUN go build main.go

#-----------------#
FROM scratch

COPY --from=0 /go/src/app/main /

ENTRYPOINT ["/main"]

CMD ["Rocks"]