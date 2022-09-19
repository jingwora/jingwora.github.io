---
tags: [" #medroot"]
aliases: [coli-, colon-]
roots: [col-, coli-, colon-]
forms: [combining]
alphabet:: C
definition: [colon, Escherichia coli]
---
>[!Note] DEFINITION of col-
>colon, Escherichia coli (E. coli)
_____
>[!info]+ ETYMOLOGY of col-
>#greek kolon
_____
>[!example]+ RELATED TERMS to col-
>
_____
>[!tip]+ DERIVATIONS of col-
>```dataview
>TABLE definition AS Definition 
>FROM -#medroot
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]