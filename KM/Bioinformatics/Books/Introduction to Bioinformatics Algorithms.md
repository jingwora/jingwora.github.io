# Introduction to Bioinformatics Algorithms


Computational molecular biology is a new discipline, bringing together computational, statistical, experimental, and technological methods, which is energizing and dramatically accelerating the discovery of new technologies and tools for molecular biology.


## Contents

1 Introduction
2 Algorithms and Complexity
3 Molecular Biology Primer
4 Exhaustive Search
5 Greedy Algorithms
6 Dynamic Programming Algorithms
7 Divide-and-Conquer Algorithms
8 Graph Algorithms
9 Combinatorial Pattern Matching
10 Clustering and Trees
11 Hidden Markov Models
12 Randomized Algorithms


## Preface
In the early 1990s, biology students take some sort of Algorithms 101 and computer science students take Genetics 101 and Bioinformatics 101. This is an introductory textbook on bioinformatics algorithms and the computational ideas that have driven them through the last twenty years.
The very first bioinformatics textbooks were Waterman, 1995 (108), which contains excellent coverage of DNA statistics and Gusfield, 1997 (44) which includes an encyclopedia of string algorithms.

### 1. Introduction
In this book we attempt to show that a handful of algorithmic ideas can be used to solve a large number of bioinformatics problems. We feel that focusing on ideas has more intellectual value and represents a better long-term investment: protocols change quickly, but the computational ideas don’t seem to.

We pursued a goal of presenting both the foundations of algorithms and the important results in bioinformatics under the same cover.

This book covers both new and old areas in computational biology

To hold a student’s interest, it is necessary to introduce biology and algorithms simultaneously.

This book is what we, as computer scientists, believe that a modern biologist ought to know about computer science if he or she would be a successful researcher.


## 2. Algorithms and Complexity

An [[algorithm]] is a sequence of instructions that one must perform in order to solve a well-formulated problem.

We will specify problems in terms of their inputs and their outputs, and the algorithm will be the method of translating the inputs into the outputs.

[[Pseudocode]] is a language computer scientists often use to describe algorithms

A **variable**, written as x or total, contains some numerical value and can be assigned a new numerical value at different points throughout the course of an algorithm.

An **array** of n elements is an ordered collection of n variables a1, a2, . . . , an. We usually denote arrays by boldface letters like **a** = (a1, a2, . . . , an) and write the individual elements as ai where i is between 1 and n.

##### Assignment Format
a ← b Effect: 
Sets the variable a to the value b.

##### Arithmetic 
Format: a + b, a − b, a · b, a/b, a^b 
Effect:  Addition, subtraction, multiplication, division, and exponentiation of numbers. 
Example: DIST(x1, y1, x2, y2) 
1 dx ← (x2 − x1)2 
2 dy ← (y2 − y1)2 
3 return √ (dx + dy)

Result: DIST(x1, y1,x2, y2) computes the Euclidean distance between points with coordinates (x1, y1) and (x2, y2). DISTANCE(0, 0, 3, 4)returns 5

##### Conditional 
Format: if A is true 
					B 
			 else 
					 C
Effect: If statement A is true, executes instructions B, otherwise executes instructions C. Sometimes we will omit “else C,” in which case this will either execute B or not, depending on whether A is true.
Example: MAX(a, b) 
if a < b 
	return b
else 
	return a
	
Result: MAX(a, b) computes the maximum of the numbers a and b. For example, MAX(1, 99) returns 99.

#### for loops
Format: for i ← a to b 
				**B**

Effect: Sets i to a and executes instructions B. Sets i to a + 1 and executes instructions B again. Repeats for i = a + 2, a + 3, . . . , b − 1, b^3

Example: SUMINTEGERS(n) 
		sum ← 0 
		for i ← 1 to n 
				sum ← sum + i
		return sum
Result: SUMINTEGERS(n) computes the sum of integers from 1 to n. SUMINTEGERS(10) returns 1 + 2 + · · · + 10 = 55.

#### while loops
Format: while A is true
				B 
Effect: Checks the condition A. If it is true, then executes instructions B. Checks A again; if it’s true, it executes B again. Repeats until A is not true. 

Example: ADDUNTIL(b) 
		i ← 1 
		total ← i 
		while total ≤ b
				 i ← i + 1
				 total ← total + i
		return i

Result: ADDUNTIL(b) computes the smallest integer i such that 1 + 2 + · · ·+i is larger than b. For example, ADDUNTIL(25)returns 7, since 1+ 2+· · ·+ 7 = 28, which is larger than 25, but 1+ 2+· · ·+ 6 = 21, which is smaller than 25.

#### Array access
Format: a　i





---

Status: #Draft

Tags:
[[Introduction to Bioinformatics Algorithms]] | [[Algorithms]] | [[Pseudocode]]

Links:

References: