---
layout: single
title:  "Test 2!"
categories: coding
tag: [jekyll]
toc: true
author_profile: false
redirect_from: 
  - /coding/second 
use_math: true
---
# Test

**Hello world**, this is my second Jekyll blog post.
## 0. LaTeX Test

The binomial Theorem is $\{(x+y)^n=\sum\limits_{i=0}^{n}\binom{n}{r}x^{r}y^{n-r}\}$, known to many mathematicians. 
$y=f(x)$

## 1. Others


Does it work online?

I hope you like it!

![sample image.]({{site.url}}/images/2024-08-13-first/logo.png){: .img-width-half .align-center}

```python
N,K = map(int,input().split())
L = []
for i in range(N):
    L.append(list(map(int,input().split())))
M = [[0 for i in range(N+1)] for _ in range(N+1)]
for i in range(1,N+1):
    for j in range(1,N+1):
        M[i][j]=M[i][j-1]+M[i-1][j]-M[i-1][j-1]+L[i-1][j-1]
def partial_sum(M,a,b,c,d):
    return M[c][d]-M[c][b-1]-M[a-1][d]+M[a-1][b-1]
#(a,b)=>(c,d)
for i in range(K):
    a,b,c,d = map(int,input().split())
    print(partial_sum(M,a,b,c,d))
```