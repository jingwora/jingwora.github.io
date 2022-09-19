---
tags: [" #medroot"]
aliases: []
roots: [erythr-]
forms: [combining]
alphabet:: E
definition: [red, red blood cell]
---
>[!Note] DEFINITION of erythr-
>red, red blood cell
_____
>[!info]+ ETYMOLOGY of erythr-
>#greek erythros
_____
>[!example]+ RELATED TERMS to erythr-
>
>|  [[erythr-]]   | red |  red blood cell  |
|:-----------:|:---:|:---:|
| [[eos-]] | YES | -    |>```
_____
>[!tip]+ DERIVATIONS of erythr-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
____
>[!faq]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name


[[Med roots dictionary]]