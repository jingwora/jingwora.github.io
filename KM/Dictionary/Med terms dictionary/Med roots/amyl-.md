---
tags: [" #medroot"]
aliases: []
roots: [amyl-]
forms: [combining]
alphabet:: A
definition: [starch]
---
>[!Note] DEFINITION of amyl-
>starch
_____
>[!info]+ ETYMOLOGY of amyl-
>#greek amylon
_____
>[!example]+ RELATED TERMS to amyl-
>
_____
>[!tip]+ DERIVATIONS of amyl-
>```dataview
>TABLE definition AS Definition 
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