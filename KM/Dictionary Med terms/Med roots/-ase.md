---
tags: [" #medroot"]
aliases: []
roots: [-ase]
forms: [suffix]
alphabet:: A
definition: [enzyme]
---
>[!Note] DEFINITION of -ase
>enzyme
_____
>[!info]+ ETYMOLOGY of -ase
>#greek
_____
>[!example]+ RELATED TERMS to -ase
>
>| [[-ase]] | enzyme | - |
| -------- | ------ | ----- |
| [[zym-]] | YES    | ferment, fermentation      |
_____
>[!tip]+ DERIVATIONS of -ase
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query functionality
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]