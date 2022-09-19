---
tags: [" #medroot"]
aliases: []
roots: [-form]
forms: [combining]
alphabet:: F
definition: [shape]
---
>[!Note] DEFINITION of -form
>shape
_____
>[!info]+ ETYMOLOGY of -form
>#latin, forma
_____
>[!example]+ RELATED TERMS to -form
>
>| [[-form]]  | shape | -   |
| ---------- | ----- | --- |
| [[morph-]] | YES   | form    |
_____
>[!tip]+ DERIVATIONS of -form
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