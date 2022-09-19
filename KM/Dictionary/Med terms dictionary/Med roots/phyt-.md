---
tags: [" #medroot"]
aliases: []
roots: [phyt-]
forms: [combining]
alphabet:: P
definition: [plant, growth]
---
>[!Note] DEFINITION of phyt-
>1. plant (organism)
>2. growth
_____
>[!info]+ ETYMOLOGY of phyt-
>#greek phyton
_____
>[!example]+ RELATED TERMS to phyt-
>
_____
>[!tip]+ DERIVATIONS of phyt-
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