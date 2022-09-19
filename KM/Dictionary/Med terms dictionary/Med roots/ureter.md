---
tags: [" #medroot"]
aliases: []
roots: [ureter]
forms: [combining]
alphabet:: U
definition: [ureter]
---
>[!Note] DEFINITION of ureter
>ureter
>*see also: [[ur-]] (urinary tract)*
_____
>[!info]+ ETYMOLOGY of ureter
>#greek oureter
_____
>[!example]+ RELATED TERMS to ureter
>
_____
>[!tip]+ DERIVATIONS of ureter
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