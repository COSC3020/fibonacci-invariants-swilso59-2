# Fibonacci Invariants

Recall the definition of the Fibonacci series: the first number is 0, the second
1, and each subsequent number is the sum of the two numbers preceding it.
Implement a function that computes the Fibonacci numbers recursively, storing
the results in an array.

For example, the return value of `fib(7)` is the following array:

| index |  0  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- |
| value |  0  |  1  |  1  |  2  |  3  |  5  |  8  |  13 |

Add your code in `code.js`. Test your new function; I've provided some basic
testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Invariant

What is a good invariant for your recursive implementation of `fib()`
i.e. something that is always true at the beginning of the recursive call?

Hint: Think about what the "state of the world" is here and what you can say
about it at the start of each recursive call. Your invariant must say something
about the current recursive call.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. You do not need to prove that the invariant is correct. Add
your answer to this markdown file.

## Answer

Something that is always true at the start of each recursive call is the the Fibonacci numbers for $arr[0 ... n  - 1]$ are correct. When we make recursive calls to fib(n - 1). The calls are made till we reach our base case. Then the array is progressively built up to $n - 1$. This ensures that we can compute the next Fibbonacci number $fib(n)$, by using the the values for $arr[n - 1]$ and $arr[n - 2]$, Which are the values of $fib(n - 1)$ and $fib(n - 2)$. We can now add them to get $fib(n)$. 

## Plagiarism Acknowledgement 
I started by trying to create the function from scratch since I have worked on this problem before.
Then took a look at my previous repository https://github.com/COSC3020/fibonacci-invariants-swilso59-1

I wanted to review differnt ways of implementing this function so I did a little bit or online research.
I found this video which had a nice example and explanation of the function as well as the time complexity.
https://www.youtube.com/watch?v=tQjd29Rmo_A&ab_channel=Codevolution
although implemented using an iterative approach instead of recursion.
While doing some extra investigation I decided to look at some other students repositories.
https://github.com/COSC3020/fibonacci-invariants-SamuelGlz-1
Zach's repository was very helpful.
https://github.com/COSC3020/fibonacci-invariants-ZachRenz

“I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.”




