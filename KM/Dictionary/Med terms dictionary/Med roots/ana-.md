---
tags: [" #medroot"]
aliases: []
forms: [prefix]
roots: [ana-]
alphabet:: A
definition: [up, back, against]
---
>[!Note] DEFINITION of ana-
>1. Up
>2. Back
>3. Against
_____
>[!info]+ ETYMOLOGY of ana-
>#greek
_____
>[!example]+ RELATED TERMS to ana-
>
>|  [[ana-]]   | up  | back | against |     -      |     -      |     -      |
|:-----------:|:---:|:----:|:-------:|:----------:|:----------:|:----------:|
|  [[anti-]]  |  -  |  -   |   YES   | opposed to | preventing | relieving  |
| [[contra-]] |  -  |  -   |   YES   |  opposite  |     -      |     -      |
|  [[dors-]]  |  -  | YES  |    -    |     -      |     -      |     -      |
|   [[ob-]]   |  -  |  -   |   YES   |   toward   |    very    | thoroughly |
|  [[pali-]]  |  -  | YES  |    -    |   again    |     -      |     -      |
|   [[re-]]   |  -  | YES  |    -    |   again    |     -      | -           |
_____
>[!tip]+ DERIVATIONS of ana-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]