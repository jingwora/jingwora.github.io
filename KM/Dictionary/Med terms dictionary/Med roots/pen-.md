---
tags: [" #medroot"]
aliases: []
roots: [pen-]
forms: [combining]
alphabet:: P
definition: [decrease, deficiency]
---
>[!Note] DEFINITION of pen-
>decrease, deficiency
_____
>[!info]+ ETYMOLOGY of pen-
>#greek penia
_____
>[!example]+ RELATED TERMS to pen-
>
_____
>[!tip]+ DERIVATIONS of pen-
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