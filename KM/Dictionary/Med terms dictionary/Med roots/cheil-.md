---
tags: [" #medroot"]
aliases: [chil-]
roots: [cheil-, chil-]
forms: [combining]
alphabet:: C
definition: [lip]
---
>[!Note] DEFINITION of cheil-
>hair
_____
>[!info]+ ETYMOLOGY of cheil-
>#greek cheilos
_____
>[!example]+ RELATED TERMS to cheil-
>
>
_____
>[!tip]+ DERIVATIONS of cheil-
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