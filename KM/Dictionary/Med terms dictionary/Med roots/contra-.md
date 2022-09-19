---
tags: [" #medroot"]
aliases: []
forms: [prefix]
roots: [contra-]
alphabet:: C
definition: [against, opposite]
---
>[!Note] DEFINITION of contra-
>against, opposite
_____
>[!info]+ ETYMOLOGY of contra-
>#latin
_____
>[!example]+ RELATED TERMS to contra-
>
>| [[contra-]] | against |  opposite  |     -      |        -         |
|:-----------:|:-------:|:----------:|:----------:|:----------------:|
|  [[ana-]]   |   YES   |     -      |     up     |       back       |
|  [[anti-]]  |   YES   | opposed to | preventing |    relieving     | 
|   [[ob-]]   |   YES   |     -      |   toward   | very, thoroughly |
_____
>[!tip]+ DERIVATIONS of contra-
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