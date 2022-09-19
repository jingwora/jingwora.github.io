---
tags: [" #medroot"]
aliases: [pubert-]
roots: [puber-, pubert-]
forms: [combining]
alphabet:: P
definition: [puberty]
---
>[!Note] DEFINITION of puber-
>puberty
>*see also: [[pub-]] (pubic ____)*
_____
>[!info]+ ETYMOLOGY of puber-
>#latin pubertas (manhood)
_____
>[!example]+ RELATED TERMS to puber-
>
_____
>[!tip]+ DERIVATIONS of puber-
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