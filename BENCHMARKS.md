# Benchmarks

## express - server 

- ab -c 5 -n 1000 http://127.0.0.1:8888/sum-primes/\?limit\=100000

Concurrency Level:      5
Time taken for tests:   21.411 seconds
Complete requests:      1000
Failed requests:        0
Total transferred:      237000 bytes
HTML transferred:       37000 bytes
Requests per second:    46.70 [#/sec] (mean)
Time per request:       107.057 [ms] (mean)
Time per request:       21.411 [ms] (mean, across all concurrent requests)
Transfer rate:          10.81 [Kbytes/sec] received


## express - server using workers

Concurrency Level:      5
Time taken for tests:   3.611 seconds
Complete requests:      1000
Failed requests:        0
Total transferred:      237000 bytes
HTML transferred:       37000 bytes
Requests per second:    276.94 [#/sec] (mean)
Time per request:       18.054 [ms] (mean)
Time per request:       3.611 [ms] (mean, across all concurrent requests)
Transfer rate:          64.10 [Kbytes/sec] received