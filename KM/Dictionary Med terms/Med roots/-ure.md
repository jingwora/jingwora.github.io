---
tags: [" #medroot"]
aliases: [-ura]
roots: [-ure, -ura]
forms: [suffix, noun]
alphabet:: U
definition: [result of]
---
>[!Note] DEFINITION of -ure
 >forms nouns: result of (an action)
_____
>[!info]+ ETYMOLOGY of -ure
>#latin
_____
>[!example]+ RELATED TERMS to -ure
>
_____
>[!tip]+ DERIVATIONS of -ure
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