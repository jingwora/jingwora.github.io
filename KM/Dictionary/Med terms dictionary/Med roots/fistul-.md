---
tags: [" #medroot"]
aliases: []
roots: [fistul-]
forms: [combining]
alphabet:: F
definition: [fistula, abnormal tube-like passage in the body]
---
>[!Note] DEFINITION of fistul-
>fistula, abnormal tube-like passage in the body
_____
>[!info]+ ETYMOLOGY of fistul-
>#latin fistula (tube, pipe)
_____
>[!example]+ RELATED TERMS to fistul-
>
>| [[fistul-]] | fistula | abnormal tube-like passage in the body |                   -                    |
|:-----------:|:-------:|:--------------------------------------:|:--------------------------------------:|
| [[syring-]] |   YES   |                   -                    | cavity, oviduct, sweat glands, syringe |
_____
>[!tip]+ DERIVATIONS of fistul-
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
>```

[[Med roots dictionary]]