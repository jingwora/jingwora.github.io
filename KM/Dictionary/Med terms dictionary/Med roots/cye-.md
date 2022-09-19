---
tags: [" #medroot"]
aliases: []
roots: [cye-]
forms: [combining]
alphabet:: C
definition: [be pregnant]
---
>[!Note] DEFINITION of cye-
>be pregnant
>*see also: [[phor-]], [[fer-]], [[gest-]], [[lat-]]*
_____
>[!info]+ ETYMOLOGY of cye-
>#greek kyein
_____
>[!example]+ RELATED TERMS to cye-
>
_____
>[!tip]+ DERIVATIONS of cye-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
____
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]