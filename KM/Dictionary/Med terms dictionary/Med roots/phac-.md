---
tags: [" #medroot"]
aliases: [phak-]
roots: [phac-, phak-]
forms: [combining]
alphabet:: P
definition: [lens]
---
>[!Note] DEFINITION of phac-
>lens
_____
>[!info]+ ETYMOLOGY of phac-
>#greek phakos (lentil)
_____
>[!example]+ RELATED TERMS to phac-
>
_____
>[!tip]+ DERIVATIONS of phac-
>
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