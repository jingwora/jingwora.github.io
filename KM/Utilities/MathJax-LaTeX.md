# MathJax

MathJax is an open-source JavaScript display engine for LaTeX, MathML, and AsciiMath notation that works in all modern browsers.

[Website](https://www.mathjax.org/)  [Docs](http://docs.mathjax.org/en/latest/)

--- 
**Formula**
Code:
````
Example: $\displaystyle DIST(x1, y1, x2,y2)$
````
Output:
Example: $\displaystyle DIST(x1, y1, x2,y2)$




```
$$
\begin{align}
x & = 1+1 \hspace{100cm} \\
& = 2
\end{align}
$$
```
$$
\begin{align}
x & = 1+1 \hspace{15cm} \\
  & = 2
\end{align}
$$


**Operation**
`align` is for multiline operation
Code:
```md
$$ 
\begin{align*} 
operation &= 1 + 2 - 3 \times 4 / 6 \\
power &= a + b^2 + 10^{10} + {x^y}^z + a^{x + y} \\
squre\;root &=  \sqrt{a} + \sqrt[3]{a} + \sqrt {a + b} \\
log &= \log x + \log_3 x + \log_{10}3 \\
ln &= \ln x \\
absolute &= |x| +  \lVert x \rVert \\
hat\;bar &= \hat y + \widehat{xy} + \bar y + \overline{xy}
\end{align*}
$$
````
Output:
$$ 
\begin{align*} 
operation &= 1 + 2 - 3 \times 4 / 6 \\
power &= a + b^2 + 10^{10} + {x^y}^z + a^{x + y} \\
squre\;root &=  \sqrt{a} + \sqrt[3]{a} + \sqrt {a + b} \\
log &= \log x + \log_3 x + \log_{10}3 \\
ln &= \ln x \\
absolute &= |x| +  \lVert x \rVert \\
hat\;bar &= \hat y + \widehat{xy} + \bar y + \overline{xy}
\end{align*}
$$
---
**Parentheses**
Code:
```md
$$ 
\begin{align*} 
parentheses1 &= (a + b) \\
parentheses2 &= [a + b] \\
parentheses3 &=\left(\frac{\sqrt x}{y^3}\right)
\end{align*}
$$
````
Output:
$$ 
\begin{align*} 
parentheses1 &= (a + b) \\
parentheses2 &= [a + b] \\
parentheses3 &=\left(\frac{\sqrt x}{y^3}\right)
\end{align*}
$$

---
**Tag**

Code:
```md
$$ 
\begin{align*} 
tag &= a + b \tag{1} \\
\end{align*}
$$
````
Output:
$$ 
\begin{align*} 
tag &= a + b \tag{1} \\
\end{align*}
$$
---
**Add text**

Code:
```md
$$ 
\begin{align*} 
\text{Equation} \\
tag &= a + b \tag{1} \\
\end{align*}
$$
````
Output:
$$ 
\begin{align*} 
\text{Equation} \\
x &= a + b  \\
x &= 4 \text{ or } x = 5 \\
blackslash &= \backslash
\end{align*}
$$

---
**Space**

Code:
```md
$$ 
\begin{align*} 
\text{Equation} \\
a b, a \; b, a \quad b, a \qquad b \\
\hspace{100cm}\\

\end{align*}
$$
````
Output:
$$ 
\begin{align*} 
a b, a \; b, a \quad b, a \qquad b \\
\end{align*}
$$


---
**Summation**

Code:
```md
$$ 
\begin{equation*} 
\sum_{k=1}^{n} a_{k} = a_{1} + a_{2} + \dots + a_{n} 
\end{equation*}
$$
````
Output:
$$ 
\begin{equation*} 
\sum_{k=1}^{n} a_{k} = a_{1} + a_{2} + \dots + a_{n} 
\end{equation*}
$$

---
**Square root**

Code:
```md
$$ 
\begin{equation*} 
x = \frac{-b\pm\sqrt{b^{2}-4ac}}{2a} 
\end{equation*}
$$
````
Output:
$$ 
\begin{equation*} 
x = \frac{-b\pm\sqrt{b^{2}-4ac}}{2a} 
\end{equation*}
$$


---
**Matrix**

Code:
```md
$$ 
\begin{bmatrix}
1 & 2 & 2 \\
2 & 3 & 4 \\
4 & 4 & 2
\end{bmatrix}
$$
````
Output:
$$ 
\begin{bmatrix}
1 & 2 & 2 \\
2 & 3 & 4 \\
4 & 4 & 2
\end{bmatrix}
$$

**Simplex tableaux**

Code:
```md
$$ 
\begin{array}{rrrrrr|r}
               & x_1 & x_2 & s_1 & s_2 & s_3 &    \\ \hline
           s_1 &   0 &   1 &   1 &   0 &   0 &  8 \\
           s_2 &   1 &  -1 &   0 &   1 &   0 &  4 \\
           s_3 &   1 &   1 &   0 &   0 &   1 & 12 \\ \hline
               &  -1 &  -1 &   0 &   0 &   0 &  0
\end{array}
$$
````
Output:
$$ 
\begin{array}{rrrrrr|r}
               & x_1 & x_2 & s_1 & s_2 & s_3 &    \\ \hline
           s_1 &   0 &   1 &   1 &   0 &   0 &  8 \\
           s_2 &   1 &  -1 &   0 &   1 &   0 &  4 \\
           s_3 &   1 &   1 &   0 &   0 &   1 & 12 \\ \hline
               &  -1 &  -1 &   0 &   0 &   0 &  0
\end{array}
$$

---
**Greek letters**

Code:
```md
$$ 
\begin{align*} 
\alpha      &= alpha \\ 
\beta       &= bata   \\
\omega      &= omega \\
\gamma      &= gamma \\
\delta      &= delta \\
\epsilon    &= epsilon \\
\varepsilon &= varepsilon \\
\phi        &= phi \\
\varphi     &= varphi \\
\end{align*}
$$
````
Output:
$$ 
\begin{align*} 
\alpha      &= alpha \\ 
\beta       &= bata   \\
\omega      &= omega \\
\gamma      &= gamma \\
\delta      &= delta \\
\epsilon    &= epsilon \\
\varepsilon &= varepsilon \\
\phi        &= phi \\
\varphi     &= varphi \\
\end{align*}

$$

**Special symbols**

Code:
```md
$$ 
\begin{align*} 
& \lt lt && \gt  gt \\
& \le le && \ge ge \\
& = && \neq neq \\ 
& \times times && \div div \\
& \pm pm && \mp mp \\
& \cup cup && \cap cap \\ 
& \subset subset && \supset supset\\
& \subseteq subseteq && \subsetneq subsetneq \\ 
& \in in && \notin notin \\
& \emptyset emptyset && \varnothing varnothing \\
& \rightarrow rightarrow && \leftarrow leftarrow \\
& \Rightarrow Rightarrow && \Leftarrow Leftarrow, \\
& \mapsto mapsto && \implies implies &&& \iff iff \\
\end{align*}
$$
````
Output:
$$ 
\begin{align*} 
& \lt lt && \gt  gt \\
& \le le && \ge ge \\
& = && \neq neq \\ 
& \times times && \div div \\
& \pm pm && \mp mp \\
& \cup cup && \cap cap \\ 
& \subset subset && \supset supset\\
& \subseteq subseteq && \subsetneq subsetneq \\ 
& \in in && \notin notin \\
& \emptyset emptyset && \varnothing varnothing \\
& \rightarrow rightarrow && \leftarrow leftarrow \\
& \Rightarrow Rightarrow && \Leftarrow Leftarrow, \\
& \mapsto mapsto && \implies implies &&& \iff iff \\
\end{align*}
$$


---
**Example1**

Code:
```md
$$ 
\begin{align}
   v + w & = 0  &&\text{Given} \tag 1\\
   -w & = -w + 0 && \text{additive identity} \tag 2\\
   -w + 0 & = -w + (v + w) && \text{equations $(1)$ and $(2)$}
\end{align}
$$
````
Output:
$$ 
\begin{align}
   v + w & = 0  &&\text{Given} \tag 1\\
   -w & = -w + 0 && \text{additive identity} \tag 2\\
   -w + 0 & = -w + (v + w) && \text{equations $(1)$ and $(2)$}
\end{align}
$$


---
**Example2**

Code:
```md
$$ 
\begin{array}
{c|rrrr}& x^3 & x^2 & x^1 & x^0\\ 
& 1 & -6 & 11 & -6\\ {\color{red}1} & \downarrow & 1 & -5 & 6\\ \hline & 1 & -5 & 6 & |\phantom{-} {\color{blue}0} 
\end{array}
$$
````
Output:
$$ 
\begin{array}{c|rrrr}& x^3 & x^2 & x^1 & x^0\\ & 1 & -6 & 11 & -6\\ {\color{red}1} & \downarrow & 1 & -5 & 6\\ \hline & 1 & -5 & 6 & |\phantom{-} {\color{blue}0} \end{array}
$$

---
**Example3**

Code:
```
$$
\sum_{n=1}^\infty \frac{1}{n^2} \to
\textstyle \sum_{n=1}^\infty \frac{1}{n^2} \to
\displaystyle \sum_{n=1}^\infty \frac{1}{n^2}
$$
```

Output:

$$
\sum_{n=1}^\infty \frac{1}{n^2} \to
\textstyle \sum_{n=1}^\infty \frac{1}{n^2} \to
\displaystyle \sum_{n=1}^\infty \frac{1}{n^2}
$$


---
**Example4**

Code:
```
Compare $\displaystyle \lim_{t \to 0} \int_t^1 f(t)\, dt$ versus $\lim_{t \to 0} \int_t^1 f(t)\, dt$.
```

Output:

Compare $\displaystyle \lim_{t \to 0} \int_t^1 f(t)\, dt$ versus $\lim_{t \to 0} \int_t^1 f(t)\, dt$.


---
**Example5: array**

Code:
```
$$
\begin{array}{ll}
\text{maximize}  & c^T x \\
\text{subject to}& d^T x = \alpha \\
&0 \le x \le 1.
\end{array}
$$
```

Output:

$$
\begin{array}{ll}
\text{maximize}  & c^T x \\
\text{subject to}& d^T x = \alpha \\
&0 \le x \le 1.
\end{array}
$$


---
**Example6: alignat**

Code:
```
$$
\begin{alignat}{5}
  \max \quad        & z = &   x_1  & + & 12 x_2  &   &       &         && \\
  \mbox{s.t.} \quad &     & 13 x_1 & + & x_2     & + & 12x_3 & \geq 5  && \tag{constraint 1} \\
                    &     & x_1    &   &         & + & x_3   & \leq 16 && \tag{constraint 2} \\
                    &     & 15 x_1 & + & 201 x_2 &   &       & =    14 && \tag{constraint 3} \\
                    &     & \rlap{x_i \ge 0, i = 1, 2, 3}
\end{alignat}
$$
```

Output:

$$
\begin{alignat}{5}
  \max \quad        & z = &   x_1  & + & 12 x_2  &   &       &         && \\
  \mbox{s.t.} \quad &     & 13 x_1 & + & x_2     & + & 12x_3 & \geq 5  && \tag{constraint 1} \\
                    &     & x_1    &   &         & + & x_3   & \leq 16 && \tag{constraint 2} \\
                    &     & 15 x_1 & + & 201 x_2 &   &       & =    14 && \tag{constraint 3} \\
                    &     & \rlap{x_i \ge 0, i = 1, 2, 3}
\end{alignat}
$$
