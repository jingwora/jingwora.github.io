# バイオインフォマティクスのためのアルゴリズム入門
### An Introduction to Bioinformatics Algorithms (JA)


NEIL C. JONES AND PAVEL A. PEVZNER

ニールCジョーンズ  とパベルAペヴズナー

計算分子生物学（Computational molecular biology）は、計算、統計、実験、および技術的手法を組み合わせた新しい分野である。新しい技術とツールのより、分子生物学の発見を加速させています。

## 目次

1 はじめに
2 アルゴリズムと複雑さ
3 分子生物学入門
4 しらみつぶし探索（exhaustive search）
5 グリーディ法（greedy algorithm）
6 動的計画法（Dynamic Programming Algorithms）
7 分割統治（Divide-and-Conquer Algorithms）
8 グラフアルゴリズム（Graph Algorithms）
9 組み合わせパターンマッチング（Combinatorial Pattern Matching）
10 クラスタリングとツリー（Clustering and Trees）
11 隠れマルコフモデル（Hidden Markov Models）
12 乱択アルゴリズム（Randomized Algorithms）


## 序文
長い間、コンピュータ サイエンスと生物学は別々に教えられてきました。1990 年代初頭には、一部の生物学の学生はアルゴリズム 101 を受講し、一部のコンピューター サイエンスの学生は遺伝学 101 とバイオインフォマティクス 101 を受講しました。

バイオインフォマティクスのアルゴリズムと、過去 20 年間にそれらを推進してきた計算のアイデアに関する入門書です。

## 1. はじめに
この本では、いくつかのアルゴリズムのアイデアを使用して、多数のバイオインフォマティクスの問題を解決できることに述べています。より知的価値があり、より良い長期投資を表すロジックに焦点を当てています。プロトコルはすぐに変更されますが、計算ロジックはそうではないようです。

目標は、アルゴリズムの基礎とバイオインフォマティクスの重要な結果の両方をカバーすることです。

計算生物学の新しい分野と古い分野の両方をカバーしています

ロックパズルゲームの必勝法サンプルを説明しました。結論はアルゴリズムを使用して問題を解決する方法を学習できます。

アルゴリズムを使用して、多くの生物学の問題を解決できます。

アルゴリズムのパラメータ調整より、アルゴリズムのロジックを理解るすことが必要です。


## 2. アルゴリズムと複雑さ

アルゴリズム（algorithm） とは 、適切に定式化された問題を解決するための計算手順や処理手順のこと。入力と出力の問題を特定し、アルゴリズムは入力を出力に変換する方法になります。

擬似コード（pseudocode）とは 、特定のプログラミング言語の知識を持たない人でもアルゴリズムが理解できるように自然言語に近い形で記述するコードです。

課題形式

A **variable**, written as x or total, contains some numerical value and can be assigned a new numerical value at different points throughout the course of an algorithm.

An **array** of n elements is an ordered collection of n variables a1, a2, . . . , an. We usually denote arrays by boldface letters like **a** = (a1, a2, . . . , an) and write the individual elements as ai where i is between 1 and n.

#### Assignment Format
a ← b 
Effect: Sets the variable a to the value b.

#### Arithmetic 
Format: $\displaystyle a + b, a - b, · b, a/b, a^b$
Effect:  Addition, subtraction, multiplication, division, and exponentiation of numbers. 
Example: 
$$
\begin{align*} 
&DIST(x1, y1, x2,y2)\\
&1. dx ← (x2 − x1)2 \\
&2. dy ← (y2 − y1)2 \\
&3. return \sqrt {(dx + dy)} \\
\end{align*}
$$
Result: DIST(x1, y1,x2, y2) computes the Euclidean distance between points with coordinates (x1, y1) and (x2, y2). 
DISTANCE(0, 0, 3, 4)returns 5

#### Conditional 
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

Effect: Sets i to a and executes instructions B. Sets i to a + 1 and executes instructions B again. Repeats for i = a + 2, a + 3, . . . , b − 1, b³　

Example: SUMINTEGERS(n) 
		sum ← 0 
		for i ← 1 to n 
				sum ← sum + i
		return sum
Result: SUMINTEGERS(n) computes the sum of integers from 1 to n. SUMINTEGERS(10) returns 1 + 2 + · · · + 10 = 55.

#### while loops
Format: while A is true
				**B** 
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
Format: aᵢ

Effect: The ith number of array a = (a₁, . . . aᵢ , . . . aₙ). For example, if F = (1, 1, 2, 3, 5, 8, 13), then F₃ = 2, and F₄ = 3.

Example: FIBONACCI(n) 
F₁ ← 1 
F₂ ← 1 
for i ← 3 to n 
    Fᵢ ← Fᵢ₋₁ + Fᵢ₋₂ 
return Fₙ 

Result: FIBONACCI(n) computes the nth Fibonacci number. FIBONACCI(8) returns 21.

We reiterate that the function of pseudocode in this book is only to communicate the idea behind an algorithm, and that to actually use an algorithm in this book you would need to turn the pseudocode into computer code.

### Biological Algorithms versus Computer Algorithms

DNA replication:

1. A molecular machine (in other words, a protein complex) called a DNA helicase, binds to the DNA at certain positions called replication origins

2. Helicase wrenches apart the two strands of DNA, creating a so-called replication fork. The two strands are complementary and run in opposite directions. Two other molecular machines, topoisomerase and single-strand binding protein bind to the single strands to help relieve the instability of single-stranded DNA.




---

Status: #Draft

Tags:
[[Dictionary/Bioinfo dictionary/Med roots/bioinformatic]] | [[Algorithms]] | [[Pseudocode]]

Links:

References: