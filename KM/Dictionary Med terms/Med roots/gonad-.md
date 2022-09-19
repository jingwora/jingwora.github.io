---
tags: [" #medroot"]
aliases: []
roots: [gonad-]
forms: [combining]
alphabet:: G
definition: [sex glands, sex organs]
---
>[!Note] DEFINITION of gonad-
>sex glands, sex organs
_____
>[!info]+ ETYMOLOGY of gonad-
>#greek gonad
_____
>[!example]+ RELATED TERMS to gonad-
>
_____
>[!tip]+ DERIVATIONS of gonad-
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