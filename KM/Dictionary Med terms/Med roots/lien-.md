---
tags: [" #medroot"]
aliases: []
roots: [lien-]
forms: [combining]
alphabet:: L
definition: [spleen]
---
>[!Note] DEFINITION of lien-
>spleen
>*see also: [[splen-]]*
_____
>[!info]+ ETYMOLOGY of lien-
>#latin lien
_____
>[!example]+ RELATED TERMS to lien-
>
_____
>[!tip]+ DERIVATIONS of lien-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
___
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]